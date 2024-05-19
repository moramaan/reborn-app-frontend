import FilterCard from "@/components/filter-card";
import { subtitle, title } from "@/components/primitives";
import SearchLayout from "@/layouts/search-layout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";

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
  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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

export default function HelpFeedbackPage() {
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
    <SearchLayout>
      <section className="flex flex-col items-center justify-center gap-4 pt-8 md:pt-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>Búsqueda de Productos</h2>
          <h4 className={subtitle({ class: "mt-4" })}>
            ¡Encuentra lo que necesitas!
          </h4>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="grid grid-cols-12 gap-5 max-w-[1400px] w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <div className="col-span-3 h-full">
            <FilterCard />
          </div>
          <div className="col-span-9 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SearchLayout>
  );
}
