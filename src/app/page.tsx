import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Reasons } from "@/components/Reasons";
import { Bow } from "@/components/ui/Bow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Reasons />
      <Gallery />
      
      <footer className="py-12 bg-accent-black text-white text-center">
        <div className="flex justify-center mb-4">
          <Bow className="w-16 h-10" />
        </div>
        <p className="text-xl font-medium">Navždy tvoj ❤️</p>
        <p className="text-sm text-gray-400 mt-2">Vytvorené s láskou pre Emku</p>
      </footer>
    </main>
  );
}
