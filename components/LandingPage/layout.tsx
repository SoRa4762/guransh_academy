import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page of Guransh Academy",
  description: "Everything you need to know about our montessori",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
