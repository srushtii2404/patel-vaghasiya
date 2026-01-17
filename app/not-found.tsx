"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiHome, HiArrowLeft, HiOfficeBuilding, HiPhone, HiMail, HiCog } from "react-icons/hi";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* 404 Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        className="mx-auto w-24 h-24 bg-main mt-10 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <HiCog className="text-4xl text-white animate-spin" style={{ animationDuration: '3s' }} />
                    </motion.div>

                    {/* 404 Number */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h1 className="text-8xl md:text-9xl font-bold text-main select-none">
                            404
                        </h1>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-main-dark">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-main text-white px-6 py-3 rounded-lg hover:bg-mainDark transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            <HiHome className="text-lg" />
                            Go Home
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            <HiOfficeBuilding className="text-lg" />
                            Contact Us
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            <HiArrowLeft className="text-lg" />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-8 border-t border-gray-200"
                    >
                        <p className="text-sm text-gray-500 mb-4">Need help? Contact us:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                            <a
                                href="tel:+919510990170"
                                className="inline-flex items-center gap-2 text-main hover:text-mainDark transition-colors"
                            >
                                <HiPhone className="text-lg" />
                                +91 95109 90170
                            </a>
                            <span className="hidden sm:block text-gray-300">•</span>
                            <a
                                href="mailto:info@pvassociates.in"
                                className="inline-flex items-center gap-2 text-main hover:text-mainDark transition-colors"
                            >
                                <HiMail className="text-lg" />
                                info@pvassociates.in
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
