"use client";

import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { popupSchema } from "@/app/schema/popupSchema";
import { toast } from "sonner";

const HomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const form = useForm({
    resolver: zodResolver(popupSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof popupSchema>) => {
    try {
      const res = await fetch("/api/popup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast.error("Something went wrong");
        return;
      } else {
        toast.success("We will contact you soon");
        setShowPopup(false);
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 overflow-auto">
      {/* Transparent background without black overlay */}
      <div className="absolute inset-0 bg-transparent pointer-events-auto" />
      
      <div className="relative bg-white w-full max-w-md p-6 rounded-2xl shadow-xl z-10">
        <h2 className="text-2xl font-bold mb-4 text-center"> Get Instant Callback!</h2>
        <p className="mb-4 text-center text-sm text-gray-600">
          Please fill out this short form.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="secondary" type="button" onClick={() => setShowPopup(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default HomePopup;
