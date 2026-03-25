import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-24 md:gap-32 bg-white pb-48 md:pb-64 pt-20 md:pt-28">
        <Hero />
        <Stats />
        <Services />
        <TechStack />
        <CaseStudies />
        <Process />
        <Industries />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
