import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions Page for Guransh Academy",
  description: "Admissions Page for Guransh Academy",
};

export default function AdmissionLayout({
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
