import { useState, useEffect } from "react";

const caseStudies = [
  {
    id: "review-analysis",
    number: "01",
    title: "App Review Analysis",
    subtitle: "441 Reviews · Play Store + App Store",
    hook: "What users are actually saying — and what 8club is missing",
    description:
      "Forensic teardown of every public review across both stores. Categorized by severity, cross-referenced with 8club's own responses, and mapped to actionable PM interventions. Surfaces the crash cluster, the waitlist trust gap, and the discovery problem users keep screaming about.",
    stats: [
      { label: "Reviews Analyzed", value: "441" },
      { label: "Issue Categories", value: "7" },
      { label: "Critical Bugs", value: "2" },
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
    subtitle: "13 Screens · Emotion-Scored UX Teardown",
    hook: "The 8-minute journey from curious download to confused waitlist",
    description:
      "First-person walkthrough of 8club's entire onboarding funnel — every screen, every permission dialog, every piece of copy — scored on an emotional curve. Maps exactly where the product builds trust and where it hemorrhages it. The cliff from Hotspot selection (9/10) to waitlist (2/10) is the story.",
    stats: [
      { label: "Screens Mapped", value: "13" },
      { label: "Friction Points", value: "23" },
      { label: "Emotion Low", value: "2/10" },
    ],
    accent: "#D97706",
    accentBg: "#FFF7ED",
    accentBorder: "#FFEDD5",
    icon: "📉",
  },
  {
    id: "prioritisation",
    number: "03",
    title: "Prioritisation Deep Dives",
    subtitle: "8 Observations · RICE-Scored · Solution Architecture",
    hook: "Not just what's broken — what to build first and exactly how",
    description:
      "Eight observations from the onboarding audit, scored through a modified RICE framework (Breadth × Severity × Feasibility), then expanded into full solution architectures. Each deep dive includes the problem, the user psychology behind it, the build spec, and the expected impact. This is the roadmap pitch.",
    stats: [
      { label: "Observations", value: "8" },
      { label: "Deep Dives", value: "4" },
      { label: "Solutions Spec'd", value: "8" },
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
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAF8",
        color: "#1A1A1A",
        fontFamily: "'Source Serif 4', Georgia, serif",
        padding: "28px 20px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* ── HEADER ── */}
        <header
          style={{
            paddingTop: 20,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Purple pill badge */}
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
              fontSize: "clamp(28px, 5.5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              color: "#111",
              margin: "0 0 12px 0",
            }}
          >
            What I'd fix at{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              8club
            </span>{" "}
            on day one.
          </h1>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "#666",
              maxWidth: 600,
              margin: "0 0 20px 0",
            }}
          >
            An uninvited product audit — from app store reviews to onboarding
            teardown to a prioritised roadmap — built to show how I think about
            consumer products.
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
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#444",
              }}
            >
              Ankur Kulkarni
            </span>
            <span style={{ color: "#ccc" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#999",
              }}
            >
              Founding PM Candidate
            </span>
            <span style={{ color: "#ccc" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#999",
              }}
            >
              May 2026
            </span>
          </div>
        </header>

        {/* ── CONTEXT ── */}
        <section
          style={{
            padding: "28px 0 24px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.12s",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}
          >
            Context
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", maxWidth: 660 }}>
            8club has cracked something rare —{" "}
            <strong style={{ color: "#111" }}>
              200K+ members, 10K+ hosts, and a fill rate that puts Eventbrite to
              shame
            </strong>
            . The product-market fit signal is loud. But the app store tells a
            parallel story: crashes that burned a November cohort, a waitlist that
            breeds silence instead of anticipation, and a discovery experience that
            shows events 2,000km away. These three analyses are how I'd walk into
            Day 1 as 8club's founding PM — with receipts, not opinions.
          </p>
        </section>

        {/* ── CASE STUDY CARDS ── */}
        <section style={{ padding: "8px 0 40px" }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#999",
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
                    transform: loaded ? "translateY(0)" : "translateY(16px)",
                    transitionDelay: `${0.2 + i * 0.08}s`,
                  }}
                >
                  {/* Number + Icon row */}
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

                  {/* Title */}
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

                  {/* Subtitle */}
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: "#999",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: 10,
                    }}
                  >
                    {study.subtitle}
                  </div>

                  {/* Hook */}
                  <p
                    style={{
                      fontSize: 13,
                      fontStyle: "italic",
                      color: study.accent,
                      margin: "0 0 10px 0",
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    {study.hook}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "#666",
                      margin: "0 0 18px 0",
                    }}
                  >
                    {study.description}
                  </p>

                  {/* Stats row */}
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
                            fontSize: 18,
                            fontWeight: 700,
                            color: study.accent,
                          }}
                        >
                          {s.value}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9,
                            color: "#999",
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

        {/* ── HOW THIS WAS BUILT ── */}
        <section
          style={{
            padding: "24px 0 20px",
            borderTop: "1px solid #E5E5E3",
            opacity: loaded ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
            }}
          >
            How this was built
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "#888", maxWidth: 600 }}>
            Every review was read individually — not scraped, not summarised by AI.
            The onboarding teardown was done by signing up with a real phone number
            and documenting every screen. The prioritisation framework is original.
            All three analyses were built as interactive React applications, not
            static documents, because product thinking deserves to be explored, not
            just read.
          </p>
        </section>

        {/* ── FOOTER ── */}
        <div
          style={{
            textAlign: "center",
            padding: "22px 0 8px",
            borderTop: "1px solid #E5E5E3",
            marginTop: 8,
          }}
        >
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#111",
            }}
          >
            Ankur Kulkarni
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: "#999",
              marginTop: 4,
            }}
          >
            ankurkulkarni90@gmail.com · linkedin.com/in/ankurkulkarni
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              color: "#bbb",
              marginTop: 8,
              letterSpacing: "0.5px",
            }}
          >
            Built with conviction, not permission
          </div>
        </div>
      </div>
    </div>
  );
}
