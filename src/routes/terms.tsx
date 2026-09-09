import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Backrest" },
      {
        name: "description",
        content:
          "Terms & Conditions for Backrest by Shree Sacha Foam Industries. A B2B platform governed by the laws of India.",
      },
      { property: "og:title", content: "Terms & Conditions — Backrest" },
      {
        property: "og:description",
        content:
          "Terms & Conditions for Backrest by Shree Sacha Foam Industries.",
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
        Terms & Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: January 2026
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. About This Platform
          </h2>
          <p className="mt-3">
            The Backrest website (backrestmattress.in) is operated by{" "}
            <span className="font-medium text-foreground">
              Shree Sacha Foam Industries
            </span>{" "}
            as a business-to-business (B2B) platform connecting the Company
            with dealers, distributors and retailers of mattresses and related
            foam products in India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. Use of the Website
          </h2>
          <p className="mt-3">
            By accessing this website, you agree to use it for lawful business
            purposes only. Content, product descriptions and specifications are
            provided for general information and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. Orders & Supply
          </h2>
          <p className="mt-3">
            All orders, pricing, dealership arrangements and supply terms are
            subject to separate written agreement between the parties. The
            information on this website does not constitute a binding offer.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Warranty
          </h2>
          <p className="mt-3">
            Backrest mattresses are backed by a 12-Year Limited Warranty. The
            scope, conditions and limitations of the warranty are governed by
            the warranty document provided with the product at the time of
            supply.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Governing Law & Jurisdiction
          </h2>
          <p className="mt-3">
            These Terms and any dispute arising out of or in connection with
            this website or the Company's business shall be governed by and
            construed in accordance with the laws of India. The courts of
            Maharashtra shall have exclusive jurisdiction over any such
            disputes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">6. Contact</h2>
          <p className="mt-3">
            For questions regarding these Terms, contact us at:
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
