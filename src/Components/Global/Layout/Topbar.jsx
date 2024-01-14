import React, { useEffect, useState } from "react";
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
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Logo from "../../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WebIcon from "@mui/icons-material/Web";
import TerminalIcon from "@mui/icons-material/Terminal";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const icons = {
    chevron: <KeyboardArrowDownIcon size={16} />,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolling(false);
      } else {
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      className={isScrolling ? "bg-white md:p-3" : "bg-transparent md:p-3"}
      isBordered={isScrolling}
      maxWidth="xl"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarBrand justify="start">
        <img
          src={Logo}
          alt="company logo"
          className="w-full sm:w-1/2 lg:w-1/3"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Link className="font-bold text-black" href="/">
            Home
          </Link>
        </NavbarItem>

        <Dropdown showArrow>
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
            className="w-[340px] bg-white backdrop-blur"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              as={Link}
              href="/servizi/siti_web"
              className="text-black"
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
              as={Link}
              href="/servizi/software_personalizzato"
              className="text-black"
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
              as={Link}
              href="/servizi/app_mobile"
              className="text-black"
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
          <Link className="font-bold text-black" href="/contattaci">
            Contattaci
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:flex justify-end" justify="end">
        <NavbarItem className="hidden md:block">
          <Button as={Link} href="/accedi" color="primary" radius="sm">
            Accedi
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem className="py-2">
          <Link className="text-md" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Accordion
            isCompact
            variant="light"
            className="p-0 flex flex-col gap-1 w-full"
            showDivider={false}
          >
            <AccordionItem key="1" aria-label="Servizi" title="Servizi">
              <div className="flex flex-col gap-5 text-xs pl-5">
                <Link
                  className="text-black"
                  key="autoscaling"
                  href="/servizi/siti_web"
                >
                  Siti Web
                </Link>

                <Link
                  className="text-black"
                  key="autoscaling"
                  href="/servizi/software_personalizzato"
                >
                  Software personalizzato
                </Link>

                <Link
                  className="text-black"
                  key="autoscaling"
                  href="/servizi/app_mobile"
                >
                  App Mobile
                </Link>
              </div>
            </AccordionItem>
          </Accordion>
        </NavbarItem>

        <NavbarItem className="py-2">
          <Link className="text-md" color="foreground" href="/contattaci">
            Contattaci
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="/accedi"
            color="primary"
            radius="sm"
            fullWidth
          >
            Accedi
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
