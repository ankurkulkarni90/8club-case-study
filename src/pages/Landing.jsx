import { useState, useEffect } from "react";

const fontLink =
  "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";

const findings = [
  {
    number: "01",
    title: "The waitlist is the activation bottleneck",
    body: "Four of six onboarding observations cluster at the same point: the waitlist-to-activation transition. The estimated emotional arc drops from ~9/10 (Hotspot selection) to ~2/10 (waitlist screen) in a single step. No timeline, no status updates, no explanation of clearance criteria. Users who complete all mandatory steps see \"16% profile complete.\" The waiting room has empty tabs and no content. This is where 8club loses the demand that onboarding built.",
    impact: "Affects 100% of users. Improving waitlist transparency and experience correlates with 15-25% higher Day-7 retention in comparable invite-only products.",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FECACA",
  },
  {
    number: "02",
    title: "No channels exist to bring waitlisted users back",
    body: "Phone number is collected for OTP but not used for transactional SMS. Email is not part of onboarding; it is an optional field buried in Edit Profile. Push notification permission is requested on the Notifications tab, after onboarding, when a waitlisted user has no reason to grant it. If a user closes the app during the wait, 8club has no way to reach them when they are cleared.",
    impact: "Structural gap. Adding email collection during onboarding (with clear value framing) typically sees 40-60% provision rates at comparable consumer apps. That alone creates a re-engagement channel that currently does not exist.",
    accent: "#D97706",
    accentBg: "#FFF7ED",
    accentBorder: "#FFEDD5",
  },
  {
    number: "03",
    title: "Discovery does not match what users selected",
    body: "The app asks for interests and city during onboarding, but the feed, wall, and home tabs do not strongly reflect those selections. Most visible hotspots skew toward parties. The home tab surfaces past events. Users in non-Bangalore cities see limited relevant content. This is the most requested improvement in app store reviews across both stores.",
    impact: "Interest-based relevance scoring is the highest-signal feature request. Comparable social discovery apps that ship location + interest filtering typically see measurable lifts in browse-to-action conversion.",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
  },
];

const goDeeper = [
  {
    id: "review-analysis",
    title: "App Review Intelligence",
    meta: "441 reviews, 8 themes, severity-scored",
    accent: "#DC2626",
  },
  {
    id: "onboarding-journey",
    title: "Onboarding Journey Map",
    meta: "13 screens, emotion-scored, friction-mapped",
    accent: "#D97706",
  },
  {
    id: "prioritisation",
    title: "Prioritisation Deep Dives",
    meta: "6 observations scored, 2 fully spec'd",
    accent: "#059669",
  },
];

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

  const fadeIn = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(12px)",
    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

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
        <header style={fadeIn(0)}>
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
            441 app store reviews read individually. 13 onboarding screens
            documented with a real phone number. Six observations scored through
            a prioritisation framework and two expanded into full solution
            architectures. Here is what surfaced.
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

        {/* Key Findings */}
        <section style={{ padding: "28px 0 24px", ...fadeIn(0.1) }}>
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
            Key Findings
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {findings.map((f, i) => (
              <div
                key={f.number}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "22px 24px",
                  border: `1px solid #E5E5E3`,
                  borderLeft: `3px solid ${f.accent}`,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  ...fadeIn(0.15 + i * 0.07),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: f.accent,
                      fontWeight: 500,
                    }}
                  >
                    {f.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#111",
                      margin: 0,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {f.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#555",
                    margin: "0 0 12px 0",
                  }}
                >
                  {f.body}
                </p>

                <div
                  style={{
                    background: f.accentBg,
                    border: `1px solid ${f.accentBorder}`,
                    borderRadius: 8,
                    padding: "10px 14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 600,
                      color: f.accent,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    Directional Impact
                  </span>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.65,
                      color: "#555",
                      margin: "4px 0 0 0",
                    }}
                  >
                    {f.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* First 30 Days */}
        <section
          style={{
            padding: "24px 0",
            borderTop: "1px solid #E5E5E3",
            ...fadeIn(0.4),
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
            Where I Would Start
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "20px 24px",
              border: "1px solid #E5E5E3",
              borderLeft: "3px solid #5B21B6",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#444",
                margin: "0 0 10px 0",
              }}
            >
              <strong style={{ color: "#111" }}>
                Week 1-2: Instrument the activation funnel.
              </strong>{" "}
              Before building anything, understand the current conversion rates
              at each stage: onboarding completion, waitlist entry, clearance,
              first Hotspot attendance. The analysis above is built from
              public signals. Internal data will confirm, refine, or redirect
              these priorities.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#444",
                margin: "0 0 10px 0",
              }}
            >
              <strong style={{ color: "#111" }}>
                Week 2-3: Ship waitlist transparency.
              </strong>{" "}
              Status updates, timeline estimates, progress reframing ("Core
              profile complete" instead of "16%"). Low engineering effort,
              high-signal change. Measurable through Day-7 retention of
              waitlisted users.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#444",
                margin: "0 0 10px 0",
              }}
            >
              <strong style={{ color: "#111" }}>
                Week 3-4: Close the re-engagement gap.
              </strong>{" "}
              Add email collection during onboarding. Move push notification
              permission into the onboarding flow at a contextually appropriate
              moment. Send a single transactional SMS when waitlist clears. These
              are the channels needed to bring users back when it is their turn.
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#444",
                margin: 0,
              }}
            >
              <strong style={{ color: "#111" }}>
                Ongoing: Feed relevance and stability.
              </strong>{" "}
              Set up crash monitoring with release-gating. Begin work on
              interest-based and location-based feed scoring so discovery matches
              what users selected during onboarding.
            </p>
          </div>
        </section>

        {/* Go Deeper */}
        <section
          style={{
            padding: "24px 0",
            borderTop: "1px solid #E5E5E3",
            ...fadeIn(0.5),
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: 6,
            }}
          >
            Full Analysis
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#888",
              margin: "0 0 14px 0",
              lineHeight: 1.6,
            }}
          >
            The three pages below contain the complete evidence base behind
            these findings.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {goDeeper.map((item) => {
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => navigate(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderRadius: 10,
                    border: `1px solid ${isHovered ? item.accent + "44" : "#E5E5E3"}`,
                    background: isHovered ? "#fff" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: isHovered
                      ? "0 2px 8px rgba(0,0,0,0.06)"
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "#111",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "#888",
                        marginTop: 2,
                      }}
                    >
                      {item.meta}
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isHovered ? item.accent : "#ccc"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "all 0.2s ease",
                      transform: isHovered
                        ? "translateX(3px)"
                        : "translateX(0)",
                      flexShrink: 0,
                    }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
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
            ...fadeIn(0.55),
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
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: "#666",
              maxWidth: 620,
            }}
          >
            Reviews were read individually across both stores. The onboarding
            teardown was done by signing up with a real phone number and
            documenting each screen. The prioritisation framework is original.
            All conclusions are based on public data and one user's experience.
            Internal metrics would refine or redirect these priorities.
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
