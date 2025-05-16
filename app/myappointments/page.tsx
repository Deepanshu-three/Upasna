"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Loader2Icon } from "lucide-react";
import { AppointmentCard } from "./_components/AppointmentCard";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

interface Appointment {
  patientName: string;
  age: number;
  gender: string;
  appointmentDate: string;
  appointmentTime: string;
  symptoms: string;
}

const Page = () => {
  const [data, setData] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("upcoming");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/userAppointments");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setData(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingAppointments = data.filter(
    (appt) => new Date(appt.appointmentDate) >= today
  );
  const olderAppointments = data.filter(
    (appt) => new Date(appt.appointmentDate) < today
  );

  const animationVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <>
      <Head>
        <title>My Appointments | Upasna Homoeo Patient Portal</title>
        <meta
          name="description"
          content="View and manage your upcoming and past appointments with Upasna Homoeo Clinic. Easy access to your homeopathic treatment schedule."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="My Appointments | Upasna Homoeo Patient Portal"
        />
        <meta
          property="og:description"
          content="Manage your appointments conveniently at Upasna Homoeo. Track your homeopathic consultations and stay updated with your treatment plan."
        />
        <meta
          property="og:url"
          content="https://www.upasanahomoeo.com/myappointments"
        />
        <meta
          property="og:image"
          content="https://www.upasanahomoeo.com/images/appointments-og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Upasna Homoeo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="My Appointments | Upasna Homoeo Patient Portal"
        />
        <meta
          name="twitter:description"
          content="Access and manage your homeopathic appointments easily at Upasna Homoeo Clinic."
        />
        <meta
          name="twitter:image"
          content="https://www.upasanahomoeo.com/images/appointments-og.jpg"
        />
      </Head>

      <div className="min-h-screen p-4 max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl text-[0C6170] font-medium mb-6 text-center">
          My Appointments
        </h1>

        {loading && (
          <div className="flex items-center justify-center">
            <Loader2Icon className="animate-spin" />
          </div>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && (
          <Tabs
            defaultValue="upcoming"
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="w-full justify-center ">
              <TabsTrigger className="cursor-pointer" value="upcoming">
                Upcoming
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="older">
                Older
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4 mt-6">
              <AnimatePresence mode="wait">
                {selectedTab === "upcoming" &&
                  (upcomingAppointments.length === 0 ? (
                    <motion.p
                      key="no-upcoming"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={animationVariant}
                      className="text-center text-muted-foreground"
                    >
                      No upcoming appointments.
                    </motion.p>
                  ) : (
                    upcomingAppointments.map((appt, idx) => (
                      <motion.div
                        key={idx}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={animationVariant}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <AppointmentCard appt={appt} />
                      </motion.div>
                    ))
                  ))}
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="older" className="space-y-4 mt-6">
              <AnimatePresence mode="wait">
                {selectedTab === "older" &&
                  (olderAppointments.length === 0 ? (
                    <motion.p
                      key="no-older"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={animationVariant}
                      className="text-center text-muted-foreground"
                    >
                      No older appointments.
                    </motion.p>
                  ) : (
                    olderAppointments.map((appt, idx) => (
                      <motion.div
                        key={idx}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={animationVariant}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <AppointmentCard appt={appt} />
                      </motion.div>
                    ))
                  ))}
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default Page;
