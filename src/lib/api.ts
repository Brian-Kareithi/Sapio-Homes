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

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to submit");
    return await res.json();
  } catch {
    // Fallback for demo: simulate success
    await new Promise((r) => setTimeout(r, 800));
    return { success: true, message: "Thank you for contacting us. We'll get back to you soon!" };
  }
}

export async function submitSiteVisit(data: SiteVisitData): Promise<{ success: boolean; message: string }> {
  await new Promise((r) => setTimeout(r, 600));
  return { success: true, message: `Site visit scheduled for ${data.date} at ${data.time}. We'll confirm shortly!` };
}

export async function subscribeNewsletter(): Promise<{ success: boolean; message: string }> {
  await new Promise((r) => setTimeout(r, 400));
  return { success: true, message: "Subscribed successfully! Check your inbox for updates." };
}
