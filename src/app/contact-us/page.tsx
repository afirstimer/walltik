'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export default function ContactUsPage() {
    const [form, setForm] = useState({
        businessName: '',
        fullName: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, consent: e.target.checked });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Add API call or email sending logic here
    };

    return (
        <div className="min-h-screen from-white to-[#f9fafa] text-white relative">
            <Header />

            <div className="absolute inset-0 z-0">
                <img
                    src="/images/contact-bg.png" // <-- Replace with actual image path
                    alt="Contact background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <main className="relative z-10 flex items-center justify-center py-24 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#000000cc] backdrop-blur-lg p-10 rounded-lg w-full max-w-xl space-y-6"
                >
                    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-4">Contact us</h1>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Business Name</label>
                        <Input name="businessName" placeholder="Business Name" value={form.businessName} onChange={handleChange} />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Full Name *</label>
                        <Input name="fullName" placeholder="Full Name" required value={form.fullName} onChange={handleChange} />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Email *</label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Phone *</label>
                        <Input
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Message us</label>
                        <Textarea
                            name="message"
                            placeholder="Write us your message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-300">
                        <Checkbox id="consent" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                        <label htmlFor="consent" className="leading-snug">
                            I consent to receive SMS notifications, alerts & occasional marketing communications from eHorizon Systems.
                            Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                        </label>
                    </div>

                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                        Submit
                    </Button>

                    <div className="text-center text-xs mt-4">
                        <a href="/terms-of-service" className="text-blue-400 hover:underline mr-2">Terms & Conditions</a>
                        |
                        <a href="/privacy-policy" className="text-blue-400 hover:underline ml-2">Privacy Policy</a>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}
