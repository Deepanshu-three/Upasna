import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Cake, Calendar, Clock, ClipboardList, User, Venus, Mars } from "lucide-react";

interface Appointment {
    patientName: string;
    age: number;
    gender: string;
    appointmentDate: string;
    appointmentTime: string;
    symptoms: string;
}

export const AppointmentCard = ({ appt }: { appt: Appointment }) => {
    const [showDetails, setShowDetails] = useState(false); // State to toggle details

    const toggleDetails = () => {
        setShowDetails((prev) => !prev); // Toggle the state
    };

    return (
        <Card
            className="w-full mx-auto p-6 border border-[#0C6170] shadow-xl rounded-xl cursor-pointer"
            onClick={toggleDetails} // Toggle details on card click
        >
            <div className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600" />
                {appt.patientName}
            </div>

            <div className="flex flex-col gap-y-4 gap-x-6 mt-4 text-[17px] text-gray-700">
                {/* Show Name, Date, and Time initially */}
                <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-600 mr-2" />
                    <span>
                        <span className="font-medium">Date:</span>
                        <span className="ml-1.5">
                            {new Date(appt.appointmentDate).toLocaleDateString()}
                        </span>
                    </span>
                </div>

                <div className="flex items-center">
                    <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                    <span>
                        <span className="font-medium">Time:</span>
                        <span className="ml-1.5">{appt.appointmentTime}</span>
                    </span>
                </div>

                {/* Conditionally render other details based on showDetails state */}
                {showDetails && (
                    <>
                        <div className="flex items-center">
                            <Cake className="w-5 h-5 text-purple-600 mr-2" />
                            <span>
                                <span className="font-medium">Age:</span>
                                <span className="ml-1.5">{appt.age}</span>
                            </span>
                        </div>

                        <div className="flex items-center">
                            {appt.gender.toLowerCase() === "male" ? (
                                <Mars className="w-5 h-5 text-blue-500 mr-2" />
                            ) : (
                                <Venus className="w-5 h-5 text-pink-500 mr-2" />
                            )}
                            <span>
                                <span className="font-medium">Gender:</span>
                                <span className="ml-1.5">{appt.gender}</span>
                            </span>
                        </div>

                        <div className="flex items-start sm:col-span-2">
                            <ClipboardList className="w-5 h-5 text-rose-500 mr-2 mt-1" />
                            <span>
                                <span className="font-medium">Symptoms:</span>
                                <span className="ml-1.5">{appt.symptoms}</span>
                            </span>
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
};
