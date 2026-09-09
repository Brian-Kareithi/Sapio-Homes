import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Sapio Homes website and the information published on it.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 2026"
      intro="These terms govern your use of the Sapio Homes website. By browsing this site you accept them. They do not form part of any sale agreement, which is a separate signed contract."
      sections={[
        {
          heading: "Use of the website",
          body: [
            "You may use this site for personal, non-commercial purposes and to learn about our projects and services.",
            "You agree not to misuse the site, attempt to gain unauthorised access, or reproduce its content without written permission.",
          ],
        },
        {
          heading: "Property information",
          body: [
            "Prices, unit sizes, floor plans, availability, amenities, and completion dates are indicative and may change without notice.",
            "Images and renders are for illustration. Nothing on this website is an offer, a reservation, or a guarantee of a specific unit.",
            "Any purchase is governed solely by the written reservation form and sale agreement you sign, and by the disclosures made in those documents.",
          ],
        },
        {
          heading: "Payment plans and returns",
          body: [
            "Payment schedules, deposits, and installment terms shown online are examples of typical structures and are confirmed in your sale agreement.",
            "Projected rental yields and capital growth are estimates based on current market conditions and are not a promise of future performance.",
          ],
        },
        {
          heading: "Third-party links",
          body: [
            "The site may link to third-party services such as maps and video. We are not responsible for the content or privacy practices of those services.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, Sapio Homes is not liable for any loss arising from reliance on information published on this website.",
            "These terms are governed by the laws of Kenya.",
          ],
        },
      ]}
    />
  );
}
