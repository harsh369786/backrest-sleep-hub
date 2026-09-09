import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Backrest" },
      {
        name: "description",
        content:
          "Terms of Use for Backrest by Shree Sacha Foam Industries — a B2B platform for dealers, distributors and retailers in India.",
      },
      { property: "og:title", content: "Terms of Use — Backrest" },
      {
        property: "og:description",
        content: "Terms of Use for Backrest by Shree Sacha Foam Industries.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-gold">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Backrest Terms of Use
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: 9 September 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3">
            These Terms of Use ("Terms") govern your access to and use of
            Backrest services and website.
          </p>
          <p className="mt-3">
            By accessing or using Backrest, you agree to comply with these
            Terms. If you do not agree, please do not use our services.
          </p>
          <p className="mt-3">
            Backrest reserves the right to update these Terms from time to
            time. Updated Terms will be published on this website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Business Use
          </h2>
          <p className="mt-3">
            Backrest primarily provides products and services to dealers,
            distributors and other authorized business users.
          </p>
          <p className="mt-3">
            Users must provide accurate and complete information when creating
            an account, placing orders or using Backrest services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. Dealer Accounts
          </h2>
          <p className="mt-3">
            Users are responsible for maintaining the confidentiality of their
            account and login information.
          </p>
          <p className="mt-3">
            Backrest may approve, reject, suspend or deactivate an account
            where reasonably necessary for business, security, compliance or
            operational reasons.
          </p>
          <p className="mt-3">
            Users must not share their account with unauthorized persons or use
            another person's account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Orders and Approval
          </h2>
          <p className="mt-3">
            Orders placed through Backrest are subject to applicable product
            availability, pricing, terms and approval.
          </p>
          <p className="mt-3">
            Where applicable, the order workflow may involve:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5">
            <li>Dealer placing the order</li>
            <li>Submission to the designated distributor</li>
            <li>Distributor approval</li>
            <li>Backrest acceptance and processing</li>
            <li>Manufacturing, dispatch and delivery</li>
          </ol>
          <p className="mt-3">
            Manufacturing or order production may begin only after the required
            approvals and acceptance have been completed.
          </p>
          <p className="mt-3">
            Backrest may reject or cancel an order where necessary due to
            incorrect information, product availability, pricing errors,
            credit/payment issues, operational limitations or other legitimate
            reasons.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Customized Orders
          </h2>
          <p className="mt-3">
            Dealers may request customized mattress dimensions or
            specifications.
          </p>
          <p className="mt-3">
            The dealer is responsible for providing accurate dimensions and
            specifications.
          </p>
          <p className="mt-3">
            Customized dimensions are used for manufacturing purposes.
            Commercial order value may be calculated using the applicable
            standard mattress size and pricing structure, unless Backrest
            specifically confirms otherwise.
          </p>
          <p className="mt-3">
            Once manufacturing of a customized order has commenced,
            cancellation, modification or return may be restricted.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Pricing and Payments
          </h2>
          <p className="mt-3">
            Prices, discounts, taxes, transportation charges and other
            applicable charges will be communicated through the applicable
            quotation, order confirmation or commercial arrangement.
          </p>
          <p className="mt-3">
            The dealer is responsible for making payments according to the
            agreed payment or credit terms.
          </p>
          <p className="mt-3">
            Backrest may withhold processing, manufacturing or dispatch where
            required payments or approvals have not been completed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Cancellation, Return and Replacement
          </h2>
          <p className="mt-3">
            Cancellation, return and replacement are subject to Backrest's
            applicable Refund, Return, Cancellation &amp; Warranty Policy.
          </p>
          <p className="mt-3">
            Customized or manufactured-to-order products may not be eligible
            for cancellation or return once production has commenced, except
            where required by applicable law or specifically approved by
            Backrest.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            8. Warranty
          </h2>
          <p className="mt-3">
            Backrest products may carry a warranty of up to 12 years, depending
            on the applicable product.
          </p>
          <p className="mt-3">Unless otherwise specified:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Year 1: Free replacement for approved covered manufacturing
              defects.
            </li>
            <li>Years 2–12: Warranty may apply on a pro-rata basis.</li>
          </ul>
          <p className="mt-3">
            Warranty claims are subject to product-specific warranty conditions
            and exclusions.
          </p>
          <p className="mt-3">Warranty does not automatically mean a refund.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            9. Reward Points and Schemes
          </h2>
          <p className="mt-3">
            Backrest may provide reward points, incentives or other benefits to
            eligible dealers under applicable schemes.
          </p>
          <p className="mt-3">Reward points:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Are promotional benefits and not cash or monetary instruments.</li>
            <li>
              May be subject to product, order, scheme, campaign and
              eligibility conditions.
            </li>
            <li>
              Must be redeemed within the same financial year in which they are
              earned.
            </li>
            <li>
              May be reversed for cancelled, rejected, returned, refunded or
              otherwise adjusted orders.
            </li>
            <li>
              Cannot be transferred, sold or exchanged for cash unless
              expressly permitted by Backrest.
            </li>
          </ul>
          <p className="mt-3">
            Backrest may introduce, modify, replace, suspend or discontinue
            schemes and rewards, subject to applicable law.
          </p>
          <p className="mt-3">
            Reward availability may depend on the applicable scheme, inventory,
            dealer eligibility and company budget.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            10. Dealership
          </h2>
          <p className="mt-3">
            Backrest may approve dealers or stores at its discretion.
          </p>
          <p className="mt-3">
            Backrest reserves the right to suspend, restrict or discontinue the
            dealership of any store at any time, subject to applicable law and
            the terms of existing valid transactions.
          </p>
          <p className="mt-3">
            Discontinuation of a dealership does not automatically cancel
            existing payment obligations or applicable warranty obligations for
            products already supplied.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            11. Acceptable Use
          </h2>
          <p className="mt-3">Users must not:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Provide false or misleading information.</li>
            <li>Misuse another user's account.</li>
            <li>Attempt unauthorized access to Backrest systems.</li>
            <li>Interfere with or disrupt the website or services.</li>
            <li>Upload malicious software or harmful content.</li>
            <li>Use Backrest services for unlawful activities.</li>
            <li>
              Copy, reproduce or misuse Backrest's trademarks, content or
              materials without permission.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            12. Intellectual Property
          </h2>
          <p className="mt-3">
            The Backrest name, logo, trademarks, product information, images,
            designs, text and other materials available through Backrest are
            owned by or licensed to Backrest and are protected under applicable
            laws.
          </p>
          <p className="mt-3">
            No intellectual property rights are transferred to users merely by
            accessing or using Backrest services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            13. Third-Party Services
          </h2>
          <p className="mt-3">
            Backrest may use third-party services for payments, communications,
            WhatsApp, logistics, hosting, analytics and other business
            functions.
          </p>
          <p className="mt-3">
            Such services may be subject to their respective terms and
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            14. Limitation of Liability
          </h2>
          <p className="mt-3">
            Backrest will take reasonable steps to provide reliable services
            but does not guarantee that the website or services will always be
            uninterrupted, error-free or available.
          </p>
          <p className="mt-3">
            To the extent permitted by applicable law, Backrest will not be
            responsible for indirect or consequential losses arising from the
            use of its services.
          </p>
          <p className="mt-3">
            Nothing in these Terms limits any liability that cannot legally be
            excluded or limited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            15. Governing Law
          </h2>
          <p className="mt-3">
            These Terms are governed by the laws of India.
          </p>
          <p className="mt-3">
            Any dispute will be subject to the applicable jurisdiction of
            courts and authorities in India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            16. Contact Us
          </h2>
          <p className="mt-3">For questions regarding these Terms:</p>
          <div className="mt-3 rounded-xl border border-border bg-cream p-4 text-sm">
            <p className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </p>
            <p className="mt-1">Brand: Backrest</p>
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
            <p className="mt-2">
              54/1, Kone, Bhiwandi–Wada Rd,
              <br />
              Shirishpada, Maharashtra 421303, India
            </p>
            <p className="mt-1">Website: backrestmattress.in</p>
          </div>
        </section>
      </div>
    </article>
  );
}
