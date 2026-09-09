import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Backrest" },
      {
        name: "description",
        content:
          "Privacy policy for Backrest by Shree Sacha Foam Industries. What data we collect, how we use it, and your rights.",
      },
      { property: "og:title", content: "Privacy Policy — Backrest" },
      {
        property: "og:description",
        content:
          "Privacy policy for Backrest by Shree Sacha Foam Industries.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-gold">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: January 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">1. Overview</h2>
          <p className="mt-3">
            This Privacy Policy describes how{" "}
            <span className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </span>{" "}
            (the "Company"), operating the Backrest brand and the website
            backrestmattress.in, collects, uses and protects information you
            share with us. By contacting us or using our website, you agree to
            the practices described here.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Information We Collect
          </h2>
          <p className="mt-3">
            We may collect the following personal information when you contact
            us through our website, WhatsApp, email or forms:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>
              Message content or business enquiry details you choose to share
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. How We Use Your Information
          </h2>
          <p className="mt-3">
            The information we collect is used solely for business
            communication, including:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Responding to your enquiries and requests</li>
            <li>Sharing product, dealership or order information</li>
            <li>Fulfilling orders and providing customer support</li>
          </ul>
          <p className="mt-3">
            We do not use your personal data for advertising tracking or
            profiling.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Data Sharing
          </h2>
          <p className="mt-3">
            We do not sell, rent or trade your personal data to any third
            party. Your information is only shared where necessary to respond to
            your enquiry or where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Data Retention
          </h2>
          <p className="mt-3">
            We retain your information only for as long as needed to fulfill the
            purpose for which it was collected, or as required by applicable
            law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Your Rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your
            personal data held by us at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Contact Us
          </h2>
          <p className="mt-3">
            For any privacy-related questions or data requests, contact us at:
          </p>
          <div className="mt-3 rounded-xl border border-border bg-cream p-4 text-sm">
            <p className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:backrest@sachafoam.com"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                backrest@sachafoam.com
              </a>
            </p>
            <p className="mt-1">backrestmattress.in</p>
          </div>
        </section>
      </div>
    </article>
  );
}
