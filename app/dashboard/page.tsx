"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

interface Appointment {
    id: string;
    patientName: string;
    age: number;
    address: string;
    symptoms: string;
    gender: string;
    previousTreatment: string;
    medicalHistory: string;
    whatsAppNumber: string;
    appointmentDate: Date;
    appointmentTime: string;
}

import {
    User,
    Cake,
    VenusAndMars,
    MapPin,
    MessageCircle,
    ClipboardList,
    ActivitySquare,
    FileHeart,
} from "lucide-react";

export default function DashboardPage() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [openDetails, setOpenDetails] = useState<{ [key: string]: boolean }>(
        {}
    );

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/appointments");
            const data = await res.json();
            setAppointments(data);
        };
        fetchData();
    }, []);

    const today = new Date();
    const todayDateOnly = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    ).toDateString();

    const todayAppointments = appointments.filter((appt) => {
        const apptDate = new Date(appt.appointmentDate);
        const apptDateOnly = new Date(
            apptDate.getFullYear(),
            apptDate.getMonth(),
            apptDate.getDate()
        ).toDateString();
        return apptDateOnly === todayDateOnly;
    });

    const visibleAppointments = showAll ? appointments : todayAppointments;

    const handleWhatsAppClick = (whatsAppNumber: string) => {
        const formattedNumber = whatsAppNumber.replace(/\D/g, "");
        const url = `https://wa.me/${formattedNumber}`;
        window.open(url, "_blank");
    };

    const toggleDetails = (id: string) => {
        setOpenDetails((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-6 mt-20 min-h-screen">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-100 rounded-xl shadow text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-blue-900">
                        Total Appointments
                    </h2>
                    <p className="text-2xl sm:text-3xl font-semibold">
                        {appointments.length}
                    </p>
                </div>
                <div className="p-4 bg-green-100 rounded-xl shadow text-center">
                    <h2 className="text-lg sm:text-xl font-bold text-green-900">
                        Today's Appointments
                    </h2>
                    <p className="text-2xl sm:text-3xl font-semibold">
                        {todayAppointments.length}
                    </p>
                </div>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl font-semibold mt-10">
                {showAll ? "All Appointments" : "Today's Appointments"}
            </h2>

            {/* Appointment Cards */}
            <div className="space-y-4">
                {visibleAppointments.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No appointments to show.
                    </p>
                ) : (
                    visibleAppointments.map((appt) => (
                        <div
                            key={appt.id}
                            className="border border-gray-200 rounded-lg shadow-sm bg-white p-6"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {appt.patientName}
                                </h3>
                                <div className="text-right">
                                    <p className="text-base font-medium text-gray-600">
                                        {format(
                                            new Date(appt.appointmentDate),
                                            "PPP"
                                        )}{" "}
                                        at {appt.appointmentTime}
                                    </p>
                                    <div className="mt-2 flex gap-2 justify-end">
                                        <button
                                            onClick={() =>
                                                handleWhatsAppClick(
                                                    appt.whatsAppNumber
                                                )
                                            }
                                            className="px-4 py-1.5 border border-gray-500 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition cursor-pointer"
                                        >
                                            WhatsApp
                                        </button>
                                        <button
                                            onClick={() =>
                                                toggleDetails(appt.id)
                                            }
                                            className="px-4 py-1.5 border border-gray-500 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition cursor-pointer"
                                        >
                                            {openDetails[appt.id]
                                                ? "Hide Details"
                                                : "Show Details"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {openDetails[appt.id] && (
                                <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-700 space-y-4">
                                    <div className="flex items-center gap-x-3">
                                        <User className="w-4 h-4 text-blue-500" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Name:</strong>{" "}
                                            {appt.patientName}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <Cake className="w-4 h-4 text-purple-500" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Age:</strong> {appt.age}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <VenusAndMars className="w-4 h-4 text-pink-500" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Gender:</strong>{" "}
                                            {appt.gender}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <MessageCircle className="w-4 h-4 text-green-600" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">WhatsApp:</strong>{" "}
                                            {appt.whatsAppNumber}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <MapPin className="w-4 h-4 text-yellow-600" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Address:</strong>{" "}
                                            {appt.address}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <ClipboardList className="w-4 h-4 text-indigo-600" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Symptoms:</strong>{" "}
                                            {appt.symptoms}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <ActivitySquare className="w-4 h-4 text-red-600" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Previous Treatment:</strong>{" "}
                                            {appt.previousTreatment}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <FileHeart className="w-4 h-4 text-rose-500" />
                                        <span className="text-lg font-medium">
                                            <strong className="mx-3">Medical History:</strong>{" "}
                                            {appt.medicalHistory}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}

                {/* Toggle View Button */}
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
                    >
                        {showAll
                            ? "Show Today's Appointments"
                            : "Show All Appointments"}
                    </button>
                </div>
            </div>
        </div>
    );
}
