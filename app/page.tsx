import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DictationDemo from "@/components/DictationDemo";
import ActionDemo from "@/components/ActionDemo";
import AppContextDemo from "@/components/AppContextDemo";
import MacVoiceDemo from "@/components/MacVoiceDemo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fdfcf9] text-[#111111]">
      <Navbar />
      <Hero />
      <DictationDemo />
      <ActionDemo />
      <AppContextDemo />
      <MacVoiceDemo />
      <Footer />
    </main>
  );
}
