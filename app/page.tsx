
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from '@/components/Footer'
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="text-4xl bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto w-full ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid/>
        <Education/>
        <Experience/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
