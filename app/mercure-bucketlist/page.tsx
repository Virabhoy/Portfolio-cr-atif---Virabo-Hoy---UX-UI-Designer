"use client";

import MercureHeader from "@/components/mercure/MercureHeader";
import MercureHero from "@/components/mercure/MercureHero";
import MercureMap from "@/components/mercure/MercureMap";
import MercureGrid from "@/components/mercure/MercureGrid";
import MercureTestimonials from "@/components/mercure/MercureTestimonials";
import MercureMarquee from "@/components/mercure/MercureMarquee";
import MercureFooter from "@/components/mercure/MercureFooter";
import MercureBackButton from "@/components/mercure/MercureBackButton";

export default function MercureBucketListPage() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <MercureHeader />
      <MercureHero />
      <MercureMarquee />
      <MercureMap />
      <MercureGrid />
      <MercureTestimonials />
      <MercureMarquee />
      <MercureFooter />
      <MercureBackButton />
    </div>
  );
}
