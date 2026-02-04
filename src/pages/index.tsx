import Header from "@/components/Header";
import CoreSkills from "@/components/CoreSkills";
import ContactCard from "@/components/ContactCard";
import FeaturedProjects from "@/components/FeaturedProjects";
import {Stats} from "@/components/Stats";
import { BubbleBackground } from "@/components/Bubble";

export default function Home() {
  return (
    <BubbleBackground interactive={false}>
      <main className="min-h-full w-full">
        {/* bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">
          <Header />
          <CoreSkills />
          <ContactCard />
          <FeaturedProjects />
          <Stats />
        </div>
      </main>
    </BubbleBackground>
  );
}

