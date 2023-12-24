import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "../../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <KeyboardArrowDownIcon size={16} />,
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      className=" bg-transparen md:p-3"
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand justify="start">
        <img src={Logo} alt="company logo" className="w-1/3" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent data-[hover=true]:bg-transparent font-bold"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Servizi
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Servizi offerti"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Websites"
              description="Siti web innovativi, responsive, intuitivi: trasforma la tua presenza digitale."
              startContent={
                <Button isIconOnly className=" bg-warning-100">
                  <WebIcon size={16} className="text-warning" />
                </Button>
              }
            >
              <b className="font-semibold text-md">Siti Web</b>
            </DropdownItem>

            <DropdownItem
              key="Custom Software"
              description="Soluzioni software su misura, web app innovative, potenti e personalizzate."
              startContent={
                <Button isIconOnly className=" bg-primary-100">
                  <TerminalIcon size={16} className="text-primary" />
                </Button>
              }
            >
              <b className="font-semibold text-md">Software personalizzato</b>
            </DropdownItem>

            <DropdownItem
              key="Applicazioni mobile"
              description="App mobile su misura, esperienze innovative e personalizzate per connettere efficacemente."
              startContent={
                <Button isIconOnly className=" bg-success-100">
                  <SmartphoneIcon size={16} className="text-success" />
                </Button>
              }
            >
              <b className="font-semibold text-md">App Mobile</b>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="font-bold" color="foreground" href="/azienda">
            Azienda
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:flex justify-end" justify="end">
        <NavbarItem className="hidden md:block">
          <Button color="primary" radius="sm">
            Accedi
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link>Home</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
