"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import CookieBanner from "./cookie-banner";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preference: boolean;
}

interface CookieContextType {
  preferences: CookiePreferences;
  hasConsent: boolean;
  acceptAll: () => void;
  declineAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieProvider");
  }
  return context;
}

const COOKIE_CONSENT_KEY = "cockpit360_cookie_consent";

export default function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preference: false,
  });
  const [hasConsent, setHasConsent] = useState(true); // Start with true to avoid flash
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has been given
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setHasConsent(true);
        setShowBanner(false);
      } catch {
        setHasConsent(false);
        setShowBanner(true);
      }
    } else {
      setHasConsent(false);
      setShowBanner(true);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preference: true,
    };
    setPreferences(allAccepted);
    setHasConsent(true);
    setShowBanner(false);
    saveToStorage(allAccepted);
  };

  const declineAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preference: false,
    };
    setPreferences(onlyNecessary);
    setHasConsent(true);
    setShowBanner(false);
    saveToStorage(onlyNecessary);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const finalPrefs = { ...prefs, necessary: true }; // Necessary is always true
    setPreferences(finalPrefs);
    setHasConsent(true);
    setShowBanner(false);
    saveToStorage(finalPrefs);
  };

  return (
    <CookieContext.Provider
      value={{ preferences, hasConsent, acceptAll, declineAll, savePreferences }}
    >
      {children}
      {showBanner && (
        <CookieBanner
          preferences={preferences}
          onPreferencesChange={setPreferences}
          onAcceptAll={acceptAll}
          onDeclineAll={declineAll}
          onSavePreferences={savePreferences}
        />
      )}
    </CookieContext.Provider>
  );
}
