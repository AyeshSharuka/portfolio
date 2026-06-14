import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--white)", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="section-title">Work History</h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", marginTop: "2.5rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 0,
              bottom: 0,
              width: 2,
              background: "var(--border)",
              borderRadius: 2,
            }}
            className="timeline-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{ display: "flex", gap: "2rem", position: "relative" }}
                className="timeline-item"
              >
                {/* Dot */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--blue)" : "var(--white)",
                    border: `2px solid ${i === 0 ? "var(--blue)" : "var(--border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: i === 0 ? "#fff" : "var(--slate-light)",
                    zIndex: 1,
                    transition: "background 0.2s",
                  }}
                  className="timeline-dot"
                >
                  <Briefcase size={16} />
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    padding: "1.75rem",
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--navy)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "var(--blue)",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          background: "var(--off-white)",
                          border: "1px solid var(--border)",
                          borderRadius: 6,
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: "var(--slate)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {job.period}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          justifyContent: "flex-end",
                          color: "var(--slate-light)",
                          fontSize: "0.78rem",
                        }}
                      >
                        <MapPin size={12} />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul
                    style={{
                      margin: "1rem 0",
                      paddingLeft: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--slate)",
                          lineHeight: 1.7,
                        }}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "0.25rem 0.65rem",
                          background: "var(--blue-light)",
                          color: "var(--blue)",
                          borderRadius: 6,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
        @media (max-width: 640px) {
          .timeline-line { display: none; }
          .timeline-item { flex-direction: column !important; gap: 1rem !important; }
          .timeline-dot { display: none !important; }
        }
      `}</style>
    </section>
  );
}
