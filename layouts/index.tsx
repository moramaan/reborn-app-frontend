import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { Image } from "@nextui-org/react";
import Footer from "@/components/footer";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <div className="hidden md:flex">
        <Image
          shadow="none"
          radius="none"
          width="100%"
          alt="Reborn index hero image"
          src="/index-hero.png"
        />
      </div>
      <main className="container max-w-7xl px-6 flex-grow self-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
