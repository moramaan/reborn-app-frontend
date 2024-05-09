import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import MediaVideo from "@/components/MediaVideo";

export default function IndexPage() {
  const videoUrl =
    "https://www.youtube.com/embed/QHjhKPTG_vw?si=Zqf8Y-_dimkYME_z";
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "violet" })}>M9 UF2 Proyecto Final</h2>
          <h4 className={subtitle({ class: "mt-4" })}>
            Construido con la librería <span className="text-primary">Next UI</span>:
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentación
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5">
          <h4 className={title({ color: "yellow" })}>Aprende con Midudev!</h4>
          <div className="rounded mt-3">
              <MediaVideo url={videoUrl} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
