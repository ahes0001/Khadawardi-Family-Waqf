"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface FamilyViewContextType {
  isFamilyView: boolean;
  toggleFamilyView: () => void;
  setFamilyView: (value: boolean) => void;
}

const FamilyViewContext = createContext<FamilyViewContextType | undefined>(
  undefined
);

// Storage key for persisting family view preference
const STORAGE_KEY = "waqf-family-view";

// Helper to get stored preference
function getInitialFamilyView(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "true";
}

export function FamilyViewProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isFamilyView, setIsFamilyView] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return getInitialFamilyView();
  });

  const setFamilyView = useCallback((value: boolean) => {
    setIsFamilyView(value);
    localStorage.setItem(STORAGE_KEY, String(value));
  }, []);

  const toggleFamilyView = useCallback(() => {
    setIsFamilyView((prev) => {
      const newValue = !prev;
      localStorage.setItem(STORAGE_KEY, String(newValue));
      return newValue;
    });
  }, []);

  return (
    <FamilyViewContext.Provider
      value={{ isFamilyView, toggleFamilyView, setFamilyView }}
    >
      {children}
    </FamilyViewContext.Provider>
  );
}

export function useFamilyView() {
  const context = useContext(FamilyViewContext);
  if (context === undefined) {
    throw new Error("useFamilyView must be used within a FamilyViewProvider");
  }
  return context;
}

/**
 * Hook for conditionally rendering content based on family view state.
 * Returns the gated content if in family view, otherwise returns fallback (or null).
 */
export function useGatedContent<T>(gatedContent: T, fallback: T | null = null): T | null {
  const { isFamilyView } = useFamilyView();
  return isFamilyView ? gatedContent : fallback;
}