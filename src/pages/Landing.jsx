import { useState, useEffect } from "react";

const caseStudies = [
  {
    id: "review-analysis",
    number: "01",
    title: "App Review Intelligence",
    subtitle: "441 reviews across Play Store and App Store",
    hook: "What users are telling 8club through their ratings, and what patterns emerge when you read every single one.",
    description:
      "Every public review on both stores, categorised by theme, scored by severity, and mapped to PM-level actions. Covers stability, the waitlist experience, discovery and filtering gaps, pricing perception, and more. Each category includes the raw reviews, a pattern analysis, and a recommended next step.",
    stats: [
      { label: "Reviews Read", value: "441" },
      { label: "Themes Found", value: "8" },
      { label: "Priority Actions", value: "5" },
    ],
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FECACA",
    icon: "💬",
  },
  {
    id: "onboarding-journey",
    title: "Onboarding Journey Map",
    number: "02",
    subtitle: "13 screens, emotion-scored, screen by screen",
    hook: "A first-person walkthrough of the full onboarding funnel, from OTP to waitlist.",
    description:
      "Signed up with a real phone number and documented every screen, permission dialog, and piece of copy. Each stage is scored on an estimated emotional curve. Maps where the product builds user trust, where it asks too much too early, and where the experience drops off. Surfaces six candidate observations for prioritisation.",
    stats: [
      { label: "Stages Mapped", value: "13" },
      { label: "Friction Points", value: "23" },
      { label: "Observations", value: "6" },
    ],
    accent: "#D97706",
    accentBg: "#FFF7ED",
    accentBorder: "#FFEDD5",
    icon: "📱",
  },
  {
    id: "prioritisation",
    number: "03",
    title: "Prioritisation Deep Dives",
    subtitle: "8 observations scored, 4 fully spec'd",
    hook: "Taking the observations from the journey map and applying a structured prioritisation framework.",
    description:
      "Eight observations from the onboarding audit, scored through a modified RICE framework (Breadth, Severity, Feasibility). The top four are expanded into full solution architectures with problem statements, user psychology, build specifications, and expected impact. This is where analysis turns into a buildable roadmap.",
    stats: [
      { label: "Scored", value: "8" },
      { label: "Deep Dives", value: "4" },
      { label: "Solutions", value: "8" },
    ],
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#A7F3D0",
    icon: "🎯",
  },
];

const fontLink =
  "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";

export default function Landing({ onNavigate }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!document.querySelector(`link[href*="Source+Serif"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = fontLink;
      document.head.appendChild(link);
    }
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const navigate = (id) => {
    if (onNavigate) onNavigate(id);
    else window.location.hash = id;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAF8",
        color: "#1A1A1A",
        fontFamily: "'Source Serif 4', Georgia, serif",
        padding: "32px 20px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <header
          style={{
            paddingTop: 16,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              color: "#fff",
              fontWeight: 500,
              letterSpacing: "0.5px",
              marginBottom: 24,
            }}
          >
            Product Case Study
          </div>

          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 5.5vw, 40px)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Product Lens:{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              8club
            </span>
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "#555",
              maxWidth: 620,
              margin: "0 0 24px 0",
            }}
          >
            Three analyses exploring 8club's product through different angles:
            user reviews, onboarding experience, and a prioritised improvement
            roadmap. Built to show how I think about consumer products.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              paddingBottom: 28,
              borderBottom: "1px solid #E5E5E3",
            }}
          >
            <a
              href="https://www.linkedin.com/in/ankurkulkarni/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#5B21B6",
                textDecoration: "none",
              }}
            >
              Ankur Kulkarni
            </a>
            <span style={{ color: "#ccc" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#666",
              }}
            >
              Founding PM Candidate
            </span>
            <span style={{ color: "#ccc" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#666",
              }}
            >
              May 2026
            </span>
          </div>
        </header>

        {/* Context */}
        <section
          style={{
            padding: "28px 0 24px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 12,
            }}
          >
            Context
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444", maxWidth: 660 }}>
            8club has clear product-market fit signals:{" "}
            <strong style={{ color: "#111" }}>
              200K+ members, 10K+ hosts, 55% Hotspot fill rate
            </strong>
            . The concept resonates, even critics in the app store acknowledge
            that. These analyses look at where the current experience sits,
            what patterns show up across hundreds of user reviews, and where
            the highest-leverage improvements are for a founding PM thinking
            about the first 30 days.
          </p>
        </section>

        {/* Case Study Cards */}
        <section style={{ padding: "8px 0 40px" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 16,
            }}
          >
            Three Lenses
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {caseStudies.map((study, i) => {
              const isHovered = hoveredCard === study.id;
              return (
                <div
                  key={study.id}
                  onMouseEnter={() => setHoveredCard(study.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => navigate(study.id)}
                  style={{
                    position: "relative",
                    padding: "24px 28px",
                    borderRadius: 14,
                    border: `1px solid ${isHovered ? study.accentBorder : "#E5E5E3"}`,
                    background: isHovered ? study.accentBg : "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    boxShadow: isHovered
                      ? "0 4px 12px rgba(0,0,0,0.06)"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${0.18 + i * 0.08}s`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: study.accent,
                          fontWeight: 500,
                        }}
                      >
                        {study.number}
                      </span>
                      <span style={{ fontSize: 20 }}>{study.icon}</span>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isHovered ? study.accent : "#ccc"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "all 0.25s ease",
                        transform: isHovered ? "translateX(3px)" : "translateX(0)",
                      }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 4px 0",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {study.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      marginBottom: 10,
                    }}
                  >
                    {study.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: 14,
                      fontStyle: "italic",
                      color: study.accent,
                      margin: "0 0 10px 0",
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    {study.hook}
                  </p>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "#555",
                      margin: "0 0 18px 0",
                    }}
                  >
                    {study.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      flexWrap: "wrap",
                      padding: "14px 16px",
                      background: "#FAFAF8",
                      borderRadius: 10,
                      border: "1px solid #E5E5E3",
                    }}
                  >
                    {study.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: 20,
                            fontWeight: 700,
                            color: study.accent,
                          }}
                        >
                          {s.value}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            color: "#888",
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            marginTop: 2,
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Methodology */}
        <section
          style={{
            padding: "24px 0 20px",
            borderTop: "1px solid #E5E5E3",
            opacity: loaded ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 12,
            }}
          >
            Methodology
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#666", maxWidth: 620 }}>
            Reviews were read individually across both stores. The onboarding
            teardown was done by signing up with a real phone number and
            documenting each screen. The prioritisation framework is original.
            All three analyses are interactive React applications.
          </p>
        </section>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: "24px 0 12px",
            borderTop: "1px solid #E5E5E3",
            marginTop: 8,
          }}
        >
          <a
            href="https://www.linkedin.com/in/ankurkulkarni/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#5B21B6",
              textDecoration: "none",
            }}
          >
            Ankur Kulkarni
          </a>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#666",
              marginTop: 6,
            }}
          >
            ankurkulkarni90@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
