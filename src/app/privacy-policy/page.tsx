import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Shield, Eye, Lock, Cookie } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how WallTik collects, 
              uses, and protects your information when you use our services.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Information We Collect
                </h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Name and email address when you create an account</li>
                  <li>• Profile information and preferences</li>
                  <li>• Payment information (processed securely)</li>
                  <li>• Shop and business information</li>
                  <li>• Communication history and support requests</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Automatically Collected Information</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• IP address and general location</li>
                  <li>• Browser type and operating system</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Click interactions and usage patterns</li>
                  <li>• Device information and identifiers</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Cookie and Tracking Data</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Essential cookies for site functionality</li>
                  <li>• Analytics cookies for usage insights</li>
                  <li>• Marketing cookies for personalized experiences</li>
                  <li>• Third-party tracking for advertising</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  How We Use Your Information
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Service Provision</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Account management and authentication</li>
                    <li>• Order processing and fulfillment</li>
                    <li>• Customer support and communication</li>
                    <li>• Service personalization</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics & Improvement</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Service usage analysis</li>
                    <li>• Performance optimization</li>
                    <li>• Feature development</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Marketing & Communication</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Product updates and announcements</li>
                    <li>• Personalized recommendations</li>
                    <li>• Promotional offers (with consent)</li>
                    <li>• Customer success stories</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Policy */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Cookie className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Cookie Policy
                </h2>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Our Cookie Commitment</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Transparency:</strong> We clearly explain what cookies we use and why
                  </p>
                  <p>
                    <strong>Control:</strong> You choose which cookies to accept
                  </p>
                  <p>
                    <strong>Security:</strong> All data is encrypted and protected
                  </p>
                  <p>
                    <strong>Compliance:</strong> We follow GDPR, CCPA, and other privacy regulations
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Required for basic site functionality and security
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Help us understand how you use our services
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Enable personalized advertising and recommendations
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Your Privacy Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Access & Control</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Request copies of your data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your account and data</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Manage cookie preferences</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Data Protection</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SSL encryption for all data</li>
                    <li>• Secure data storage practices</li>
                    <li>• Limited employee access</li>
                    <li>• Regular security audits</li>
                    <li>• Compliance with regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Questions About Privacy
              </h2>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or how we handle your data, 
                  please contact our privacy team:
                </p>
                
                <div className="space-y-2">
                  <p className="text-gray-900">
                    <strong>Email:</strong> privacy@walltik.com
                  </p>
                  <p className="text-gray-900">
                    <strong>Response Time:</strong> Within 30 days
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="mb-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Policy Updates
                </h3>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new policy on this page and updating the "Last 
                  updated" date. Continued use of our services after changes indicates your 
                  acceptance of the updated policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
