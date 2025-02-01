import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";

export default () => {
  return (
    <Navbar position="static" isBordered={true}>
      <NavbarBrand>
        <h1>Phasmophobia Randomizer</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/ghost">Ghost</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/map">Map</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
