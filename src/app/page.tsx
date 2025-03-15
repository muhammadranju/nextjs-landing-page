import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import TeamSection from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <title>Home | Next.js Landing Page</title>
      <HeroSection />
      <Features />
      <TeamSection />
      <LogoCloud />
      <Testimonials />
      <CallToAction />
      <FooterSection />
    </>
  );
}
