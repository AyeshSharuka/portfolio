import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Quote } from "lucide-react";
import { education, recommendation } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Education() {
  return (
    <section
      id="education"
      style={{ background: "var(--off-white)", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <SectionLabel>Education</SectionLabel>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.25rem",
            marginTop: "2.5rem",
            marginBottom: "4rem",
          }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.75rem",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--blue-light)",
                  color: "var(--blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "0.25rem",
                    lineHeight: 1.4,
                  }}
                >
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--blue)", marginBottom: "0.35rem" }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--slate-light)", marginBottom: "0.75rem" }}>
                  {edu.period} · {edu.location}
                </p>
                {edu.note && (
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--slate)",
                      lineHeight: 1.65,
                      padding: "0.75rem",
                      background: "var(--blue-light)",
                      borderRadius: 8,
                      borderLeft: "3px solid var(--blue)",
                    }}
                  >
                    {edu.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <SectionLabel>Recommendation</SectionLabel>
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-sm)",
              maxWidth: 780,
              position: "relative",
            }}
          >
            <Quote
              size={40}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.75rem",
                color: "var(--blue-light)",
              }}
            />
            <p
              style={{
                fontSize: "1rem",
                color: "var(--slate)",
                lineHeight: 1.85,
                fontStyle: "italic",
                marginBottom: "1.75rem",
              }}
            >
              "{recommendation.text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--blue)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                CR
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.95rem" }}>
                  {recommendation.author}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--blue)", fontWeight: 600 }}>
                  {recommendation.role}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--slate-light)" }}>
                  {recommendation.credential}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
