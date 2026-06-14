import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitFork, Star } from "lucide-react";
import { projects } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      style={{ background: "var(--off-white)", padding: "6rem 2rem", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="section-title">Things I've Built</h2>
          <p style={{ color: "var(--slate)", fontSize: "1rem", maxWidth: 560, marginBottom: "2.5rem" }}>
            Production systems, research prototypes, and everything in between — each built to solve a real problem.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.25rem",
          }}
        >
          <AnimatePresence>
            {displayed.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "var(--shadow-sm)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  position: "relative",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(37,99,235,0.10)" }}
              >
                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.2rem 0.6rem",
                      background: "#FEF9C3",
                      border: "1px solid #FDE047",
                      borderRadius: 999,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#854D0E",
                    }}
                  >
                    <Star size={10} fill="#854D0E" />
                    Featured
                  </div>
                )}

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "0.75rem",
                    paddingRight: project.featured ? "5rem" : 0,
                    lineHeight: 1.4,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--slate)",
                    lineHeight: 1.75,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.2rem 0.6rem",
                        background: "var(--off-white)",
                        border: "1px solid var(--border)",
                        borderRadius: 6,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--slate)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--slate)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--blue)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--slate)")
                    }
                  >
                    <GitFork size={15} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: "0.7rem 2rem",
              background: "transparent",
              border: "1.5px solid var(--border)",
              borderRadius: 10,
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--slate)",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
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
            {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
          </button>
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
        @media (max-width: 420px) {
          [style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
