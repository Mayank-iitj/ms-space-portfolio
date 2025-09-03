import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Security from '@/components/sections/security';
import Projects from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic21hbGwtZG90cyIgcGF0dGVybkNvbnRlbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9jaXJjbGU+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NtYWxsLWRvdHMpIj48L3JlY3Q+PC9zdmc+')] bg-repeat overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Security />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}