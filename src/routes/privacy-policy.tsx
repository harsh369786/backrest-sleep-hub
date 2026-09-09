import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Backrest" },
      {
        name: "description",
        content:
          "Privacy Policy for Backrest by Shree Sacha Foam Industries — how we collect, use, store and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy — Backrest" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Backrest by Shree Sacha Foam Industries.",
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
        Backrest Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: 9 September 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. About This Policy
          </h2>
          <p className="mt-3">
            Backrest, operated by{" "}
            <span className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </span>{" "}
            ("Backrest", "we", "us", or "our"), respects your privacy. This
            Privacy Policy explains how we collect, use, store and protect
            information when you interact with Backrest, including through our
            website, customer support and WhatsApp communications.
          </p>
          <p className="mt-3">
            By using our services, you acknowledge this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Information We Collect
          </h2>
          <p className="mt-3">We may collect information such as:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Name, mobile number, WhatsApp number and email address</li>
            <li>Dealer/store/business name and business address</li>
            <li>GST or other business information</li>
            <li>Account and login information</li>
            <li>Order, product, size, quantity and customized specifications</li>
            <li>Billing, payment, invoice and transaction information</li>
            <li>Delivery and logistics information</li>
            <li>Warranty, return, replacement and service information</li>
            <li>Reward points, schemes and redemption information</li>
            <li>Customer-support and communication records</li>
            <li>Basic device, browser, IP address and security information</li>
          </ul>
          <p className="mt-3">
            We collect information that is reasonably necessary to provide and
            manage our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. How We Use Information
          </h2>
          <p className="mt-3">We may use information to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Create and manage accounts</li>
            <li>Verify dealers and businesses</li>
            <li>Process and manage orders</li>
            <li>Coordinate with distributors and sales executives</li>
            <li>Manufacture, dispatch and deliver products</li>
            <li>Process payments and invoices</li>
            <li>Manage reward points, schemes and campaigns</li>
            <li>Provide support and after-sales service</li>
            <li>Process warranty, return and replacement requests</li>
            <li>Send important account, order and service notifications</li>
            <li>
              Send promotional communications where appropriate consent has been
              obtained
            </li>
            <li>Maintain security and prevent fraud or misuse</li>
            <li>Improve our services</li>
            <li>Comply with applicable laws and legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Customized Orders
          </h2>
          <p className="mt-3">
            For customized mattress orders, we may collect and use the
            dimensions and specifications provided by the dealer for
            manufacturing and fulfilment.
          </p>
          <p className="mt-3">
            Commercial pricing for customized orders may be calculated using
            the applicable standard mattress size and pricing structure, unless
            otherwise confirmed by Backrest.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. WhatsApp Communications &amp; Consent
          </h2>
          <p className="mt-3">
            Backrest may use WhatsApp for account verification, order updates,
            distributor approvals, manufacturing updates, dispatch and delivery
            notifications, warranty/service communication, dealer support and
            reward-related information.
          </p>
          <p className="mt-3">
            For promotional or other non-essential WhatsApp communications,
            Backrest will use appropriate consent/opt-in mechanisms and will
            clearly identify Backrest as the business sending the
            communication.
          </p>
          <p className="mt-3">
            Users may withdraw promotional WhatsApp consent or request that
            such communications be stopped. Backrest will respect valid
            opt-out, block or stop requests.
          </p>
          <p className="mt-3">
            WhatsApp services are provided by Meta and are subject to
            WhatsApp/Meta's applicable terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Sharing of Information
          </h2>
          <p className="mt-3">
            We may share relevant information with trusted service providers
            and business partners, including distributors, sales executives,
            manufacturers, logistics providers, payment providers,
            technology/hosting providers and customer-support providers, where
            necessary to provide our services.
          </p>
          <p className="mt-3">
            We may also disclose information where required by law, regulation,
            court order or a lawful government request.
          </p>
          <p className="mt-3">
            Backrest does not sell personal information as a commercial
            product.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Data Security
          </h2>
          <p className="mt-3">
            We take reasonable technical and organizational measures to protect
            personal information from unauthorized access, misuse, alteration,
            loss or disclosure.
          </p>
          <p className="mt-3">
            No electronic system or internet transmission can be guaranteed to
            be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            8. Data Retention
          </h2>
          <p className="mt-3">
            We retain information only for as long as reasonably necessary for
            business operations, orders, payments, warranties, rewards,
            customer support, dispute resolution, security and legal or
            regulatory requirements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            9. Your Privacy Rights
          </h2>
          <p className="mt-3">
            Subject to applicable law, you may contact us to request
            correction or deletion of your information, withdraw applicable
            consent, or raise a privacy-related concern.
          </p>
          <div className="mt-3 rounded-xl border border-border bg-cream p-4 text-sm">
            <p className="font-medium text-foreground">Privacy Contact:</p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:backrest@sachafoam.com"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                backrest@sachafoam.com
              </a>
            </p>
            <p className="mt-1">Phone: +91 84519 45853</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            10. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any updated
            version will be published on this website with a revised "Last
            Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            11. Contact Us
          </h2>
          <div className="mt-3 rounded-xl border border-border bg-cream p-4 text-sm">
            <p className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </p>
            <p className="mt-1">Brand: Backrest</p>
            <p className="mt-2">
              54/1, Kone, Bhiwandi–Wada Rd,
              <br />
              Shirishpada, Maharashtra 421303, India
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:backrest@sachafoam.com"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                backrest@sachafoam.com
              </a>
            </p>
            <p className="mt-1">Phone: +91 84519 45853</p>
            <p className="mt-1">Website: backrestmattress.in</p>
          </div>
        </section>
      </div>
    </article>
  );
}
