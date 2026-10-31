import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PipelineRail } from "@/components/PipelineRail";
import { PROFILE } from "@/data/portfolio";
import { SITE_URL } from "@/data/links";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PROFILE.name} | ${PROFILE.role}`,
  description: PROFILE.summary,
  keywords: [
    "Data Engineer",
    "PySpark",
    "Snowflake",
    "dbt",
    "AWS",
    "Apache Airflow",
    "Data Engineering Portfolio",
    PROFILE.name,
  ],
  authors: [{ name: PROFILE.name }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.summary,
    url: SITE_URL,
    siteName: `${PROFILE.name} — ${PROFILE.role}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to avoid a flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem("theme");
                  var isDark = stored === "dark";

                  if (isDark) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <PipelineRail />
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
