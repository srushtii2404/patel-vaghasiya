"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    console.log('Form data:', data);

    try {
      console.log('Sending to Formspree...');
      const formspreeResponse = await fetch('https://formspree.io/f/mdawngjv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          _subject: `New Contact Form Submission from ${data.name}`,
          _replyto: data.email,
        }),
      });

      console.log('Formspree Response status:', formspreeResponse.status);

      if (formspreeResponse.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ve received your inquiry and will get back to you within 24 hours.'
        });
        formRef.current?.reset();
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
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

  return (
    <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-gray-200 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-main mb-4 text-center">Get in Touch</h2>
      <p className="text-gray-600 text-center mb-6">
        Have a project in mind? Fill out the form and we'll get back to you quickly.
      </p>

      {/* Status Messages */}
      {submitStatus.type && (
        <div className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success'
          ? 'bg-green-50 border border-green-200 text-green-800'
          : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition"
            required
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
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-main text-white font-semibold py-4 rounded-xl shadow-md hover:bg-main-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
}
