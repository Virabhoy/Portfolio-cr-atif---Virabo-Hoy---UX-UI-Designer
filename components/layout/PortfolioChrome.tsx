"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PortfolioChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStandalone =
    pathname.startsWith("/mercure-bucketlist") ||
    pathname.startsWith("/oxynum-charte") ||
    pathname.startsWith("/driiink") ||
    pathname.startsWith("/rosa-deorum") ||
    pathname.startsWith("/cocoon");

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
