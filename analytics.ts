/**
 * Google Analytics 4 (GA4) Tracking Utility for Scptric.
 * Provides clear, human-readable custom events with type safety.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Low-level event dispatcher that sends events to GA4 (gtag) and GTM (dataLayer).
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  const cleanParams: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        cleanParams[key] = value;
      }
    }
  }

  // Dispatch to Google Analytics 4 (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, cleanParams);
  }

  // Push to Google Tag Manager dataLayer for custom event triggers
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...cleanParams,
    });
  }
}

/**
 * Product & Portfolio Interactions (Arssan, Qimah).
 */
export function trackProductClick(
  productName: "Arssan" | "Qimah",
  action: "visit_website" | "card_click" | "badge_click",
  destinationUrl?: string
): void {
  trackEvent("product_click", {
    product_name: productName,
    action,
    destination_url: destinationUrl || "internal",
  });
}

export function trackProductView(
  productName: "Arssan" | "Qimah",
  category: string
): void {
  trackEvent("product_view", {
    product_name: productName,
    product_category: category,
  });
}

/**
 * Navigation & Section Visibility.
 */
export function trackNavigationClick(
  menuItem: string,
  targetSection: string,
  source: "header_desktop" | "header_mobile" | "hero" | "footer"
): void {
  trackEvent("navigation_click", {
    menu_item: menuItem,
    target_section: targetSection,
    source,
  });
}

export function trackSectionView(sectionId: string, sectionTitle: string): void {
  trackEvent("section_view", {
    section_id: sectionId,
    section_title: sectionTitle,
  });
}

/**
 * Lead Generation & Contact Intent.
 */
export function trackContactIntent(
  method: "mailto" | "copy_email",
  location: "hero" | "header" | "contact_section" | "contact_card" | "footer"
): void {
  trackEvent("contact_intent", {
    contact_method: method,
    click_location: location,
  });
}

/**
 * Content Engagement (Capabilities, FAQ, Partners, Socials).
 */
export function trackCapabilityClick(
  capabilityNumber: string,
  capabilityTitle: string
): void {
  trackEvent("capability_click", {
    capability_number: capabilityNumber,
    capability_title: capabilityTitle,
  });
}

export function trackFaqToggle(question: string, isOpen: boolean): void {
  trackEvent("faq_toggle", {
    faq_question: question,
    faq_state: isOpen ? "open" : "closed",
  });
}

export function trackPartnerHover(partnerName: string): void {
  trackEvent("partner_hover", {
    partner_name: partnerName,
  });
}

export function trackSocialClick(platformName: string, url: string): void {
  trackEvent("social_click", {
    social_platform: platformName,
    destination_url: url,
  });
}
