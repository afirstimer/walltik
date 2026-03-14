export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
};

export type ConsentChoice = 'all' | 'custom' | 'essential-only';

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_CONSENT_DATE_KEY = 'cookie-consent-date';

/**
 * Get current cookie consent from localStorage
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    return consent ? JSON.parse(consent) : null;
  } catch {
    return null;
  }
}

/**
 * Save cookie consent to localStorage
 */
export function saveCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
  } catch (error) {
    console.warn('Failed to save cookie consent:', error);
  }
}

/**
 * Check if user has given consent for specific category
 */
export function hasConsent(category: keyof CookieConsent): boolean {
  const consent = getCookieConsent();
  return consent?.[category] ?? false;
}

/**
 * Clear all cookie consent data
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
  } catch (error) {
    console.warn('Failed to clear cookie consent:', error);
  }
}

/**
 * Check if consent needs to be refreshed (older than 1 year)
 */
export function shouldRefreshConsent(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const consentDate = localStorage.getItem(COOKIE_CONSENT_DATE_KEY);
    if (!consentDate) return true;
    
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    
    return new Date(consentDate) < oneYearAgo;
  } catch {
    return true;
  }
}

/**
 * Set a cookie with proper attributes
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === 'undefined') return;
  
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  
  const expires = `expires=${date.toUTCString()}`;
  const domain = window.location.hostname === 'localhost' ? '' : `;domain=.${window.location.hostname}`;
  
  document.cookie = `${name}=${value};${expires};path=/${domain};SameSite=Lax;${window.location.protocol === 'https:' ? 'Secure;' : ''}`;
}

/**
 * Get a cookie value
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return null;
}

/**
 * Delete a cookie
 */
export function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname};SameSite=Lax;${window.location.protocol === 'https:' ? 'Secure;' : ''}`;
}
