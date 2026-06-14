import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Layers } from "lucide-react";

const pillars = [
  {
    icon: <Brain size={22} />,
    title: "LLM Engineering",
    desc: "Designing and deploying LLM-powered systems using Claude, LLaMA, Gemini, and OpenAI APIs — with focus on reliability, latency, and cost.",
  },
  {
    icon: <Layers size={22} />,
    title: "Agentic Systems & RAG",
    desc: "Building multi-agent architectures with LangGraph, LangChain, tool calling, and human-in-the-loop patterns. Advanced RAG with re-ranking and adaptive retrieval.",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud-Native AI on AWS",
    desc: "End-to-end AI solutions on AWS — Bedrock, SageMaker, Lambda, S3, EC2, CloudWatch. Secure, observable, production-grade deployments.",
  },
  {
    icon: <Code2 size={22} />,
    title: "API & Backend Engineering",
    desc: "FastAPI services with Pydantic validation, JWT/OAuth security, structured logging, and modular architecture that scales from prototype to production.",
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--off-white)",
        padding: "6rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="section-title">
            AI Engineer building systems<br />
            <span style={{ color: "var(--blue)" }}>that actually ship.</span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--slate)",
              lineHeight: 1.8,
              maxWidth: 680,
              marginBottom: "3.5rem",
            }}
          >
            I'm a results-driven AI professional with an MSc in Artificial Intelligence (Dublin Business School) 
            and a BSc in Industrial Statistics. I specialize in turning ambiguous business problems into 
            production-grade AI systems — from agentic pipelines and RAG architectures to cloud-native REST APIs. 
            My work spans LLM application development, ML model training on AWS SageMaker, and secure FastAPI 
            backends with enterprise auth patterns.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "1.75rem",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "default",
              }}
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(37,99,235,0.10)" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  padding: "0.6rem",
                  background: "var(--blue-light)",
                  color: "var(--blue)",
                  borderRadius: 10,
                  marginBottom: "1rem",
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "0.5rem",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--slate)", lineHeight: 1.7 }}>
                {p.desc}
              </p>
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

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--blue)",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </span>
  );
}
