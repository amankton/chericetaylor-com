"use client";

import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setMessage("");

        try {
            await addDoc(collection(db, "subscribers"), {
                email: email,
                subscribedAt: serverTimestamp(),
                source: "website_footer"
            });
            setStatus("success");
            setMessage("Thanks for subscribing! You're on the list.");
            setEmail("");
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                    className="flex-1 px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-50 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 transition-all disabled:opacity-50"
                    required
                />
                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="px-6 py-3 bg-stone-50 text-stone-900 font-medium rounded-lg hover:bg-white transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                >
                    {status === "loading" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>Joined</span>
                        </div>
                    ) : (
                        "Subscribe"
                    )}
                </button>
            </form>

            {/* Feedback Message */}
            {message && (
                <div className={`mt-3 text-sm flex items-center gap-2 ${status === "error" ? "text-red-400" : "text-green-400"}`}>
                    {status === "error" && <AlertCircle className="w-4 h-4" />}
                    {message}
                </div>
            )}
        </div>
    );
}
