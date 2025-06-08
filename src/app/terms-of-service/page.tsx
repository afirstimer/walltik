import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const TermOfServicePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f9fafa]">
            <Header />
            <div className="max-w-5xl mx-auto px-4 py-8 text-primary text-[18px] font-normal leading-[25px] mb-5">
                <h1 className="text-3xl font-bold mb-4 text-center">WallTik' terms & conditions</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: November 05, 2024</p>

                <p className="mb-4">
                    Welcome to walltik.com (hereinafter, the "Website") owned and managed by Denise Douthard Ltd., a limited liability company incorporated under the laws of the state of Israel (hereinafter, “WallTik”), “We” or “Us”).
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">General Terms</h2>
                <p className="mb-4 ms-3">
                    WallTik is a comprehensive platform designed to streamline and automate e-commerce operations for online sellers and affiliates.
                </p>
                <p className="mb-4 ms-3">
                    By accessing, browsing, or interacting with this website in any form, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service ("Terms") along with any additional policies referenced or displayed on this site. These Terms may be updated from time to time at our discretion, and it is your responsibility to stay informed of any modifications and ensure continued compliance.
                </p>
                <p className="mb-4 ms-3">
                    Please read both these Terms and our Privacy Policy carefully before using any part of the site or its associated tools and services. If you do not accept any portion of these Terms, you must immediately discontinue use of the platform.
                </p>
                <p className="mb-4 ms-3">
                    By using the site, you affirm that you have the legal capacity to enter into a binding agreement and that you are at least 18 years of age or the age of majority in your jurisdiction. If you do not meet this requirement, you may not access or use the platform or its features.
                </p>
                <p className="mb-4 ms-3">
                    These Terms form a legally enforceable contract between you and WallTik. We recommend reviewing them periodically to stay up to date on our policies and practices.
                </p>


                {/* Repeat this structure for each section */}
                <h2 className="text-2xl font-semibold mt-8 mb-4">Access Authorization and Store Integration</h2>
                <p className="mb-4 ms-3">
                    Please note that our platform operates independently and is not affiliated with, endorsed by, or recommended by any third-party websites or e-commerce platforms referenced, linked, or utilized as data sources. Your engagement with our services and tools is at your sole discretion and risk.
                </p>
                <p className="mb-4 ms-3">
                    By agreeing to these Terms, you authorize us to access and interact with your selected e-commerce store accounts (“Store Accounts”) on your behalf. This includes the ability to perform actions such as listing products for sale or purchase, modifying pricing, inventory quantities, or other product details, ending listings, initiating purchases, and conducting any additional operations available within those Store Accounts. These Terms apply equally to both seller and buyer accounts, and all provisions shall be interpreted accordingly.
                </p>
                <p className="mb-4 ms-3">
                    Additionally, you authorize us to manage your Store Accounts using an "Out of Stock" mode. This means your listings may remain active and subject to platform fees even when inventory levels are zero.
                </p>
                <p className="mb-4 ms-3">
                    You may withdraw our access to your Store Accounts at any time by revoking the token or permission granted, directly from the settings or access controls of the relevant store platform.
                </p>
                <p className="mb-4 ms-3">
                    By using our services, you accept full responsibility for any consequences, liabilities, or violations arising from actions taken within your Store Accounts — whether by you or through our authorized operations — including breaches of third-party terms of service or applicable laws. You explicitly waive and release us from any claims or damages related to such events.
                </p>
                <p className="mb-4 ms-3">
                    Where available, you may connect your Store Accounts and user profile with third-party payment services, financial tools, or digital wallets ("Third-Party Integrated Solutions") via our platform. Use of these services is subject to both our Terms and those of the third parties involved. In the event of a conflict between our Terms and the terms of a third-party service, the third-party terms will govern your use of that specific integration
                </p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Use at Your Own Risk and Limitation of Liability</h2>
                <p className="mb-4 ms-3">
                    You acknowledge and understand that our platform operates as an intelligent automation system, relying on the integration of various third-party APIs. These external data sources may occasionally provide information that is delayed, outdated, incorrect, or incomplete. As such, by continuing to use our services, you confirm your full understanding and acceptance of the following:
                </p>
                <p className="mb-4 ms-3">
                    Your use of our platform, website, and any associated tools or services is entirely at your own risk. We shall not be held responsible for any form of harm, loss, or damage — whether direct or indirect — that may result from your use of the system. This includes, but is not limited to, financial loss, data inaccuracies, lost profits, service disruptions, damages to property, third-party claims, or any personal injuries.
                </p>
                <p className="mb-4 ms-3">
                    By using our services, you explicitly and permanently waive any right to bring claims or seek damages from us or any of our representatives — including shareholders, employees, contractors, or affiliates — in connection with the use or performance of the platform or the Website.
                </p>
                <p className="mb-4 ms-3">
                    If you choose to (i) access services from DotServe Inc. (or any affiliated or successor entity) or (ii) register a domain through them, it is your sole responsibility to read, understand, and comply with their respective Terms and Conditions and the applicable Domain Name Registration Agreement, which may be found here: https://get.store/legal.
                </p>
                <p className="mb-4 ms-3">
                    Please be aware that our platform may facilitate the purchasing of products from external vendors for delivery to your end customers. Any such transaction or use of external content or services made via the Website is your responsibility. You accept full liability for any result stemming from those transactions and waive any right to make claims against us or our representatives for issues arising from such use.
                </p>
                <p className="mb-4 ms-3">
                    There may be times when the Website or certain services are temporarily unavailable due to maintenance, technical difficulties, or for other reasons, including the removal or discontinuation of services. We reserve the right to do so at our sole discretion, and we assume no responsibility for these interruptions. You agree not to hold us liable for any inconvenience or loss caused by such downtime or service termination.
                </p>
                <p className="mb-4 ms-3">
                    Our platform serves as a tool to streamline your e-commerce operations by connecting your store accounts with third-party product providers. However, any agreement, transaction, or dispute arising between you and such third parties — whether initiated via our system or otherwise — is solely your responsibility. We do not assume liability for any financial or operational consequences that result from those interactions.
                </p>
                <p className="mb-4 ms-3">
                    Finally, should any of your connected store accounts be suspended, removed, or restricted for any reason, you accept that we shall bear no responsibility for such actions and agree not to pursue any claims against us as a result.
                </p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Account Registration and User Access</h2>
                <p className="mb-4 ms-3">
                    To use the features and services available on our platform, you must register and subscribe to a monthly plan in accordance with the pricing and package details displayed on the Website at the time of registration or renewal.
                </p>
                <p className="mb-4 ms-3">
                    To create a personal user account (“User Account”) — which grants access to platform tools, store integration features, product operations, and order processing — you must submit accurate and up-to-date information. This may include your full name, email address, physical address, a selected username and password, and any e-commerce store accounts you intend to connect (including credentials or tokens as needed for integration). We may request additional details at our sole discretion to complete your account setup.
                </p>
                <p className="mb-4 ms-3">
                    Alternatively, you may register or sign in via third-party services such as Facebook or Google. If you do so, you authorize us to access certain information from your social media profile in line with your privacy settings on those platforms. You remain responsible for managing what data is shared with us through those settings.
                </p>
                <p className="mb-4 ms-3">
                    Without accurate and complete information, we may be unable to create your User Account or provide platform services. Providing false, outdated, or misleading information — or failing to maintain the accuracy of your details — may result in temporary suspension, service limitations, or permanent termination of your account, without prior notice or compensation.
                </p>
                <p className="mb-4 ms-3">
                    You may not register using a name, identity, or brand that impersonates another person or organization or that is misleading or offensive. We reserve the right to reject, request changes to, or remove such accounts at our discretion. We may also verify your submitted details at any time, and misuse of someone else’s identity or credentials may expose you to civil and criminal liability.
                </p>
                <p className="mb-4 ms-3">
                    Your User Account is personal and must only be used by you. Sharing your login credentials or allowing others to access your account is strictly prohibited and constitutes a serious breach of these Terms. If this occurs, we reserve the right to terminate your account immediately and without refund. For your security, you should use strong, unique passwords, change them periodically, and avoid sharing them with anyone. We may enforce additional security measures such as password complexity or two-factor authentication.
                </p>
                <p className="mb-4 ms-3">
                    Unless we explicitly approve in writing, you are not permitted to create accounts for the sole purpose of promoting external services or products, nor are you allowed to operate duplicate or multiple User Accounts under a single identity.
                </p>
                <p className="mb-4 ms-3">
                    We use industry-standard encryption and security practices to protect your data and credentials. However, we are not responsible for unauthorized access to your account resulting from your failure to secure your login information. If you suspect any unauthorized access to your User Account or connected store accounts, please notify us immediately
                </p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Registration by Minors</h2>
                <p className="mb-4 ms-3">Creating a User Account on the platform is restricted to individuals who are at least 18 years of age, or the age of legal majority in their jurisdiction. Individuals under this age must have their account registration reviewed and explicitly approved by a parent or legal guardian. This may involve additional verification steps, including age confirmation and identity validation, before access is granted.
                    Any personally identifiable information submitted by users under the age of 18 will be processed in accordance with our [Privacy Policy], and the parent or legal guardian assumes full responsibility for overseeing the minor’s use of the platform. They must be the party to read, review, and agree to the Terms of Service on behalf of the minor.
                    By registering a User Account, you confirm that you are over 18 years old. If you are registering on behalf of a minor, you affirm that you are the user's parent or legal guardian, that you meet the age requirement, and that you accept full responsibility for the minor’s access and conduct on the platform, including the safeguarding of login credentials and full compliance with these Terms.
                    Using the Website
                </p>
                <p className="mb-4 ms-3">
                    You acknowledge and understand that any use made from your User Account shall be deemed to be made personally by you, and you shall be solely liable for such use.
                    Subject to lawful registration and compliance with these Terms, you are granted a limited, revocable, personal, non-sublicensable, and non-transferable license to access and use the Website and your User Account in accordance with your selected subscription package and these Terms. Any use of the Website beyond the scope of the subscribed package or in violation of these Terms constitutes a breach, and any unauthorized use from your account shall be deemed as made with your knowledge and consent.
                    If your User Account is terminated due to a breach of these Terms or applicable law, WallTik may be entitled to compensation for damages, costs, and losses. This compensation may include forfeiture of any credits or funds remaining in your User Account at the time of termination. You acknowledge that registration and use of the Website does not grant you ownership rights in the Website or its content, and does not obligate WallTik to provide you with any specific service unless explicitly agreed.
                    WallTik may, at its sole discretion, update, edit, or remove any content on the Website without prior notice.
                    WallTik reserves the right to offer promotional packages, discounts, or advertising options that may involve varied visibility or features. You agree not to raise any claim regarding the way your or others’ content is displayed or prioritized.
                    WallTik reserves the right to change the products, services, tools, and prices displayed on the Website at any time, without prior notice.
                    Any recommendations, reviews, content, or offers on the Website are provided for informational purposes only and should not be considered professional advice. You are solely responsible for any action taken based on such content.
                    Any use of the Website or Services not expressly authorized by WallTik is strictly prohibited. You agree not to misuse the Website, and not to allow others to violate these Terms through your account.
                    You agree to only use the Website for your own legitimate business purposes in connection with your registered account, and not for resale, sublicensing, or for developing competing services.
                </p>

                <p className="mb-4 ms-3">Prohibited Uses</p>

                <p className="mb-4 ms-3">Without limiting the generality of the above, you specifically agree not to:</p>
                <p className="mb-4 ms-3">Use the Website to engage in any activity that competes with WallTik or replicates its features;</p>

                <p className="mb-4 ms-3">Impersonate any person or entity, or misrepresent your affiliation with WallTik or others;</p>

                <p className="mb-4 ms-3">Copy, reproduce, distribute, publish, or modify any part of the Website without prior written consent;</p>

                <p className="mb-4 ms-3">Use the Website’s communication tools for unsolicited marketing or spam;</p>

                <p className="mb-4 ms-3">Attempt to gain unauthorized access to any system or data through the Website;</p>

                <p className="mb-4 ms-3">Interfere with or disable any security features of the Website;</p>

                <p className="mb-4 ms-3">Use WallTik’s name, brand, or trademarks without permission;</p>

                <p className="mb-4 ms-3">Share your access credentials or use the Website on behalf of multiple users without explicit authorization;</p>

                <p className="mb-4 ms-3">Use automated tools such as bots, spiders, scrapers, or similar mechanisms to access the Website without permission;</p>

                <p className="mb-4 ms-3">Reverse engineer, decompile, disassemble, or attempt to extract the source code of any part of the Website;</p>

                <p className="mb-4 ms-3">Engage in any conduct that interferes with the Website’s operations, servers, or other users.</p>


                <p className="mb-4 ms-3">WallTik reserves the right to suspend or permanently terminate your access to the Website or Services if you violate any of the above, with or without notice, and without refund.</p>

                <p className="mb-4 ms-3">Your Store and Content</p>
                To use WallTik’s services, you are required to connect one or more of your e-commerce accounts (“Shop Accounts”) to the platform. These connections are essential for the platform to function as intended. Any modifications made within your User Account or linked Shop Accounts may cause disruptions or interruptions to the services provided by WallTik.
                <p className="mb-4 ms-3">Any images, videos, or other visuals shown on the Website are for illustrative purposes only. Factors such as browser settings, device resolution, and display hardware may affect how content appears. Therefore, visual differences may exist between the digital representation and the actual product, especially for demos and previews.</p>

                WallTik is a software platform and does not sell or ship physical products. All product listings, transactions, or fulfillment are handled by third-party sellers and are subject to their respective terms and conditions, in addition to these Terms of Service.
                <p className="mb-4 ms-3">Through your User Account, you may be able to create, scrape, upload, import, post, or distribute content on or through the WallTik platform ("User Content").</p>

                WallTik does not claim ownership over User Content. This includes — but is not limited to — text, images, videos, designs, formats, product metadata, or any intellectual property you import or generate using the WallTik platform.
                <p className="mb-4 ms-3">By submitting any User Content to or through WallTik, you represent and warrant that:</p>
                <ul className="mb-4 ms-3 list-disc">
                    <li>You have all necessary rights to upload and use such content, and to grant WallTik the rights described herein;</li>

                    <li>The User Content is not confidential, proprietary, or subject to any third-party restrictions;</li>

                    <li>The User Content does not infringe upon the rights of any third party, including copyright, trademark, privacy, publicity, or other intellectual property rights;</li>

                    <li>The content is not false, misleading, or otherwise illegal under applicable laws.</li>

                </ul>
                <p className="mb-4 ms-3">By submitting or posting User Content to the platform, you grant WallTik a non-exclusive, worldwide, royalty-free, sublicensable, transferable license to use, reproduce, modify, publish, adapt, translate, display, and create derivative works of such content for the purpose of operating, improving, or marketing the services. This license continues even if your User Account is suspended or terminated.</p>

                You agree not to upload or share any content via WallTik that:
                <ul className="mb-4 ms-3 list-disc">
                    <li>Is illegal, fraudulent, or promotes harmful activities;</li>
                    <li>Is harassing, abusive, defamatory, obscene, or otherwise offensive;</li>
                    <li>Contains or promotes hate speech, violence, or explicit sexual content;</li>
                    <li>Infringes on any intellectual property or proprietary rights of others;</li>
                    <li>Violates any confidentiality agreements or privacy laws;</li>
                    <li>Contains unauthorized personal data or sensitive information;</li>
                    <li>Damages the reputation of WallTik, its team, affiliates, or partners.</li>

                </ul>
                <p className="mb-4 ms-3">You acknowledge that WallTik is not responsible for pre-screening User Content. While we may review or moderate content at our discretion, we are not obligated to do so. Any third-party websites or services accessible via hyperlinks from our platform are not under WallTik’s control, and we make no warranties regarding their content, accuracy, or reliability.</p>
                <p className="mb-4 ms-3">WallTik is not responsible for any disputes, damages, or liabilities that may arise from third-party websites, services, or business transactions initiated outside of our platform, including those resulting from scraping, affiliate links, or marketing activities.</p>
                <p className="mb-4 ms-3">If you believe any content on the WallTik platform infringes your rights (including IP, privacy, or otherwise), please contact us at: support@walltik.com with full details and any relevant evidence. We will review your complaint in good faith, but submitting a notice does not obligate WallTik to take any specific action unless required by law.</p>
                Payment Terms and Refunds
                <p className="mb-4 ms-3">Access to WallTik’s services is subject to paid subscription plans or usage-based billing, as described on our Website. Pricing may change from time to time at our sole discretion, with or without prior notice. Unless explicitly stated otherwise, all subscriptions renew automatically on a monthly basis.</p>
                <p className="mb-4 ms-3">When using third-party payment platforms (e.g., Payoneer, Stripe, PayPal), your transactions are also subject to the terms, conditions, and privacy policies of those providers. WallTik shall not be liable for limitations or policies imposed by such third-party services. In the event of conflicts, the third-party terms shall take precedence regarding their specific services, including limitations of liability and restrictions on remedies.</p>
                <p className="mb-4 ms-3">You may subscribe to any available plan on WallTik. Your subscription will renew automatically unless you cancel it through your Account Settings prior to the renewal date. Cancellations may be subject to fees. Details of cancellation and refund policies specific to each plan are available on the Website</p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Policy</h2>
                <p className="mb-4 ms-3">Payments made for WallTik subscriptions are generally non-refundable unless required by law. WallTik may, at its sole discretion, issue refunds in exceptional cases, which may be subject to processing fees of up to 15%, plus any applicable fees imposed by the payment processor.</p>
                <p className="mb-4 ms-3">To avoid future charges, you must cancel your subscription before the next billing cycle or terminate your User Account. Refunds will not be provided for unused time or partial periods.</p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Credits and Account Balance</h2>
                <p className="mb-4 ms-3">Any credits in your WallTik account will remain valid for a period of 3 months, unless stated otherwise. Accounts that are inactive, suspended, or terminated may incur maintenance or processing fees, subject to applicable law. We reserve the right to deduct reasonable handling costs from such dormant balances.</p>
                <p className="mb-4 ms-3">WallTik may also report any suspected fraudulent or unlawful behavior related to payment inactivity, misuse of credits, or dormant accounts to appropriate authorities, and provide them with relevant account details, where legally required.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Transactions</h2>
                <p className="mb-4 ms-3">Any purchases or transactions made via third-party platforms (such as TikTok Shop or supplier marketplaces) are governed by those third parties' terms and conditions. WallTik does not hold responsibility for cancellations, returns, disputes, or claims related to those transactions, even when facilitated through our platform.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Chargebacks and Disputes</h2>
                <p className="mb-4 ms-3">By registering with WallTik and submitting payments, you agree not to initiate chargebacks, credit card disputes, or similar claims for refunds directly through your financial institution. In case of any billing issues or disputes, you must contact our support team at support@walltik.com and provide relevant information so we may investigate and resolve the matter. Refunds will only be issued where legally required or explicitly approved by WallTik.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Taxes and Fees</h2>
                <p className="mb-4 ms-3">All prices shown on the Website are exclusive of taxes unless stated otherwise. You are responsible for any taxes (including sales tax, VAT, customs duties, etc.) that may apply to your payments or income through the platform. WallTik may deduct any such taxes or fees as required by law from your payments or account balance.</p>
                <p className="mb-4 ms-3">A processing fee of up to 15% may apply to certain order transactions. These fees are non-refundable. You are solely responsible for determining and fulfilling your tax obligations under applicable laws in your jurisdiction.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Fraud Prevention</h2>
                <p className="mb-4 ms-3">We reserve the right to cancel or block any payment or transaction that appears fraudulent, unauthorized, or unlawful, including unauthorized use of credit cards, payment apps, or digital wallets.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Account Security and Responsibility</h2>
                <p className="mb-4 ms-3">You are solely responsible for safeguarding your login credentials. Any actions taken from your account — including payments and subscriptions — will be deemed as authorized by you. You must notify WallTik immediately of any unauthorized access or suspected breach. We are not liable for any loss or damage caused by your failure to maintain account security.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Methods</h2>
                <p className="mb-4 ms-3">Payment methods accepted on WallTik may change from time to time at our discretion. When providing payment information (e.g., credit card, digital wallet, Payoneer account), you represent and warrant that the account or card used is owned and controlled by you. Use of unauthorized or third-party payment sources is done at your sole risk.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Invoices</h2>
                <p className="mb-4 ms-3">Invoices for your payments are available for download directly from your WallTik account dashboard. Invoices will not be sent via email automatically. Please refer to your billing history in your account for access.</p>
                <p className="mb-4 ms-3">Modifications to the Services</p>
                <p className="mb-4 ms-3">WallTik reserves the right, at its sole discretion and at any time, to modify, update, enhance, suspend, or discontinue any feature or functionality of the Website or any services provided through the platform, either temporarily or permanently, with or without prior notice.</p>
                <p className="mb-4 ms-3">This includes, but is not limited to, the removal or restriction of access to specific content, tools, features, integrations (e.g., TikTok Shop API), or user accounts where necessary. You acknowledge and agree that WallTik shall not be liable to you or to any third party for any such modifications, suspensions, or discontinuations, whether or not you have been notified in advance.</p>
                <p className="mb-4 ms-3">We may also, from time to time, update or change the layout, user interface, or technical architecture of the services to improve performance, security, or usability. Your continued use of the Website following any such changes constitutes your acceptance of the modified services.</p>


                <h2 className="text-2xl font-semibold mt-8 mb-4">Service Availability and Outages</h2>
                WallTik makes reasonable efforts to ensure uninterrupted service but does not guarantee continuous or error-free operation. You understand and agree that system outages—whether scheduled for maintenance or unexpected—may occur, and we shall not be liable for any delays, disruptions, data loss, or damages resulting from:
                <p className="mb-4 ms-3">
                    Maintenance operations or software updates,

                </p>
                <p className="mb-4 ms-3">
                    Failures of web hosting providers or internet infrastructure,

                </p>
                <p className="mb-4 ms-3">
                    Acts of third parties (e.g., DDoS attacks),


                </p>
                <p className="mb-4 ms-3">
                    Issues arising from your own network or hardware,


                </p>
                <p className="mb-4 ms-3">
                    Any force majeure event beyond our reasonable control.

                </p>
                WallTik is not responsible for any loss of access, business interruption, loss of data, or failure to perform arising directly or indirectly from such outages.

                <p className="mb-4 ms-3">
                    Termination of User Account
                </p>
                You agree that WallTik may, at its sole discretion and without prior notice, suspend or terminate your User Account or restrict your access to all or part of the services provided through the Website. This may include the removal and deletion of any User Content associated with your account, especially in cases where we reasonably determine that you have violated these Terms of Service or applicable laws and regulations.
                You acknowledge and agree that WallTik shall not be liable to you or to any third party for the suspension or termination of your access to the Website or services, nor for the deletion or loss of any of your content, data, or materials.
                You may choose to discontinue your use of the Website and request closure of your User Account at any time. However, you will remain responsible for any outstanding payments, obligations, or liabilities incurred prior to the termination of your account.

                <p className="mb-4 ms-3">
                    Privacy and Data Protection
                </p>
                At WallTik, we take your privacy seriously. We are committed to complying with all applicable data protection laws and regulations, including the GDPR, CCPA, and others as applicable based on your jurisdiction.
                Any personal information you provide to us or that is collected through your use of the Website will be handled in accordance with our Privacy Policy, which may be updated from time to time. The Privacy Policy outlines how we collect, store, use, share, and protect your data.
                By accessing and using the Website or services, you explicitly agree to the terms of our Privacy Policy. If you do not agree with the policy or any changes made to it, you should discontinue using the Website.

                <p className="mb-4 ms-3">
                    Intellectual Property Rights
                </p>
                By registering for and using the services provided on the WallTik Website, you acknowledge and agree that Denise Douthard LLC (and its affiliates, licensors, and partners where applicable) retains all ownership rights, title, and interest in and to all intellectual property relating to the Website and the services offered, including but not limited to:
                <p className="mb-4 ms-3">
                    All software, systems, algorithms, databases, and source code;

                </p>
                <p className="mb-4 ms-3">
                    The website design, layout, user interface, and user experience;

                </p>
                <p className="mb-4 ms-3">
                    All content, text, images, videos, trademarks, and branding elements;

                </p>
                <p className="mb-4 ms-3">
                    All improvements, enhancements, modifications, or derivative works of the foregoing.

                </p>
                These rights are protected under international copyright, trademark, patent, and trade secret laws.
                You further acknowledge that:
                <p className="mb-4 ms-3">
                    The WallTik name, logo, and other trademarks displayed on the Website (whether registered or not) are the property of Denise Douthard LLC.

                </p>
                <p className="mb-4 ms-3">
                    You are not granted any license, right, or interest in any WallTik intellectual property except as expressly authorized by us in writing.

                </p>
                <p className="mb-4 ms-3">
                    You shall not copy, modify, reproduce, distribute, republish, display, transmit, or use any part of the Website content for commercial or public purposes without prior written consent from WallTik.

                </p>
                <p className="mb-4 ms-3">
                    Any unauthorized use may result in civil or criminal penalties as permitted by law.

                </p>

                Protected Content Rights
                All rights and intellectual property related to the content, materials, and information published or made available on the Website are owned exclusively by WallTik (or its licensors) and are protected under applicable intellectual property laws, whether registered or unregistered. This includes, but is not limited to, all services offered on the Website, account structures, layouts, domain names, source code, user interface elements, designs, objects, features, characters, names, storylines, dialogues, phrases, locations, concepts, visual designs, animations, music, sound effects, visual effects, operational methods, metadata, databases, and all data (collectively referred to as “Protected Content”).
                Without limiting the foregoing:
                <p className="mb-4 ms-3">
                    Any content you publish or upload to the Website remains your intellectual property.

                </p>
                <p className="mb-4 ms-3">
                    However, by submitting such content, you grant WallTik a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, store, display, reproduce, modify, create derivative works, perform, and distribute your content in connection with the services provided and the promotion thereof, as long as it does not violate applicable law.

                </p>
                <p className="mb-4 ms-3">
                    Some Protected Content may be licensed from or belong to third parties. Your use of such content is also subject to the same protections and restrictions described herein.

                </p>
                You agree that:
                <p className="mb-4 ms-3">
                    You shall not use any Protected Content without the prior written approval from WallTik or the rightful owner.

                </p>
                <p className="mb-4 ms-3">
                    Any unauthorized use — including reproduction, distribution, transmission, public performance, or display — of any part of the Website or the services, whether for commercial or personal use, is strictly prohibited and may result in legal action.

                </p>

                Furthermore, any feedback, suggestions, or ideas you voluntarily submit to us (such as feature requests, UX/UI recommendations, or business suggestions) will be considered the sole property of WallTik, and you hereby assign any associated rights to us. We may use, disclose, reproduce, license, and distribute such feedback freely, without any compensation or obligation to you.

                Third Parties' Intellectual Property
                You acknowledge that some content available on the Website may belong to third parties (“Third Party Content”), including but not limited to advertisements, product listings, affiliate links, licensed media, or user-generated content. These may contain trademarks, copyrights, patents, or other proprietary rights owned by third parties.
                By using the Website and its services, you agree that:
                <p className="mb-4 ms-3">
                    All rights to Third Party Content remain with their respective owners.

                </p>


                <p className="mb-4 ms-3">
                    You will not copy, modify, distribute, sell, lease, or otherwise misuse any such Third Party Content in violation of applicable intellectual property laws.

                </p>

            </div>
            <Footer />
        </div>
    );
};

export default TermOfServicePage;
