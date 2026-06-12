import { Hero } from "@/components/Hero";
import { PremiumGallery } from "@/components/PremiumGallery";
import { Reasons } from "@/components/Reasons";
import { Bow } from "@/components/ui/Bow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F7]">
      <Hero />
      <Reasons />
      <PremiumGallery />
      
      <footer className="py-16 bg-accent-black text-white text-center rounded-t-kawaii">
        <div className="flex justify-center mb-6">
          <Bow className="w-20 h-12" />
        </div>
        <p className="text-2xl font-bold">Navždy tvoj ❤️</p>
        <p className="text-md text-gray-400 mt-2">Vytvorené s láskou pre Emku</p>
      </footer>
    </main>
  );
}
