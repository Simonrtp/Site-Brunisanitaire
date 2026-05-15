"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, NAV_LINKS, BRAND_ASSETS } from "@/lib/constants";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const callButtonClass =
  "inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/25 transition-all duration-200 hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/80"
          : "bg-transparent shadow-none border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid h-16 lg:h-20 w-full grid-cols-[auto,minmax(0,1fr),auto] items-center gap-2 sm:gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 py-1 justify-self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 rounded-lg"
          >
            <Image
              src={BRAND_ASSETS.logo}
              alt={BRAND_ASSETS.logoAlt}
              width={340}
              height={92}
              className="h-11 w-auto sm:h-12 lg:h-14 max-w-[min(100%,280px)] sm:max-w-[320px] lg:max-w-[380px] object-contain object-left"
              priority
            />
          </Link>

          {/* Centre : nav (desktop) ou bouton appel agrandi (mobile) */}
          <div className="flex justify-center min-w-0">
            <nav className="hidden lg:flex items-center justify-center gap-1 flex-wrap">
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 border-b-2 ${
                      active
                        ? "text-red-600 bg-red-50 border-red-600"
                        : "text-gray-700 border-transparent hover:text-red-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href={CONTACT.phoneHref}
              aria-label={`Appeler Bruni Sanitaire au ${CONTACT.phoneDisplay}`}
              className={`${callButtonClass} lg:hidden gap-2 px-4 py-3 text-sm sm:px-5 sm:py-3.5 shrink min-w-0`}
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span className="whitespace-nowrap">Appeler</span>
            </a>
          </div>

          {/* Droite : bouton desktop + menu mobile */}
          <div className="flex items-center justify-end gap-2 justify-self-end">
            <a
              href={CONTACT.phoneHref}
              aria-label={`Appeler Bruni Sanitaire au ${CONTACT.phoneDisplay}`}
              className={`${callButtonClass} hidden lg:inline-flex px-8 py-4 text-base`}
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span>Appeler maintenant</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const active = isNavActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors border-l-4 ${
                      active
                        ? "text-red-600 bg-red-50 border-red-600"
                        : "text-gray-700 border-transparent hover:text-red-600 hover:bg-red-50/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={CONTACT.phoneHref}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Appeler le ${CONTACT.phoneDisplay}`}
                  className={`${callButtonClass} w-full py-4 text-lg`}
                >
                  <Phone className="h-6 w-6 shrink-0" aria-hidden />
                  Appeler
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
