"use client";

import type { IconProps } from "@iconify/react";

import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLanguage } from "../../context/LanguageContext";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    { nameKey: "mobile-apps", href: "/services/mobile-development" },
    { nameKey: "websites", href: "/services/web-development" },
    { nameKey: "custom-software", href: "/services/custom-software" },
    { nameKey: "startup", href: "/services/startup" },
    { nameKey: "cloud-integration", href: "/services/cloud-integration" },
    { nameKey: "api-development", href: "/services/api-development" },
    { nameKey: "devops-ci-cd", href: "/services/devops" },
  ],
  caseStudies: [
    { nameKey: "case-studies", href: "/case-studies" },
    { name: "Syllog", href: "/case-studies/syllog" },
    { name: "Climawell Website", href: "/case-studies/climawell-website" },
    { name: "Climawell Marketing", href: "/case-studies/climawell-marketing" },
  ],
  aboutUs: [],
  legal: [
    { nameKey: "footer-privacy-policy", href: "/privacy-policy" },
    { nameKey: "footer-terms-of-service", href: "/terms-of-service" },
    { nameKey: "footer-cookie-policy", href: "/cookie-policy" },
    { nameKey: "footer-gdpr", href: "/gdpr" },
  ],
  social: [
    {
      nameKey: "footer-social-facebook",
      href: "https://facebook.com/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      ),
    },
    {
      nameKey: "footer-social-instagram",
      href: "https://instagram.com/spacedesignitalia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      ),
    },
    {
      nameKey: "footer-social-linkedin",
      href: "https://www.linkedin.com/company/space-design-italia",
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:linkedin" />
      ),
    },
  ],
};

export default function Footer() {
  const { language, t } = useLanguage();

  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name?: string; nameKey?: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.nameKey || item.name}>
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
                {item.nameKey ? t(item.nameKey) : item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [language, t]
  );

  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start">
              <img
                src="/logo.png"
                alt={t("footer-company-logo-alt") || "Space Design Italia Logo"}
                className="h-36 w-auto"
              />
            </div>
            <p className="text-small text-default-500">
              {t("footer-company-description") ||
                "Trasformiamo l'ordinario in straordinario, ispirati dalle meraviglie dello spazio!"}
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.nameKey}
                  isExternal
                  className="text-default-400"
                  href={item.href}
                >
                  <span className="sr-only">{item.nameKey}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                {renderList({
                  title: t("services") || "Servizi",
                  items: footerNavigation.services,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: t("case-studies") || "Case Studies",
                  items: footerNavigation.caseStudies,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: t("footer-legal-title") || "Legal",
                  items: footerNavigation.legal,
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; {new Date().getFullYear()} Space Design Italia.{" "}
            {t("footer-copyright") || "All rights reserved."}
          </p>
          <p className="text-small text-default-400">
            {t("company-vat") || "P.IVA 07420400488"}
          </p>
        </div>
      </div>
    </footer>
  );
}
