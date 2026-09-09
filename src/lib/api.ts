export interface ContactFormData {
  name: string;
  email: string;
  reason: string;
}

export interface SiteVisitData {
  date: string;
  time: string;
  name?: string;
  email?: string;
}

/**
 * Submits the contact form to the backend API.
 * TODO: Implement /api/contact route with email delivery or CRM integration.
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to submit contact form");
  return res.json();
}

/**
 * Submits a site visit booking request.
 * TODO: Implement /api/site-visit route with calendar integration.
 */
export async function submitSiteVisit(data: SiteVisitData): Promise<{ success: boolean; message: string }> {
  const res = await fetch("/api/site-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to schedule site visit");
  return res.json();
}

/**
 * Subscribes a visitor to the newsletter.
 * TODO: Implement /api/newsletter route with email service integration.
 */
export async function subscribeNewsletter(): Promise<{ success: boolean; message: string }> {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to subscribe to newsletter");
  return res.json();
}
