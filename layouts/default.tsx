import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import Footer from "@/components/footer";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container w-full max-w-7xl px-6 flex-grow self-center">
				{children}
			</main>
			<Footer />
		</div>
	);
}
