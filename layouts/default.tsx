import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

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
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://github.com/moramaan"
					title="Moramaan GitHub Profile"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">David Mora Hidalgo</p>
				</Link>
			</footer>
		</div>
	);
}
