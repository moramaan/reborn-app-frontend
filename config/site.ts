export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Reborn App",
  description: "David Mora Beautiful M9 UF2 Final Project.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Categorías",
      href: "/",
    },
    {
      label: "Search-test",
      href: "/search",
    },
    {
      label: "Soporte",
      href: "/help-feedback",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Perfil",
      href: "/",
    },
    {
      label: "Panel de control",
      href: "/",
    },
    {
      label: "Search-test",
      href: "/search",
    },
    {
      label: "Soporte",
      href: "/help-feedback",
    },
    {
      label: "Cerrar sessión",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    docs: "https://nextui-docs-v2.vercel.app",
  },
};
