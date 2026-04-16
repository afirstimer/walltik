import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Shield, AlertCircle, Clock, Mail, CheckCircle, XCircle, Package, CreditCard } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
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
              Refund Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our transparent refund policy ensures fair treatment for all customers while protecting 
              the integrity of our digital products and services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Nature of Products */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Package className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  1. Nature of Products
                </h2>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Walltik.com provides digital products, including automation tools, voucher codes 
                  and discount codes, which can be used on third-party partner websites.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  All products sold on Walltik.com are intangible and delivered electronically.
                </p>
              </div>
            </section>

            {/* Refund Requests for Unused Vouchers */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  2. Refund Requests for Unused Vouchers
                </h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 font-medium">
                  Customers can not request a refund even if the voucher/code has not been used or redeemed
                </p>
              </div>
            </section>

            {/* Technical Issues */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  3. Technical Issues
                </h2>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <p className="text-green-800 font-medium mb-4">
                  Refunds will be granted in the following cases:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">-</span>
                    The customer did not receive the voucher after successful payment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">-</span>
                    The voucher/code is technically invalid (e.g., incorrect format, cannot be displayed)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">-</span>
                    Payment was completed but no code was issued
                  </li>
                </ul>
              </div>
            </section>

            {/* Product Quality & Shipping Protection */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  4. Product Quality & Shipping Protection
                </h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Walltik is committed to protecting customers when purchases are made through partner platforms.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  If a product purchased using a Walltik voucher:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    Is defective
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    Is damaged during shipping
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    Does not match the description
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-800 font-medium mb-4">Walltik will:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    Assist in resolving the issue with the partner
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">-</span>
                    Review the case and may issue a full or partial refund depending on the situation
                  </li>
                </ul>
              </div>
            </section>

            {/* Non-Refundable Cases */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  5. Non-Refundable Cases
                </h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 font-medium mb-4">
                  Refunds will not be issued in the following situations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">-</span>
                    The voucher/code has already been used
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">-</span>
                    The customer failed to meet the voucher's terms and conditions
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">-</span>
                    The customer entered incorrect information during usage
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">-</span>
                    The customer changed their mind after purchase (outside eligible conditions)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">-</span>
                    The account is involved in abuse, fraud, or violation of terms
                  </li>
                </ul>
              </div>
            </section>

            {/* Refund Processing Time */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  6. Refund Processing Time
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Review Time</h3>
                  <p className="text-purple-700 font-semibold">within 24 hours</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Refund Processing</h3>
                  <p className="text-purple-700 font-semibold">3-7 business days</p>
                  <p className="text-sm text-gray-600 mt-1">
                    depending on the original payment method
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  7. Third-Party Disclaimer
                </h2>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  Walltik works with third-party platforms and does not directly control their inventory, 
                  pricing, or policies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  However, Walltik will actively support customers and prioritize fair resolution in all valid cases.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  8. Contact
                </h2>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">
                  For refund requests or support, please contact:
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-semibold">support@walltik.com</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
