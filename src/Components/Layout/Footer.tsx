"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/LanguageContext";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { name: "Mobile Apps", href: "/services/mobile-development" },
    { name: "Web Applications", href: "/services/web-development" },
    { name: "Websites", href: "/services/web-development" },
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "Startup MVP", href: "/services/startup-mvp" },
    { name: "Cloud Integration", href: "/services/cloud-integration" },
    { name: "API Development", href: "/services/api-development" },
    { name: "Legacy Systems", href: "/services/legacy-integration" },
    { name: "Digital Strategy", href: "/services/digital-strategy" },
    { name: "Technical Architecture", href: "/services/tech-architecture" },
    { name: "Security Consulting", href: "/services/security" },
  ],
  supportOptions: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Support Center", href: "/support" },
    { name: "Contact Sales", href: "/contact" },
  ],
  aboutUs: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:twitter" />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:linkedin" />
      ),
    },
  ],
};

export default function Footer() {
  const { language } = useLanguage();

  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-400"
                href={
                  item.href.startsWith("http")
                    ? item.href
                    : `/${language}${item.href}`
                }
                size="sm"
                isExternal={item.href.startsWith("http")}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [language]
  );

  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <img
                src="/logo.png"
                alt="Space Design Italia Logo"
                className="h-36 w-auto"
              />
            </div>
            <p className="text-small text-default-500">
              Trasformiamo l'ordinario in straordinario, ispirati dalle
              meraviglie dello spazio!
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  isExternal
                  className="text-default-400"
                  href={item.href}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "Services",
                  items: footerNavigation.services,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: "Support",
                  items: footerNavigation.supportOptions,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "About Us",
                  items: footerNavigation.aboutUs,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: "Legal", items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; {new Date().getFullYear()} Space Design Italia. All rights
            reserved.
          </p>
          <p className="text-small text-default-400">P.IVA 07420400488</p>
        </div>
      </div>
    </footer>
  );
}
