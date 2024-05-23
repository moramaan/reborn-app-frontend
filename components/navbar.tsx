import {
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

import RebornLogo from "@/components/reborn-logo";
import { SearchButton } from "@/components/search-button";
import UserProfileModal from "@/components/user-profile-modal";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      endContent={
        <SearchButton
          className="rounded-l-none"
          variant="shadow"
          color="green"
          size="md"
          style={{ width: "2rem" }}
        >
          <SearchIcon className="text-base pointer-events-none flex-shrink-0" />
        </SearchButton>
      }
      type="search"
    />
  );

  // test user data - remove when auth is implemented
  const user = {
    email: "user@example.com",
    name: "John Doe",
    lastName: "Smith",
    phone: "123-456-7890",
    showPhone: false,
  };

  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <RebornLogo Width={150} Height={200}></RebornLogo>
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="hidden lg:flex basis-4/6">
          {searchInput}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-6 lg:flex basis-1/5 md:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <div className="hidden lg:flex gap-6 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
        {/* TODO: add conditional render for login or show avatar */}
        <NavbarItem className="hidden md:flex">
          <Link href="#">Iniciar Sesión</Link>
        </NavbarItem>
        <NavbarItem>
          <UserProfileModal user={user}/>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="little-menu">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({
                    color:
                      index === 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground",
                  }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
