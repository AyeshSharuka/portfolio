import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitFork, Link2, ArrowUpRight } from "lucide-react";
import { personal } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Contact() {
  const contactItems = [
    { icon: <Mail size={18} />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: <Phone size={18} />, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: <MapPin size={18} />, label: "Location", value: personal.location, href: undefined },
    { icon: <GitFork size={18} />, label: "GitHub", value: "github.com/AyeshSharuka", href: personal.github },
    { icon: <Link2 size={18} />, label: "LinkedIn", value: "linkedin.com/in/ayesh-sharuka", href: personal.linkedin },
  ];

  return (
    <>
      <section
        id="contact"
        style={{ background: "var(--white)", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <SectionLabel>Contact</SectionLabel>
            <h2 className="section-title">
              Let's work together
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--slate)",
                maxWidth: 520,
                lineHeight: 1.75,
                marginBottom: "3rem",
              }}
            >
              I'm actively seeking AI Engineer, ML Engineer, LLM Engineer, and GenAI Engineer roles in Ireland and Europe. Feel free to reach out.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      background: "var(--off-white)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: "var(--blue-light)",
                        color: "var(--blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--slate-light)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            color: "var(--navy)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "var(--blue)")
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color = "var(--navy)")
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--navy)" }}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                background: "var(--navy)",
                borderRadius: "var(--radius)",
                padding: "2.5rem",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                  lineHeight: 1.3,
                }}
              >
                Ready to build something remarkable?
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Whether you're looking for an AI engineer to join your team or want to discuss a project, 
                I'm always happy to connect.
              </p>

              <a
                href={`mailto:${personal.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  background: "var(--blue)",
                  color: "#fff",
                  borderRadius: 10,
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  transition: "background 0.2s, transform 0.15s",
                  marginBottom: "1.25rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--blue)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Mail size={16} />
                Send an Email
                <ArrowUpRight size={14} />
              </a>

              <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "#94A3B8",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#94A3B8")
                  }
                >
                  <Link2 size={15} />
                  LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "#94A3B8",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#94A3B8")
                  }
                >
                  <GitFork size={15} />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          .section-title {
            font-size: clamp(1.75rem, 4vw, 2.75rem);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.15;
            color: var(--navy);
            margin-bottom: 1.25rem;
          }
          .contact-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--off-white)",
          borderTop: "1px solid var(--border)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.85rem", color: "var(--slate-light)" }}>
          © {new Date().getFullYear()} Ayesh Sharuka — Built with React + TypeScript
        </p>
      </footer>
    </>
  );
}
