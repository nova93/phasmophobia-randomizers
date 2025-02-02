import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      position="static"
      isBordered={true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <h1>Phasmophobia Randomizer</h1>
      </NavbarBrand>

      <NavbarMenu>
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ghost">Ghost</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/location">Location</Link>
        </NavbarItem>
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ghost">Ghost</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/location">Location</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
