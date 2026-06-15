import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--white)", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="section-title">Technical Toolkit</h2>
          <p style={{ color: "var(--slate)", fontSize: "1rem", maxWidth: 500, marginBottom: "3rem" }}>
            A full-stack AI engineering toolkit from model APIs and agent frameworks to cloud infrastructure and secure backends.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                background: "var(--off-white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  marginBottom: "1rem",
                }}
              >
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "0.3rem 0.75rem",
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      borderRadius: 7,
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--slate)",
                      transition: "border-color 0.15s, color 0.15s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                      (e.currentTarget as HTMLElement).style.color = "var(--blue)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--slate)";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
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
      `}</style>
    </section>
  );
}
