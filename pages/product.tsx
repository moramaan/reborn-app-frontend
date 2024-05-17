import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Carousel from "@/components/carousel";
import ProductInfo from "@/components/product-info";

export default function ProductPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>PRODUCTO XX</h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Carousel />
          <div className="max-w-2xl w-full">
            <ProductInfo />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}