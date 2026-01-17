"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-gray-200 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-main mb-4 text-center">Get in Touch</h2>
      <p className="text-gray-600 text-center mb-6">
        Have a project in mind? Fill out the form and we’ll get back to you quickly.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition resize-none h-36"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-main text-white font-semibold py-4 rounded-xl shadow-md hover:bg-main-dark transition duration-300"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
