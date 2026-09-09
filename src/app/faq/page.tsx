import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about buying, financing, and owning a Sapio Homes apartment in Nairobi — payment plans, titles, off-plan purchases and property management.",
};

const groups = [
  {
    title: "Buying & Payment",
    items: [
      {
        q: "How do I reserve a unit?",
        a: "A unit is reserved with a booking fee (from KES 100,000 on Park Road Residency), followed by a deposit — typically 30% of the unit price. The balance is spread over flexible installments of 24–36 months depending on the project.",
      },
      {
        q: "Do you charge interest on installments?",
        a: "No. Our payment plans are structured at 0% interest for the agreed installment period. The price you're quoted at reservation is the price you pay.",
      },
      {
        q: "Can diaspora clients buy remotely?",
        a: "Yes. We handle virtual viewings, share full documentation digitally, and coordinate with your appointed lawyer or representative in Kenya so you can complete a purchase without travelling.",
      },
    ],
  },
  {
    title: "Ownership & Legal",
    items: [
      {
        q: "What kind of title do I get?",
        a: "Apartments are sold on sectional (strata) title, giving you a registrable, financeable ownership document for your specific unit plus a share of the common areas.",
      },
      {
        q: "Who handles the conveyancing?",
        a: "We connect you with vetted conveyancing lawyers who carry out due diligence, prepare the sale agreement, and manage the title transfer. You're free to use your own advocate.",
      },
    ],
  },
  {
    title: "Off-Plan & Construction",
    items: [
      {
        q: "Is it safe to buy off-plan?",
        a: "Off-plan buyers get the lowest entry price and the longest payment runway. Funds are tied to construction milestones, and we publish regular progress updates and site-visit days so you can track the build.",
      },
      {
        q: "What happens if completion is delayed?",
        a: "Projected completion dates are stated in your sale agreement along with the remedies that apply if timelines move. Our delivered portfolio — including Hillside Gardens — is our track record.",
      },
    ],
  },
  {
    title: "After You Buy",
    items: [
      {
        q: "Can Sapio Homes manage my unit as a rental?",
        a: "Yes. Our property management team handles tenant sourcing and screening, rent collection, maintenance, and monthly reporting. Expected yields on current projects are 10–12% per year.",
      },
      {
        q: "What are the service charges?",
        a: "Service charge covers security, water, common-area maintenance, lifts and backup power. The estimated monthly figure for each project is shared before you sign.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber-500"
        >
          &larr; Back to Home
        </Link>

        <SectionHeading
          align="left"
          eyebrow="Support"
          title="Frequently asked questions"
          description="Everything you need to know before reserving a home with Sapio Homes."
          className="mt-8"
        />

        <div className="mt-14 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-serif text-2xl font-light text-primary">{group.title}</h2>
              <div className="mt-4 divide-y divide-app-border border-y border-app-border">
                {group.items.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-primary">
                      {item.q}
                      <span className="text-amber-500 transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-secondary">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-app-border bg-app-secondary p-8">
          <h3 className="font-serif text-xl font-light text-primary">Still have a question?</h3>
          <p className="mt-2 text-secondary">
            Email{" "}
            <a href="mailto:info@sapiohome.com" className="text-amber-500 hover:underline">
              info@sapiohome.com
            </a>{" "}
            or call +254 113 556 551 — our team responds within one business day.
          </p>
        </div>
      </div>
    </div>
  );
}
