import FilterCard from "@/components/filter-card";
import { subtitle, title } from "@/components/primitives";
import SearchLayout from "@/layouts/search-layout";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/types/index";

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

//function to find the higher price
function findMaxValue(products: Product[]) {
  let maxValue = 0;
  products.forEach((product: Product) => {
    if (product.price > maxValue) {
      maxValue = product.price;
    }
  });
  return maxValue;
}

export default function SearchPage() {
  const { products, setProducts } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [maxValue, setMaxValue] = useState<number>(1000);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // const response = await fetch("/api/products");
        // if (!response.ok) {
        //   throw new Error("Failed to fetch product data");
        // }
        // const jsonData = await response.json();
        setProducts(jsonData);
        setMaxValue(findMaxValue(jsonData));
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
          <div className="lg:col-span-3 h-full hidden lg:block">
            <FilterCard maxValue={maxValue} />
          </div>
          <div className="col-span-12 lg:col-span-9 h-full">
            <div className="flex justify-end mb-4 lg:hidden">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsFilterOpen(true)}
              >
                Show Filters
              </button>
            </div>
            {isFilterOpen && (
              <div className="z-50 fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center lg:hidden">
                <div className="relative">
                  <FilterCard maxValue={maxValue} />
                  <button
                    className="absolute top-5 right-5 z-10 bg-red-500 text-white px-4 py-2 rounded mb-4"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
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
