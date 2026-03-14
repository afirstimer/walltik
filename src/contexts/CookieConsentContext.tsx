"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookieConsent, getCookieConsent, saveCookieConsent, shouldRefreshConsent } from '@/lib/cookieUtils';

interface CookieConsentContextType {
  consent: CookieConsent | null;
  hasConsent: (category: keyof CookieConsent) => boolean;
  updateConsent: (consent: CookieConsent) => void;
  isConsentGiven: boolean;
  shouldShowBanner: boolean;
  dismissBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(() => {
    // Initialize from localStorage
    return getCookieConsent();
  });

  const [shouldShowBanner, setShouldShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent exists and is still valid
    const savedConsent = getCookieConsent();
    const needsRefresh = shouldRefreshConsent();
    
    if (!savedConsent || needsRefresh) {
      setShouldShowBanner(true);
    }
  }, []);

  const updateConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent);
    saveCookieConsent(newConsent);
    setShouldShowBanner(false);
  };

  const hasConsent = (category: keyof CookieConsent): boolean => {
    return consent?.[category] ?? false;
  };

  const dismissBanner = () => {
    setShouldShowBanner(false);
  };

  const isConsentGiven = !!consent;

  const value: CookieConsentContextType = {
    consent,
    hasConsent,
    updateConsent,
    isConsentGiven,
    shouldShowBanner,
    dismissBanner,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
