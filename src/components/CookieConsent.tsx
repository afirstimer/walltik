"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Settings, Shield } from 'lucide-react';

export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

export type ConsentChoice = 'all' | 'custom' | 'essential-only';

interface CookieConsentProps {
  onConsent?: (consent: CookieConsent) => void;
}

export default function CookieConsent({ onConsent }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    personalization: false,
  });

  useEffect(() => {
    // Check if user already made consent choice
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    let newConsent: CookieConsent;
    
    switch (choice) {
      case 'all':
        newConsent = {
          essential: true,
          analytics: true,
          marketing: true,
          personalization: true,
        };
        break;
      case 'essential-only':
        newConsent = {
          essential: true,
          analytics: false,
          marketing: false,
          personalization: false,
        };
        break;
      case 'custom':
        // Use current settings from modal
        newConsent = consent;
        break;
      default:
        newConsent = consent;
    }

    setConsent(newConsent);
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    if (onConsent) {
      onConsent(newConsent);
    }
    
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
        <div className="bg-white border-t border-gray-200 w-full max-w-[90vw] md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-lg shadow-2xl">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  We protect your privacy, you support our deal creators
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Main Content */}
            <div className="mb-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                This website uses cookies and similar technologies to function, personalize user experience, 
                and analyze traffic. By consenting, you allow this website and its partners to 
                collect and process personal data from your device, including IP address and visited pages.
              </p>

              <p className="text-sm text-gray-500 mb-4">
                <strong className="text-gray-700">Puruses of data processing:</strong>
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Storing or accessing information on a device
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Using reduced data for content selection, creation of profiles for personalized advertising, and content personalization
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Measuring advertising and content performance
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Analyzing target groups
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Developing and improving offers
                </li>
              </ul>

              <p className="text-xs text-gray-500">
                By accepting, you consent to the use of cookies in accordance with our 
                <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">
                  Cookie Policy
                </a>
                . You can review and change your choices or refuse cookies at any time.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowSettings(true)}
                className="flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                Cookie settings
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={() => saveConsent('essential-only')}
                className="text-gray-600 hover:text-gray-800"
              >
                Without consent continue
              </Button>
              
              <Button
                size="lg"
                onClick={() => saveConsent('all')}
                className="bg-gradient-purple-pink text-white flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All accept
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-[95vw] md:max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Cookie Settings</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Essential Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for the site to function</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.essential}
                    disabled
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They are usually only set in response to actions made by you.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors interact with our site</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.analytics}
                    onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Allow us to count visits and traffic sources so we can measure and improve 
                  the performance of our site. They help us to know which pages are most and 
                  least popular and see how visitors move around the site.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver advertising relevant to you</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.marketing}
                    onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  These cookies may be set through our site by our advertising partners. 
                  They may be used by those companies to build a profile of your interests 
                  and show you relevant adverts on other sites.
                </p>
              </div>

              {/* Personalization Cookies */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">Personalization Cookies</h4>
                    <p className="text-sm text-gray-600">Allow us to remember your preferences</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={consent.personalization}
                    onChange={(e) => setConsent({...consent, personalization: e.target.checked})}
                    className="w-4 h-4 text-purple-600 rounded"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  These cookies enable the website to remember choices you make and provide 
                  enhanced features. They may be set by us or by third-party providers 
                  whose services we have added to our pages.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowSettings(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => saveConsent('custom')}
                className="bg-gradient-purple-pink text-white"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
