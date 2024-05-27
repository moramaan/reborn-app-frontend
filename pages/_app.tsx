// import type { AppProps } from "next/app";
// import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { fontSans, fontMono } from "@/config/fonts";
// import { useRouter } from "next/router";
// import { ProductProvider } from "@/context/ProductContext";
// import "@/styles/globals.css";

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   return (
//     <NextUIProvider navigate={router.push}>
//       <NextThemesProvider defaultTheme="system">
//         <ProductProvider>
//           <Component {...pageProps} />
//         </ProductProvider>
//       </NextThemesProvider>
//     </NextUIProvider>
//   );
// }

// export const fonts = {
//   sans: fontSans.style.fontFamily,
//   mono: fontMono.style.fontFamily,
// };

//v2
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { fontSans, fontMono } from "@/config/fonts";
import { useRouter } from "next/router";
import { ProductProvider } from "@/context/ProductContext";
import { FilterProvider } from "@/context/FilterContext";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider defaultTheme="system">
        <UserProvider>
          <ProductProvider>
            <FilterProvider>
              <Component {...pageProps} />
            </FilterProvider>
          </ProductProvider>
        </UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
