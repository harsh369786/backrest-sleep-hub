```tsx
import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Ruler,
  BadgeCheck,
  Factory,
  Mail,
  ArrowRight,
} from "lucide-react";
import logoAsset from "@/assets/backrest-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Backrest — India's Trusted Mattress Brand" },
      {
        name: "description",
        content:
          "Backrest by Shree Sacha Foam Industries: premium foam mattresses crafted for comfort, with a 12-year limited warranty, trusted by dealers across India.",
      },
      {
        property: "og:title",
        content: "Backrest — India's Trusted Mattress Brand",
      },
      {
        property: "og:description",
        content:
          "Premium quality mattresses crafted for comfort — trusted by dealers across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-x-0 top-0 h-px gold-rule" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-gold/40 bg-background px-3 py-1 text-xs font-medium tracking-wide text-foreground/80">
                By Shree Sacha Foam Industries
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                India's Trusted Mattress Brand
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Premium quality mattresses crafted for comfort — trusted by
                dealers across India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:backrest@sachafoam.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-foreground/70"
                >
                  View Products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Sleep Better. Live Better.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-3xl"
                  aria-hidden
                />

                <img
                  src={logoAsset}
                  alt="Backrest premium mattresses"
                  width={480}
                  height={305}
                  className="w-full max-w-md rounded-2xl border border-border bg-background shadow-sm"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                About Backrest
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Crafted in Bhiwandi, trusted across India
              </h2>
            </div>

            <div className="text-lg leading-relaxed text-muted-foreground">
              <p>
                Backrest is a brand by{" "}
                <span className="font-medium text-foreground">
                  Shree Sacha Foam Industries
                </span>
                , a manufacturer of high-quality foam mattresses based in
                Bhiwandi, Maharashtra. We supply dealers, distributors and
                retailers across India with a range of mattresses backed by a{" "}
                <span className="font-medium text-foreground">
                  12-Year Limited Warranty
                </span>
                .
              </p>

              <p className="mt-4">
                Our focus is simple: durable, comfortable mattresses built from
                quality foam — and dependable supply for the partners who sell
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Our Offerings
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What we make and how we supply
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Premium Foam Mattresses",
                desc: "High-quality foam mattresses engineered for lasting comfort and support.",
              },
              {
                title: "Customized Mattress Solutions",
                desc: "Tailored dimensions and firmness to fit specific customer and contract needs.",
              },
              {
                title: "B2B Dealer Network",
                desc: "Reliable supply for dealers, distributors and retailers across India.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="text-lg font-bold">B</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for comfort, backed for years
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "12-Year Limited Warranty",
                desc: "Every mattress is backed by a limited warranty for long-term peace of mind.",
              },
              {
                icon: Ruler,
                title: "Customizable Dimensions",
                desc: "Made-to-order sizes to fit any bed, contract or requirement.",
              },
              {
                icon: BadgeCheck,
                title: "Trusted by Dealers Across India",
                desc: "A dependable supply partner for dealers, distributors and retailers.",
              },
              {
                icon: Factory,
                title: "Quality Foam Manufacturing",
                desc: "Manufactured in-house at our Bhiwandi facility with strict quality control.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <item.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get in touch with Backrest
              </h2>

              <p className="mt-4 max-w-lg text-muted-foreground">
                For dealer enquiries, orders or product information, reach us
                directly by phone or email.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Business Name
                  </dt>

                  <dd className="mt-1 font-medium text-foreground">
                    Shree Sacha Foam Industries
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Brand
                  </dt>

                  <dd className="mt-1 font-medium text-foreground">
                    Backrest
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Address
                  </dt>

                  <dd className="mt-1 font-medium text-foreground">
                    54/1, Kone, Bhiwandi–Wada Rd, Shirishpada, Maharashtra
                    421303, India
                  </dd>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </dt>

                    <dd className="mt-1">
                      <a
                        href="mailto:backrest@sachafoam.com"
                        className="font-medium text-foreground transition-colors hover:text-gold"
                      >
                        backrest@sachafoam.com
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </dt>

                    <dd className="mt-1 font-medium text-foreground">
                      +91 84519 45853
                    </dd>
                  </div>
                </div>
              </dl>

              <a
                href="mailto:backrest@sachafoam.com"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```
