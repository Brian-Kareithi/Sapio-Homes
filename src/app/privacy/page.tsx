import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sapio Homes collects, uses, and protects the personal data of website visitors, buyers, and tenants.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      intro="This policy explains what personal information Sapio Homes collects when you use our website or engage our services, why we collect it, and the choices you have. It is written to align with Kenya's Data Protection Act, 2019."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "Contact details you provide through enquiry forms, site-visit bookings, and newsletter sign-ups — typically your name, email address, and phone number.",
            "Transaction information when you reserve or purchase a unit, including identification documents required for conveyancing and statutory compliance.",
            "Technical data such as your IP address, browser type, and pages visited, collected automatically to keep the site secure and improve it.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "To respond to your enquiries, arrange viewings, and progress a purchase or tenancy.",
            "To send you project updates, payment plans, and offers where you have asked to receive them. You can opt out at any time.",
            "To meet legal, tax, and anti-money-laundering obligations.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "We share data only with parties who help us deliver our services — conveyancing lawyers, financing partners, and IT providers — under confidentiality obligations.",
            "We do not sell your personal data. We may disclose information where required by law or a valid regulatory request.",
          ],
        },
        {
          heading: "Data retention and security",
          body: [
            "We keep personal data only for as long as needed for the purpose it was collected or as required by law, then securely delete or anonymise it.",
            "We apply appropriate technical and organisational measures to protect your information against loss, misuse, and unauthorised access.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You may request access to the personal data we hold about you, ask us to correct or delete it, or object to certain processing.",
            "To exercise any of these rights, contact us using the details below. We will respond within the timelines set by law.",
          ],
        },
      ]}
    />
  );
}
