import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import IndexLayout from "@/layouts/index";

// dynamic import with SSR disabled due to hydration error
const ProductCard = dynamic(() => import("@/components/product-card"), {
  ssr: false,
});

const jsonData = [
  {
    id: "1",
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: 500,
    location: "Madrid",
    published: "2 días",
    state: "Nuevo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    images: [],
  },
  {
    id: "2",
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: 500,
    location: "Madrid",
    published: "2 días",
    state: "Nuevo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    images: [],
  },
  {
    id: "3",
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: 500,
    location: "Madrid",
    published: "2 días",
    state: "Nuevo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    images: [],
  },
  {
    id: "4",
    title: "Curso de Next.js",
    img: "https://nextui.org/images/album-cover.png",
    price: 500,
    location: "Madrid",
    published: "2 días",
    state: "Nuevo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    images: [],
  },
];

export default function IndexPage() {
  const { products, setProducts } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // const response = await fetch("/api/products");
        // if (!response.ok) {
        //   throw new Error("Failed to fetch product data");
        // }
        // const jsonData = await response.json();
        setProducts(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [setProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <IndexLayout>
      <section className="flex flex-col items-center justify-center py-2">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={`w-full text-start ${title({ color: "yellow" })}`}>
            Recomendados
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.map((data) => (
              <ProductCard key={data.id} {...data} />
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
            {jsonData.map((data) => (
              <ProductCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-2 mb-8">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={`w-full text-start ${title({ color: "yellow" })}`}>
            Con más me gusta
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {jsonData.map((data) => (
              <ProductCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </IndexLayout>
  );
}
