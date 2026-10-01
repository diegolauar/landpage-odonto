"use client";

import { useState } from "react";
import Image from "next/image";
import { clinic, navLinks } from "@/config/clinic";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#inicio" className="logo" aria-label={`${clinic.name} — início`}>
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={58}
            height={40}
          />
          <span className="logo-text">
            <b>ODONTO</b>
            <small>VIANÓPOLIS</small>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton
          className="btn btn-primary btn-desktop"
          events={["click_schedule", "click_whatsapp"]}
        >
          Agendar consulta
        </WhatsAppButton>
        <button
          className="menu-btn"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        className={`mobile-nav${isOpen ? " open" : ""}`}
        id="menu-mobile"
        aria-label="Menu"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <WhatsAppButton
          className="btn btn-primary"
          events={["click_schedule", "click_whatsapp"]}
        >
          Agendar consulta pelo WhatsApp
        </WhatsAppButton>
      </nav>
    </header>
  );
}
