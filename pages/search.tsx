import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FilterCard from "@/components/filter-card";

export default function HelpFeedbackPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>Búsqueda de productos</h2>
          <h4 className={subtitle({ class: "mt-4" })}>
            ¡Encuentra lo que necesitas!
          </h4>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <FilterCard />
        </div>
      </section>
    </DefaultLayout>
  );
}
