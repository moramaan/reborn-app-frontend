import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ContactForm from "@/components/contact-form";

export default function HelpFeedbackPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>Soporte</h2>
          <h4 className={subtitle({ class: "mt-4" })}>
            ¿Necesitas ayuda? ¡Estamos aquí para ayudarte!
          </h4>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <ContactForm/>
        </div>
      </section>
    </DefaultLayout>
  );
}
