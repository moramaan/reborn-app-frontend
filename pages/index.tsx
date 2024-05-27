import { title } from "@/components/primitives";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import IndexLayout from "@/layouts/index";
const { v4: uuidv4 } = require("uuid");
import { useUser } from '@auth0/nextjs-auth0/client';

// dynamic import with SSR disabled due to hydration error
const ProductCard = dynamic(() => import("@/components/product-card"), {
  ssr: false,
});

const jsonData = [
  {
    id: uuidv4(),
    userId: 1,
    title: "Curso de Next.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    price: 500,
    location: "Barcelona, Cataluña",
    state: "available",
    condition: 1,
    publishDate: new Date(),
    images: [
      "https://nextui.org/images/card-example-4.jpeg",
      "https://nextui.org/images/album-cover.png",
      "https://nextui.org/images/card-example-3.jpeg",
      "https://nextui.org/images/card-example-2.jpeg",
    ],
  },
  {
    id: uuidv4(),
    userId: 1,
    title: "Curso de Next.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    price: 500,
    location: "Barcelona, Cataluña",
    state: "available",
    condition: 1,
    publishDate: new Date(),
    images: [
      "https://nextui.org/images/card-example-3.jpeg",
      "https://nextui.org/images/album-cover.png",
      "https://nextui.org/images/card-example-4.jpeg",
      "https://nextui.org/images/card-example-2.jpeg",
    ],
  },
  {
    id: uuidv4(),
    userId: 1,
    title: "Curso de Next.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    price: 500,
    location: "Barcelona, Cataluña",
    state: "available",
    condition: 1,
    publishDate: new Date(),
    images: [
      "https://nextui.org/images/card-example-2.jpeg",
      "https://nextui.org/images/album-cover.png",
      "https://nextui.org/images/card-example-4.jpeg",
      "https://nextui.org/images/card-example-3.jpeg",
    ],
  },
  {
    id: uuidv4(),
    userId: 1,
    title: "Curso de Next.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut quaeritis, si longius, si prensius. Quae cum dixisset paulumque institisset, Quid est? Quod quidem nobis non saepe contingit. Duo Reges: constructio interrete. Quae cum essent dicta, finem fecimus et ambulandi et disputandi.",
    price: 500,
    location: "Barcelona, Cataluña",
    state: "available",
    condition: 1,
    publishDate: new Date(),
    images: [
      "https://nextui.org/images/album-cover.png",
      "https://nextui.org/images/card-example-4.jpeg",
      "https://nextui.org/images/card-example-3.jpeg",
      "https://nextui.org/images/card-example-2.jpeg",
    ],
  },
];

export default function IndexPage() {
  const { user, error, isLoading } = useUser(); //auth0
  const { products, setProducts } = useProductContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      //tested, works well
      // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      // try {
      //   const response = await fetch(`${apiUrl}/users/27`);
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch user data");
      //   }
      //   userFetched = await response.json();
      //   console.log(JSON.stringify(userFetched));
      // } catch (error: any) {
      //   seterrors(error as Error);
      // }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // const response = await fetch("/api/products");
        // if (!response.ok) {
        //   throw new error("Failed to fetch product data");
        // }
        // const jsonData = await response.json();
        setProducts(jsonData);
        setLoading(false);
      } catch (error: any) {
        setErrors(error as Error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [setProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>Error: {errors.message}</div>;
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
            Los más vistos
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
