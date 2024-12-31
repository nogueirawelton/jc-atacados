"use client";

import { createContext, ReactNode, use, useEffect, useRef } from "react";
const PWAContext = createContext(null);

interface PWAProviderProps {
  children: ReactNode;
}

export function PWAProvider({ children }: PWAProviderProps) {
  const registration = useRef<ServiceWorkerRegistration>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    registration.current = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
  }

  return <PWAContext value={null}>{children}</PWAContext>;
}

export const usePWA = () => use(PWAContext);
