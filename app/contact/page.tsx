"use client";

import React, { useRef } from "react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiOfficeBuilding } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function ContactUsPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const formRef = useRef<HTMLFormElement>(null);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName')?.toString() || '',
            lastName: formData.get('lastName')?.toString() || '',
            email: formData.get('email')?.toString() || '',
            phone: formData.get('phone')?.toString() || '',
            service: formData.get('service')?.toString() || '',
            message: formData.get('message')?.toString() || '',
        };

        console.log('Form data:', data);

        try {
            console.log('Sending form data to API...');

            // First save to local file
            const localResponse = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Local API Response status:', localResponse.status);

            // Then send to Formspree for email
            console.log('Sending to Formspree...');
            const formspreeResponse = await fetch('https://formspree.io/f/xeeqkyqq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    phone: data.phone,
                    service: data.service,
                    message: data.message,
                    _subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
                    _replyto: data.email,
                }),
            });

            console.log('Formspree Response status:', formspreeResponse.status);

            if (formspreeResponse.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your message! We\'ve received your inquiry and will get back to you within 24 hours.'
                });
                // Reset form by clearing all fields
                formRef.current?.reset();
            } else {
                // If Formspree fails but local save worked, still show success
                if (localResponse.ok) {
                    setSubmitStatus({
                        type: 'success',
                        message: 'Thank you for your message! We\'ve received your inquiry and will get back to you within 24 hours.'
                    });
                    // Reset form by clearing all fields
                    e.currentTarget?.reset();
                } else {
                    setSubmitStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again.'
                    });
                }
            }

        } catch (error) {
            console.error('Submit error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Patel & Vaghasiya, Chartered Accountants",
        "description": "Get in touch with Patel & Vaghasiya for expert Chartered Accountancy services in Ahmedabad, Gujarat. Contact us for company registration, tax advisory, project finance, and more.",
        "url": "https://patelvaghasiyaassociates.com/contact",
        "publisher": {
            "@type": "Organization",
            "name": "Patel & Vaghasiya",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "401, Sunrise Business Center, Nr. Gurukul Circle, Nikol",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382350",
                "addressCountry": "India"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9510990170",
                "email": "info@pvassociates.in",
                "contactType": "customer service",
                "availableLanguage": "English"
            }
        }
    };

    const contactInfo = [
        {
            icon: HiPhone,
            title: "Phone",
            details: ["+91-9510990170"],
            color: "text-blue-600"
        },
        {
            icon: HiMail,
            title: "Email",
            details: ["info@pvassociates.in"],
            color: "text-green-600"
        },
        {
            icon: HiLocationMarker,
            title: "Office Address",
            details: ["401, Sunrise Business Center", "Nr. Gurukul Circle, Nikol", "Ahmedabad, Gujarat - 382350"],
            color: "text-red-600"
        },
        {
            icon: HiClock,
            title: "Business Hours",
            details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: Closed"],
            color: "text-purple-600"
        }
    ];

    return (
        <>
            <SEO
                title="Contact Us - Patel & Vaghasiya, Chartered Accountants | Ahmedabad, Gujarat"
                description="Get in touch with Patel & Vaghasiya for expert Chartered Accountancy services. Contact us for company registration, tax advisory, project finance, and government subsidies in Ahmedabad, Gujarat."
                url="https://patelvaghasiyaassociates.com/contact"
                image="https://patelvaghasiyaassociates.com/assets/logo.png"
                keywords="contact Patel Vaghasiya Chartered Accountants, CA contact Ahmedabad, Gujarat CA services contact, tax advisory contact Gujarat"
                jsonLd={jsonLd}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/contacyus.jpg"
                        alt="Patel & Vaghasiya Chartered Accountants - Professional Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1321]/85 via-[#134c78]/80 to-[#0d1321]/85"></div>
                </div>

                {/* Animated background elements */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    className="absolute top-20 left-20 w-32 h-32 bg-main/20 rounded-full blur-2xl"
                />

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-20 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
                                Contact <span className="block md:inline">Us</span>
                            </h1>
                            <div className="w-24 h-1 bg-main mx-auto rounded-full"></div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                        >
                            Ready to take your business to the next level? Get in touch with our expert Chartered Accountants.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                        >
                            <Link
                                href="#contact-form"
                                className="inline-block bg-main text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-main/50"
                            >
                                Send Message
                            </Link>
                            <Link
                                href="#contact-info"
                                className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Get Contact Details
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent"></div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 section-bg">
                <div className="space-y-20">

                    {/* Contact Information Cards */}
                    <motion.section
                        id="contact-info"
                        className="space-y-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="inline-block p-4 bg-main/10 rounded-full mb-4"
                            >
                                <HiOfficeBuilding className="text-5xl text-main" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-extrabold gradient-heading">
                                Get In Touch
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-main to-mainDark mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactInfo.map((info, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="glass-card p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    onClick={() => {
                                        if (info.title === "Phone") {
                                            window.location.href = `tel:${info.details[0].replace(/\s+/g, '')}`;
                                        } else if (info.title === "Email") {
                                            window.location.href = `mailto:${info.details[0]}`;
                                        } else if (info.title === "Office Address") {
                                            const address = encodeURIComponent(info.details.join(', '));
                                            window.open(`https://maps.google.com/?q=${address}`, '_blank');
                                        }
                                    }}
                                >
                                    <div className={`inline-block p-3 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <info.icon className={`text-2xl ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-main-dark mb-3 group-hover:text-main transition-colors duration-300">{info.title}</h3>
                                    <div className="space-y-1">
                                        {info.details.map((detail, detailIdx) => (
                                            <div
                                                key={detailIdx}
                                                className="text-gray-600 text-sm leading-relaxed hover:text-main-dark transition-colors duration-300"
                                            >
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 text-xs text-main font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {info.title === "Phone" && "Click to call"}
                                        {info.title === "Email" && "Click to email"}
                                        {info.title === "Office Address" && "Click to view map"}
                                        {info.title === "Business Hours" && "Our working hours"}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Contact Form & Map */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <motion.section
                            id="contact-form"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl md:text-4xl font-extrabold gradient-heading">
                                        Send Us a Message
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                {/* Status Messages */}
                                {submitStatus.type && (
                                    <div className={`p-4 rounded-lg ${submitStatus.type === 'success'
                                        ? 'bg-green-50 border border-green-200 text-green-800'
                                        : 'bg-red-50 border border-red-200 text-red-800'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300"
                                            placeholder="+91-9510990170"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="company-registration">Company Registration</option>
                                            <option value="tax-advisory">Tax Advisory</option>
                                            <option value="project-finance">Project Finance</option>
                                            <option value="audit-services">Audit Services</option>
                                            <option value="gst-services">GST Services</option>
                                            <option value="government-subsidies">Government Subsidies</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-main focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-main text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-main/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.section>

                        {/* Map & Additional Info */}
                        <motion.section
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-extrabold gradient-heading">
                                    Visit Our Office
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Located in the heart of Ahmedabad, our office is easily accessible by all modes of transport.
                                </p>
                            </div>

                            {/* Map Placeholder */}
                            {/* Google Map */}
                            <div className="glass-card rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps?q=401,+Sunrise+Business+Center,+Nr.+Gurukul+Circle,+Nikol,+Ahmedabad,+Gujarat+-+382350&output=embed"
                                    width="100%"
                                    height="260"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                />
                            </div>


                            {/* Quick Contact */}
                            <div className="glass-card p-6 space-y-4">
                                <h3 className="text-xl font-bold text-main-dark">Quick Contact</h3>
                                <div className="space-y-3">
                                    <a
                                        href="tel:+919510990170"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                            <HiPhone className="text-blue-600 text-lg flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-blue-700 font-medium transition-colors duration-300">+91-9510990170</span>
                                    </a>
                                    <a
                                        href="mailto:info@pvassociates.in"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 hover:scale-105 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                                            <HiMail className="text-green-600 text-lg flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-green-700 font-medium transition-colors duration-300">info@pvassociates.in</span>
                                    </a>
                                    <a
                                        href={`https://maps.google.com/?q=${encodeURIComponent('401, Sunrise Business Center, Nr. Gurukul Circle, Nikol, Ahmedabad, Gujarat - 382350')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 hover:scale-105 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="p-2 bg-red-100 rounded-full group-hover:bg-red-200 transition-colors duration-300 mt-1">
                                            <HiLocationMarker className="text-red-600 text-lg flex-shrink-0" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-red-700 font-medium transition-colors duration-300">
                                            401, Sunrise Business Center<br />
                                            Nr. Gurukul Circle, Nikol<br />
                                            Ahmedabad, Gujarat - 382350
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* CTA Section */}
                    <motion.section
                        className="bg-main-dark p-12 rounded-2xl shadow-xl border border-mainDark/20 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Partner with Gujarat's Leading CA Firm?
                        </h2>
                        <p className="text-gray-300 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                            Join hundreds of satisfied clients who trust Patel & Vaghasiya for their financial and regulatory needs. Let's discuss how we can help your business succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#contact-form"
                                className="inline-block bg-main text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Start Your Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-block bg-white text-main-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    );
}
