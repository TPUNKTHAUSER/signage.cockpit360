"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Cookie, Check, Settings, ShieldCheck, BarChart3, Megaphone, UserCog } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preference: boolean;
}

interface CookieBannerProps {
  preferences: CookiePreferences;
  onPreferencesChange: (prefs: CookiePreferences) => void;
  onAcceptAll: () => void;
  onDeclineAll: () => void;
  onSavePreferences: (prefs: CookiePreferences) => void;
}

export default function CookieBanner({
  preferences,
  onPreferencesChange,
  onAcceptAll,
  onDeclineAll,
  onSavePreferences,
}: CookieBannerProps) {
  const t = useTranslations("cookie");
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    onPreferencesChange({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  return (
    <>
      {/* Cookie Banner - Dezent */}
      <div className="cookie-banner animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Cookie className="w-5 h-5 text-slate-400 shrink-0" />
              <p className="text-slate-300 text-sm">
                {t("text")}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                onClick={onAcceptAll}
                size="sm"
                className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
              >
                {t("acceptAll")}
              </Button>
              <Button
                onClick={onDeclineAll}
                variant="ghost"
                size="sm"
                className="px-4 py-1.5 text-slate-400 text-sm hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              >
                {t("decline")}
              </Button>
              <Button
                onClick={() => setShowModal(true)}
                variant="ghost"
                size="sm"
                className="px-3 py-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 -m-6 mb-6 rounded-t-lg">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6" />
              <div>
                <DialogTitle className="text-2xl font-bold text-white">
                  {t("manageTitle")}
                </DialogTitle>
                <p className="text-white/90 mt-1">{t("manageSubtitle")}</p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {t("necessaryTitle")}
                  </h3>
                </div>
                <Switch checked={true} disabled />
              </div>
              <p className="text-gray-600 text-sm">{t("necessaryText")}</p>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-600 shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {t("analyticsTitle")}
                  </h3>
                </div>
                <Switch
                  checked={preferences.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                />
              </div>
              <p className="text-gray-600 text-sm">{t("analyticsText")}</p>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Megaphone className="w-5 h-5 text-purple-600 shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {t("marketingTitle")}
                  </h3>
                </div>
                <Switch
                  checked={preferences.marketing}
                  onCheckedChange={() => handleToggle("marketing")}
                />
              </div>
              <p className="text-gray-600 text-sm">{t("marketingText")}</p>
            </div>

            {/* Preference Cookies */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <UserCog className="w-5 h-5 text-orange-600 shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {t("preferenceTitle")}
                  </h3>
                </div>
                <Switch
                  checked={preferences.preference}
                  onCheckedChange={() => handleToggle("preference")}
                />
              </div>
              <p className="text-gray-600 text-sm">{t("preferenceText")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6 pt-6 border-t border-gray-200">
            <Button
              onClick={() => {
                onSavePreferences(preferences);
                setShowModal(false);
              }}
              variant="outline"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-400 hover:bg-blue-50 font-semibold"
            >
              {t("saveSelection")}
            </Button>
            <Button
              onClick={() => {
                onAcceptAll();
                setShowModal(false);
              }}
              className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
            >
              {t("acceptAll")}
              <Check className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
