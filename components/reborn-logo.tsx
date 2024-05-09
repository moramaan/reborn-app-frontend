import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MyImageProps {
  Width: number;
  Height: number;
}

const RebornLogo: React.FC<MyImageProps> = ({ Width, Height }) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | null | undefined>(null);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <>
      {currentTheme === "dark" ? (
        <Image
          src="/reborn-logo-darkmode.png"
          alt="Reborn Dark Logo"
          width={Width}
          height={Height}
        />
      ) : (
        <Image
          src="/reborn-logo-lightmode.png"
          alt="Reborn Light Logo"
          width={Width}
          height={Height}
        />
      )}
    </>
  );
};

export default RebornLogo;
