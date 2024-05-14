import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import dynamic from "next/dynamic";
const ProductCard = dynamic(() => import("@/components/product-card"), {
  ssr: false,
});

const jsonData = [
  {
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: "500€",
  },
  {
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: "500€",
  },
  {
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: "500€",
  },
  {
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: "500€",
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-8">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "green" })}>DAW Proyecto Final</h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-2">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={`w-full text-start ${title({ color: "yellow" })}`}>Recomendados</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {jsonData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-2">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={`w-full text-start ${title({ color: "yellow" })}`}>
            Novedades
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {jsonData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-2">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={`w-full text-start ${title({ color: "yellow" })}`}>
            Con más me gusta
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {jsonData.map((data, index) => (
              <ProductCard key={index} {...data} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
