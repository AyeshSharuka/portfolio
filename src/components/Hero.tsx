import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GitFork, Link2, Mail, ArrowDown } from "lucide-react";
import { personal } from "../data/portfolio";

const ROLES = [
  "AI Engineer",
  "ML Engineer",
  "LLM Engineer",
  "GenAI Engineer",
  "RAG Pipeline Developer",
  "Agentic AI Developer",
  "NLP Engineer",
  "AI Backend Developer",
  "Generative AI",
  "Deep Learning",
  "AWS Cloud AI",
  "Prompt Engineer",
  "Data Scientist",
  "MLOps Engineer",
];
const TYPE_SPEED = 60; // ms per character typed
const ERASE_SPEED = 35; // ms per character erased
const PAUSE_AFTER = 1600; // ms to hold the full word

function CyclingTitle() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">(
    "typing",
  );

  useEffect(() => {
    const target = ROLES[roleIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          TYPE_SPEED,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), PAUSE_AFTER);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      setPhase("erasing");
    }

    if (phase === "erasing") {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          ERASE_SPEED,
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, roleIndex]);

  return (
    <div
      style={{
        marginBottom: "1.25rem",
        height: "2rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          fontWeight: 700,
          color: "var(--blue)",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}
      >
        {displayed}
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1.1em",
            background: "var(--blue)",
            marginLeft: 3,
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        />
      </span>
    </div>
  );
}

export default function Hero() {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const len = el.getTotalLength?.() ?? 200;
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
    setTimeout(() => {
      el.style.transition =
        "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)";
      el.style.strokeDashoffset = "0";
    }, 600);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const tags = [
    "Agentic AI",
    "RAG Pipelines",
    "LLM Systems",
    "LangGraph",
    "AWS Bedrock",
    "FastAPI",
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--white)",
        padding: "7rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Gradient fade at bottom of grid */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to bottom, transparent, var(--white))",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-inner"
      >
        {/* Left: text */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          {/* Available badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              background: "#F0FDF4",
              border: "1px solid #BBF7D0",
              borderRadius: 999,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#16A34A",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            Open to AI Engineer roles in Ireland & Europe
          </motion.div>

          {/* Name */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--navy)",
                marginBottom: "0.25rem",
              }}
            >
              {personal.name}
            </h1>

            {/* Signature line */}
            <div style={{ marginBottom: "1rem" }}>
              <svg
                width="160"
                height="6"
                viewBox="0 0 160 6"
                fill="none"
                style={{ display: "block" }}
              >
                <line
                  ref={lineRef}
                  x1="0"
                  y1="3"
                  x2="160"
                  y2="3"
                  stroke="#2563EB"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Title — cycling typewriter */}
          <CyclingTitle />

          {/* Tagline */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              fontSize: "1.05rem",
              color: "var(--slate)",
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: "2rem",
            }}
          >
            {personal.tagline}
          </motion.p>

          {/* Tags */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "0.3rem 0.8rem",
                  background: "var(--blue-light)",
                  color: "var(--blue)",
                  borderRadius: 6,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <a
              href="#contact"
              style={{
                padding: "0.75rem 2rem",
                background: "var(--blue)",
                color: "#fff",
                borderRadius: 10,
                fontSize: "0.95rem",
                fontWeight: 700,
                transition: "background 0.2s, transform 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--blue)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              style={{
                padding: "0.75rem 2rem",
                background: "transparent",
                color: "var(--navy)",
                border: "1.5px solid var(--border)",
                borderRadius: 10,
                fontSize: "0.95rem",
                fontWeight: 600,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--blue)";
                (e.currentTarget as HTMLElement).style.color = "var(--blue)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--navy)";
              }}
            >
              View Projects
            </a>

            {/* Social icons */}
            <div
              style={{ display: "flex", gap: "0.75rem", marginLeft: "0.5rem" }}
            >
              {[
                {
                  href: personal.github,
                  icon: <GitFork size={18} />,
                  label: "GitHub",
                },
                {
                  href: personal.linkedin,
                  icon: <Link2 size={18} />,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${personal.email}`,
                  icon: <Mail size={18} />,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: "1.5px solid var(--border)",
                    color: "var(--slate)",
                    transition:
                      "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--blue)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--blue)";
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--blue-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--slate)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--slate-light)",
              fontSize: "0.85rem",
              marginTop: "1.5rem",
            }}
          >
            <MapPin size={14} />
            {personal.location}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          style={{ flexShrink: 0 }}
          className="hero-photo-wrapper"
        >
          <div
            style={{
              position: "relative",
              width: 420,
              height: 500,
            }}
          >
            {/* Decorative rings */}
            <div
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
                border: "1.5px solid var(--border)",
                zIndex: 0,
                animation: "rotateBlob 18s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
                border: "1.5px solid var(--blue-light)",
                zIndex: 0,
                animation: "rotateBlob 12s linear infinite reverse",
              }}
            />

            {/* Photo */}
            <img
              src={personal.photo}
              alt="Ayesh Sharuka"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "bottom",
                filter: "drop-shadow(0 8px 32px rgba(37,99,235,0.12))",
              }}
              onError={(e) => {
                // Fallback placeholder
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.nextSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Photo placeholder — shown only if image is missing */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--blue-light)",
                borderRadius: 24,
                flexDirection: "column",
                gap: "0.75rem",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: "var(--blue)",
                  letterSpacing: "-0.04em",
                }}
              >
                AS
              </span>
              <span
                style={{
                  color: "var(--blue)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Add photo to /public/images/profile.png
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--slate-light)",
          fontSize: "0.75rem",
          fontWeight: 500,
          zIndex: 2,
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes rotateBlob {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        .hero-photo-wrapper { display: block; }
        @media (max-width: 900px) {
          .hero-inner { flex-direction: column-reverse !important; align-items: center !important; }
          .hero-photo-wrapper { width: 280px !important; }
          .hero-photo-wrapper > div { width: 280px !important; height: 340px !important; }
        }
      `}</style>
    </section>
  );
}
