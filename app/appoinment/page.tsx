"use client";
import React from "react";
import { useRouter } from "next/navigation"; // For client-side navigation
import { useSession } from "next-auth/react"; // To use the session hook
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "../schema/formSchema";
import { Calendar } from "@/components/ui/calendar";
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectContent,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useTransition } from "react";
import { BookAppointment } from "@/actions/bookAppoinment";
import { checkPromoCode } from "@/actions/checkPromoCode";
import { motion } from "framer-motion";
import Script from "next/script";

function Page() {
    const router = useRouter(); // Initialize router for navigation
    const { data: session, status } = useSession(); // Using useSession hook to get session status
    const [isPending, startTransition] = useTransition();

    console.log(status);
    console.log(session);

    const [step, setStep] = React.useState<1 | 2 | 3>(1);
    const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = React.useState<string>("");

    const [promoCode, setPromoCode] = React.useState<string>("");
    const [amount, setAmount] = React.useState<number>(500);

    const handleApplyPromoCode = async () => {
        startTransition(async () => {
            const result = await checkPromoCode(promoCode); // Call the server action
            if (result.success) {
                setAmount(amount - result.discountAmount); // Apply the discount
                toast.success(result.message); // Show success message
            }
        });
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            age: 25,
            address: "",
            symptoms: "",
            gender: "",
            whatsAppNumber: "",
        },
    });

    // Redirect to the login page if the user is not logged in
    React.useEffect(() => {
        if (status === "loading") return; // Wait until the session status is determined
        if (!session) {
            // Redirect to the login page if no session is found
            router.push("/sign-in");
            return;
        }
    }, [session, status, router]);

    const createOrder = async () => {
        try {
            const res = await fetch("/api/createOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: amount * 100 }),
            });

            const apiData = await res.json();

            if (apiData.error) {
                toast.error(apiData.res.error);
                return;
            }

            const paymentOptions = {
                key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID,
                amount: apiData.amount,
                currency: apiData.currency,
                name: "Your Company Name",
                description: "Test Transaction",
                order_id: apiData.id,
                handler: async function (response: any) {
                    const res = await fetch("/api/verifyOrder", {
                        method: "POST",
                        body: JSON.stringify({
                            orderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            amount: amount * 100,
                        }),
                    });
                    const data = await res.json();

                    if (!data.isOk) {
                        toast.error("Payment verification failed.");
                        return;
                    }

                    console.log("Payment verified successfully!", data);
                    toast.success("Payment verified successfully!");

                    const formData = {
                        ...form.getValues(),
                        appointmentDate: selectedDate,
                        appointmentTime: selectedTime,
                        email: session?.user.email!,
                        phone: "N/A",
                        userId: session?.user.id!,
                    };

                    startTransition(async () => {
                        const res1 = await BookAppointment(formData);
                        if (!res1.success)
                            toast.error(
                                res1.error || "Failed to book appointment."
                            );
                        else {
                            toast.success(
                                res1.message || "Appointment booked!"
                            );
                            form.reset();
                            setStep(1);
                            router.push("/myappointments");
                            router.refresh();
                        }
                    });
                },
            };

            const payment = new (window as any).Razorpay(paymentOptions);
            payment.open();
            // Handle successful order creation logic here
            toast.success("Order created successfully!");
        } catch (error) {
            toast.error("Failed to create order. Please try again.");
            console.error("Error creating order:", error);
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col items-center mt-10 p-4">
                <Script
                    type="text/javascript"
                    src="https://checkout.razorpay.com/v1/checkout.js"
                />
                <div className="text-4xl font-medium mb-8 text-[#0C6170] text-center">
                    Book Appointment
                </div>
                <div className="w-full max-w-2xl bg-white p-8 md:p-12 border border-[#0C6170] shadow-xl rounded-xl space-y-8">
                    <Form {...form}>
                        {step === 1 && (
                            <motion.h1
                                className="text-3xl font-bold text-center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <form
                                    onSubmit={form.handleSubmit(() =>
                                        setStep(2)
                                    )}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-semibold text-center text-[#0C6170]">
                                        Patient Consultation Form
                                    </h2>

                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="John Doe"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <FormField
                                            control={form.control}
                                            name="age"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel>Age</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            type="number"
                                                            placeholder="25"
                                                            onChange={(e) =>
                                                                field.onChange(
                                                                    Number(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="gender"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel>
                                                        Gender
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Male / Female / Other"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="address"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="123 Street, City, State"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="symptoms"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Symptoms</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Describe your symptoms"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="whatsAppNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    What's App Number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g. 9876543210"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full">
                                        Proceed
                                    </Button>
                                </form>
                            </motion.h1>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.4 }}
                            >
                                <form className="space-y-6">
                                    <h2 className="text-2xl font-semibold text-center text-blue-700">
                                        Choose Appointment Date & Time
                                    </h2>

                                    <div className="flex flex-col items-center gap-6">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={(date) =>
                                                date && setSelectedDate(date)
                                            }
                                            fromDate={new Date()}
                                        />

                                        <div className="w-full max-w-sm mx-auto">
                                            <FormItem>
                                                <FormLabel>
                                                    Choose Time Slot
                                                </FormLabel>
                                                <FormControl>
                                                    <Select
                                                        value={selectedTime}
                                                        onValueChange={
                                                            setSelectedTime
                                                        }
                                                        defaultValue=""
                                                    >
                                                        <SelectTrigger className="w-full text-xl">
                                                            <SelectValue placeholder="Select Time Slot" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {[
                                                                "9am - 10am",
                                                                "11am - 12am",
                                                                "1pm - 2pm",
                                                                "3pm - 4pm",
                                                                "5pm - 6pm",
                                                            ].map((slot) => (
                                                                <SelectItem
                                                                    key={slot}
                                                                    value={slot}
                                                                    className="text-lg"
                                                                >
                                                                    {slot}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <Button
                                            variant="outline"
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="w-full sm:w-auto"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            type="button"
                                            disabled={
                                                !selectedDate || !selectedTime
                                            }
                                            className="w-full sm:w-auto"
                                            onClick={() => setStep(3)}
                                        >
                                            Proceed
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold text-center text-blue-700">
                                        Payment Summary
                                    </h2>
                                    <div className="text-center">
                                        <p>
                                            Please proceed with the payment to
                                            book your appoinment
                                        </p>
                                    </div>

                                    {/* Payment Summary */}
                                    <div className="text-center">
                                        <p className="text-xl font-semibold">
                                            Total Amount: ₹{amount}
                                        </p>{" "}
                                        {/* Random amount in INR */}
                                    </div>

                                    {/* Promo Code Input */}
                                    <div className="flex justify-center items-center space-x-4">
                                        <input
                                            type="text"
                                            placeholder="Enter Promo Code"
                                            className="border border-gray-300 px-4 py-2 rounded-lg"
                                            onChange={(e) =>
                                                setPromoCode(e.target.value)
                                            } // Assuming setPromoCode updates state for promo code
                                        />

                                        <Button
                                            onClick={handleApplyPromoCode}
                                            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
                                        >
                                            Apply
                                        </Button>
                                    </div>

                                    {/* Proceed to Payment Button */}
                                    <div className="flex justify-around">
                                        <Button
                                            variant="outline"
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="w-full sm:w-auto"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            disabled={isPending}
                                            onClick={createOrder}
                                            className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-lg"
                                        >
                                            Proceed to Payment
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Page;
