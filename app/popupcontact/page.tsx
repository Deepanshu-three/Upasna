// Page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Loader2Icon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Contact {
  id: string;
  name: string;
  contactNumber: string;
  city: string;
}

const Page = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/popup");
        if (!res.ok) throw new Error("Failed to fetch contacts");

        const data = await res.json();
        setContacts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch("/api/popup", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      // Remove the contact from the state after successful deletion
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
    } else {
      const errorData = await res.json();
      setError(errorData.message || "Failed to delete contact");
    }
  };

  const animationVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl text-[#0C6170] font-medium mb-6 text-center">
        Contact Information
      </h1>

      {loading && (
        <div className="flex items-center justify-center">
          <Loader2Icon className="animate-spin" />
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && (
        <Tabs
          defaultValue="all"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="w-full justify-center ">
            <TabsTrigger className="cursor-pointer" value="all">
              All Contacts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-6">
            <AnimatePresence mode="wait">
              {selectedTab === "all" &&
                (contacts.length === 0 ? (
                  <motion.p
                    key="no-contacts"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariant}
                    className="text-center text-muted-foreground"
                  >
                    No contact information available.
                  </motion.p>
                ) : (
                  contacts.map((contact, idx) => (
                    <motion.div
                      key={contact.id}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={animationVariant}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <div className="p-4 border rounded-md shadow-sm flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{contact.name}</p>
                          <p className="text-sm text-gray-500">{contact.contactNumber}</p>
                          <p className="mt-2 text-sm">{contact.city}</p>
                          <p className="mt-2 text-xs text-gray-400">
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="text-red-500 hover:text-red-700 font-medium cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))
                ))}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Page;
