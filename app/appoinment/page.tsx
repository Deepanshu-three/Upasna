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

function Page() {
    const router = useRouter(); // Initialize router for navigation
    const { data: session, status } = useSession(); // Using useSession hook to get session status
    const [isPending, startTransition] = useTransition();

    console.log(status);
    console.log(session);

    const [step, setStep] = React.useState<1 | 2>(1);
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
        new Date()
    );
    const [selectedTime, setSelectedTime] = React.useState<string>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            age: 25,
            address: "",
            symptoms: "",
            gender: "",
            previousTreatment: "",
            medicalHistory: "",
            whatsAppNumber: "",
        },
    });

    // Redirect to the login page if the user is not logged in
    React.useEffect(() => {
        if (status === "loading") return; // Wait until the session status is determined
        if (!session) {
            // Redirect to the login page if no session is found
            router.push("/sign-in");
        }
    }, [session, status, router]);

    function handleFinalSubmit(data: z.infer<typeof formSchema>) {
        if (!selectedDate || !selectedTime) {
            toast.error("Please select both date and time.");
            return;
        }

        if (!session?.user?.email) {
            toast.error("User session not found.");
            return;
        }

        const formData = {
            ...data,
            appointmentDate: selectedDate,
            appointmentTime: selectedTime,
            email: session.user.email,
            phone: "N/A", // Replace with actual input if needed
            userId: session.user.id!, // Ensure this exists in session
        };

        startTransition(async () => {
            const res = await BookAppointment(formData);

            if (!res.success) {
                toast.error(res.error || "Failed to book appointment.");
            } else {
                toast.success(res.message || "Appointment booked!");
                form.reset();
                setStep(1);
                router.push("/appointment-success");
            }
        });
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-4xl font-bold mb-8 text-blue-500 text-center">
                Book Appointment
            </div>
            <div className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-xl shadow-lg space-y-8">
                <Form {...form}>
                    {step === 1 && (
                        <form
                            onSubmit={form.handleSubmit(() => setStep(2))}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-semibold text-center text-blue-700">
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
                                                                e.target.value
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
                                            <FormLabel>Gender</FormLabel>
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
                                name="previousTreatment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Previous Treatment
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Mention any previous treatments"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="medicalHistory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Medical History</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g. Diabetes, Hypertension"
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
                                        <FormLabel>What's App Number</FormLabel>
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
                    )}

                    {step === 2 && (
                        <form
                            onSubmit={form.handleSubmit(handleFinalSubmit)}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-semibold text-center text-blue-700">
                                Choose Appointment Date & Time
                            </h2>

                            <div className="flex flex-col items-center gap-6">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    fromDate={new Date()}
                                />

                                <div className="w-full max-w-sm mx-auto">
                                    <FormItem>
                                        <FormLabel>Choose Time Slot</FormLabel>
                                        <FormControl>
                                            <Select
                                                value={selectedTime}
                                                onValueChange={setSelectedTime}
                                                defaultValue=""
                                            >
                                                <SelectTrigger className="w-full text-xl">
                                                    <SelectValue placeholder="Select Time Slot" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {[
                                                        "9-10",
                                                        "11-12",
                                                        "1-2",
                                                        "3-4",
                                                        "5-6",
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
                                    type="submit"
                                    disabled={!selectedDate || !selectedTime}
                                    className="w-full sm:w-auto"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
        </div>
    );
}

export default Page;
