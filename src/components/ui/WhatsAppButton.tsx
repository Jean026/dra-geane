import type { ReactNode } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppButton({
  children,
  message,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  const cls = variant === "primary" ? "btn-primary" : variant === "light" ? "btn-light" : "btn-outline";
  return (
    <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={`${cls} ${className}`}>
      {children}
    </a>
  );
}
