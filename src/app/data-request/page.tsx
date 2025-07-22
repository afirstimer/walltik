'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from "react-hot-toast";

export default function DataRequestPage() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        confirmEmail: '',
        country: '',
        requestType: 'access',
        details: '',
        consent: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, consent: e.target.checked });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.consent) {
            toast.error('Please confirm your consent before submitting.');
            return;
        }

        if (form.email !== form.confirmEmail) {
            toast.error('Email addresses do not match.');
            return;
        }

        const loadingToast = toast.loading('Submitting request...');

        try {
            const res = await fetch('https://formspree.io/f/mwpqpgdv', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.ok || res.ok) {
                toast.success('Your request has been submitted.', { id: loadingToast });
                setForm({
                    fullName: '',
                    email: '',
                    confirmEmail: '',
                    country: '',
                    requestType: 'access',
                    details: '',
                    consent: false,
                });
            } else {
                toast.error(data?.errors?.[0]?.message || 'Submission failed.', { id: loadingToast });
            }
        } catch {
            toast.error('Network error. Please try again later.', { id: loadingToast });
        }
    };

    return (
        <div className="min-h-screen from-white to-[#f9fafa] text-white relative">
            <Header />

            <div className="absolute inset-0 z-0">
                <img
                    src="/images/contact-bg.png"
                    alt="GDPR Request Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <main className="relative z-10 flex items-center justify-center py-24 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#000000cc] backdrop-blur-lg p-10 rounded-lg w-full max-w-xl space-y-6"
                >
                    <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
                        GDPR Data Request
                    </h1>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Full Name *</label>
                        <Input
                            name="fullName"
                            required
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Email Address *</label>
                        <Input
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Confirm Email Address *</label>
                        <Input
                            name="confirmEmail"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={form.confirmEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Country of Residence</label>
                        <select
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md bg-black border border-gray-500 text-white"
                        >
                            <option value="">-- Select your country --</option>
                            <option value="Germany">Germany</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="France">France</option>
                            <option value="Spain">Spain</option>
                            <option value="Italy">Italy</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Request Type *</label>
                        <select
                            name="requestType"
                            required
                            value={form.requestType}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md bg-black border border-gray-500 text-white"
                        >
                            <option value="access">Access my personal data</option>
                            <option value="deletion">Delete my personal data</option>
                            <option value="correction">Correct my personal data</option>
                            <option value="objection">Object to data processing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1">Details of Your Request *</label>
                        <Textarea
                            name="details"
                            required
                            rows={4}
                            placeholder="Provide specific details about your request"
                            value={form.details}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-300">
                        <Checkbox id="consent" checked={form.consent} onChange={handleCheckbox} />
                        <label htmlFor="consent" className="leading-snug">
                            I confirm that the information provided is accurate and I am the data subject or an authorized representative.
                        </label>
                    </div>

                    <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                        Submit Request
                    </Button>

                    <div className="text-center text-xs mt-4">
                        <a href="/privacy-policy" className="text-blue-400 hover:underline">
                            View our Privacy Policy
                        </a>
                    </div>
                </form>
            </main>

            <Footer />
        </div>
    );
}
