import {
  Link as NextUILink,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
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
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { User } from "@/types/index";
import { transformUser } from "@/utils/data-model-transforms";
import { useFilterContext } from "@/context/FilterContext";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { filters, setFilters } = useFilterContext();
  const [inputText, setInputText] = useState("");
  const { user } = useUser();
  const [userProfileData, setUserProfileData] = useState<User | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (inputText.trim() !== "") {
      // Set filter to search by name
      setFilters([...filters, { column: "name", value: inputText }]);
      // Redirect to search page
      router.push("/search");
    } else {
      // Redirect to search page without any filters
      router.push("/search");
    }
  };
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
          onClick={handleSearch}
        >
          <SearchIcon className="text-base pointer-events-none flex-shrink-0" />
        </SearchButton>
      }
      type="search"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    />
  );

  const fetchUserProfile = async (sub: any) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await fetch(`${apiUrl}/users/3`); //TODO: once backend is ready, change the hardcoded id to sub
      const data = await response.json();
      setUserProfileData(transformUser(data));
    } catch (error) {
      console.error(error); //TODO: remove console.error
    }
  };

  useEffect(() => {
    user && fetchUserProfile(user.sub);
  }, [user]);

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
          {siteConfig.navItems.map((item) =>
            //conditional rendering
            item.href === "/upload-product" ? null : (
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
            )
          )}
          {siteConfig.navItems
            .filter((item) => item.href === "/upload-product")
            .map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={user ? item.href : "/api/auth/login"}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
        </div>
        <NavbarItem className="hidden md:flex">
          {!user && (
            <NextLink href="/api/auth/login" passHref>
              <NextUILink>Iniciar Sesión</NextUILink>
            </NextLink>
          )}
          {user && (
            <UserProfileModal
              userProps={userProfileData}
              updateUser={setUserProfileData}
            ></UserProfileModal>
          )}
        </NavbarItem>
        <NavbarItem>
          {user && (
            <NextLink href="/api/auth/logout" passHref>
              <NextUILink>Cerrar Sesión</NextUILink>
            </NextLink>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="little-menu">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem className="hidden md:flex">
            {!user && (
              <NextLink href="/api/auth/login" passHref>
                <NextUILink>Iniciar Sesión</NextUILink>
              </NextLink>
            )}
            {user && (
              <UserProfileModal
                userProps={userProfileData}
                updateUser={setUserProfileData}
              ></UserProfileModal>
            )}
          </NavbarMenuItem>
          {siteConfig.navMenuItems.map((item, index) =>
            //conditional rendering
            item.href === "/upload-product" || item.href === "/help-feedback" ? null : (
              <NavbarMenuItem key={`${item}-${index}`}>
                <NextLink
                  className={clsx(
                    linkStyles({
                      color: "foreground",
                    }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            )
          )}
          {siteConfig.navItems
            .filter((item) => item.href === "/upload-product")
            .map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={user ? item.href : "/api/auth/login"}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          {siteConfig.navItems
            .filter((item) => item.href === "/help-feedback")
            .map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "danger" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          <NavbarMenuItem>
            {user && (
              <NextLink
                href="/api/auth/logout"
                passHref
                className={clsx(
                  linkStyles({
                    color: "danger",
                  }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
              >
                <NextUILink>Cerrar Sesión</NextUILink>
              </NextLink>
            )}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
