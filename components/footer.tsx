import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full flex justify-center md:px-3 md:pe-6 mt-7 h-fit lg:max-h-[200px] flex-grow"
      style={{ backgroundImage: "url(/footer2k.png)" }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-fit md:w-full h-fit mb-3 md:mb-0">
        <div className="md:w-fit flex flex-col text-white md:mb-6">
          <Image
            shadow="none"
            radius="none"
            width="100"
            alt="Reborn index hero image"
            src="/smallLogoWhite.png"
          />
          <div className="ps-4">
            <p>Aviso Legal</p>
            <p>Política de privacidad</p>
            <p>Soporte</p>
          </div>
        </div>
        <div className="h-full flex items-end md:mb-6 ms-4 md:ms-0 md:self-end">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://github.com/moramaan"
            title="Moramaan GitHub Profile"
          >
            <span className="text-white">Powered by</span>
            <p className="text-white">David Mora Hidalgo</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
