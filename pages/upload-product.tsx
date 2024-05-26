import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import UploadProductForm from "@/components/upload-product-form";

export default function UploadProductPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>Publicar Producto</h2>
          <h4 className={subtitle({ class: "mt-4" })}>
            Ready to sell? Sube tu producto!
          </h4>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm">
          <UploadProductForm />
        </div>
      </section>
    </DefaultLayout>
  );
}
