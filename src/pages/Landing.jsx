import { useState, useEffect } from "react";

const fontLink =
  "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap";

const findings = [
  {
    number: "01",
    title: "The waitlist is the activation bottleneck",
    bullets: [
      "Four of six onboarding observations cluster at the same point: the transition from onboarding to the waitlist.",
      "The estimated emotional arc drops sharply here. Hotspot selection feels exciting, but the waitlist screen offers no timeline, no status indicator, and no explanation of what determines clearance.",
      "Users who complete every mandatory onboarding step land on a screen that says \"16% profile complete,\" which frames their effort as insufficient rather than acknowledging it.",
      "The tabs available to waitlisted users (Wall, Notifications, Hotspots) are mostly empty or gated, so there is nothing to do while waiting.",
    ],
    impact: "This affects every user who signs up. In comparable invite-only products, introducing waitlist transparency and status communication has correlated with 15-25% improvements in Day-7 retention among gated users.",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FECACA",
  },
  {
    number: "02",
    title: "There is no reliable way to bring waitlisted users back",
    bullets: [
      "The phone number collected during sign-up is used for OTP authentication. However, when my own waitlist was cleared, I did not receive an SMS, email, or push notification about it.",
      "Email is not part of the onboarding flow. It is an optional field in Edit Profile, which most users won't fill out unprompted.",
      "Push notification permission is requested on the Notifications tab, which a waitlisted user has no reason to visit and no clear reason to grant.",
      "This means that when 8club clears a user from the waitlist, the app has no way to tell them. The user has to remember to come back on their own.",
    ],
    impact: "Adding email collection during onboarding with a specific value proposition (\"we will notify you when you are in\") typically sees 40-60% provision rates in consumer apps. Even recovering a small fraction of users who never learn they were approved directly lifts activation.",
    accent: "#D97706",
    accentBg: "#FFF7ED",
    accentBorder: "#FFEDD5",
  },
  {
    number: "03",
    title: "Discovery does not reflect what users selected",
    bullets: [
      "During onboarding, 8club asks users to pick their interests and city. But the feed, wall, and home tabs do not strongly reflect those choices.",
      "Most visible hotspots skew toward parties. Users who selected other interest categories see limited variety.",
      "The home tab often surfaces past events rather than upcoming ones.",
      "This is the most consistent improvement request in app store reviews across both stores.",
    ],
    impact: "Interest and location-based feed relevance is the highest-signal feature gap. Comparable social discovery apps that shipped these filters have seen measurable improvements in browse-to-action conversion.",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
  },
];

const goDeeper = [
  {
    id: "review-analysis",
    title: "App Review Intelligence",
    meta: "54 text reviews analysed across 8 themes",
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
    transform: loaded ? "translateY(0)" : "translateY(10px)",
    transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
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
              fontSize: 14,
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
              color: "#444",
              maxWidth: 640,
              margin: "0 0 24px 0",
            }}
          >
            I signed up for 8club, went through every screen, read every
            text review on both app stores, and put together what I think
            matters most for the product right now. Below are the key
            findings, followed by what I would focus on first. The full
            analysis is linked at the bottom.
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
                fontSize: 15,
                fontWeight: 600,
                color: "#5B21B6",
                textDecoration: "none",
              }}
            >
              Ankur Kulkarni
            </a>
            <span style={{ color: "#ccc" }}>·</span>
            <a
              href="https://8club.co/engineering-and-data/product-manager"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#5B21B6",
                textDecoration: "none",
              }}
            >
              Your prospective first PM
            </a>
            <span style={{ color: "#ccc" }}>·</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#555",
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 16,
            }}
          >
            Key Findings
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {findings.map((f, i) => (
              <div
                key={f.number}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "22px 24px",
                  border: "1px solid #E5E5E3",
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
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: f.accent,
                      fontWeight: 500,
                    }}
                  >
                    {f.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#111",
                      margin: 0,
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {f.title}
                  </h3>
                </div>

                <ul
                  style={{
                    margin: "0 0 14px 0",
                    padding: "0 0 0 20px",
                    listStyle: "disc",
                  }}
                >
                  {f.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "#444",
                        marginBottom: 6,
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>

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
                      fontSize: 14,
                      fontWeight: 600,
                      color: f.accent,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Directional Impact
                  </span>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "#444",
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

        {/* Where I Would Start */}
        <section
          style={{
            padding: "24px 0",
            borderTop: "1px solid #E5E5E3",
            ...fadeIn(0.4),
          }}
        >
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 14,
            }}
          >
            Where I Would Start
          </div>
          <div
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "22px 24px",
              border: "1px solid #E5E5E3",
              borderLeft: "3px solid #5B21B6",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  week: "Week 1–2",
                  title: "Instrument the activation funnel",
                  body: "Before building anything, I would want to understand the actual conversion rates at each stage: onboarding completion, waitlist entry, clearance, first Hotspot attendance. The findings above are based on public data. Internal metrics will confirm, refine, or redirect these priorities.",
                },
                {
                  week: "Week 2–3",
                  title: "Ship waitlist transparency",
                  body: "Add status updates, timeline estimates, and reframe the progress signal (\"Core profile complete\" instead of \"16%\"). This is a copy and logic change, not an architecture change. Measurable through Day-7 retention of waitlisted users.",
                },
                {
                  week: "Week 3–4",
                  title: "Close the re-engagement gap",
                  body: "Add email collection during onboarding with a clear reason (\"we will notify you when you are in\"). Move push notification permission into the onboarding flow at the moment users learn about invites, where the ask makes sense. For SMS: 8club already collects the phone number for OTP. Using it for a single transactional message when the waitlist clears is a high-signal, low-cost addition worth testing.",
                },
                {
                  week: "Ongoing",
                  title: "Feed relevance and stability",
                  body: "Set up crash monitoring with release-gating. Begin work on interest-based and location-based feed scoring so what users see matches what they told 8club they care about.",
                },
              ].map((item, i) => (
                <div key={i} style={{ paddingBottom: i < 3 ? 16 : 0, borderBottom: i < 3 ? "1px solid #F0EFED" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#5B21B6",
                      background: "#F5F3FF",
                      padding: "3px 10px",
                      borderRadius: 5,
                      border: "1px solid #E0DBFF",
                      whiteSpace: "nowrap",
                    }}>
                      {item.week}
                    </span>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#111",
                    }}>
                      {item.title}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", margin: 0, paddingLeft: 2 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Analysis */}
        <section
          style={{
            padding: "24px 0",
            borderTop: "1px solid #E5E5E3",
            ...fadeIn(0.5),
          }}
        >
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 6,
            }}
          >
            Full Analysis
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#555",
              margin: "0 0 14px 0",
              lineHeight: 1.65,
            }}
          >
            These three pages contain the complete evidence and reasoning
            behind the findings above.
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
                    border: `1px solid ${isHovered ? item.accent + "88" : "#E5E5E3"}`,
                    background: isHovered ? item.accent + "08" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                    boxShadow: isHovered
                      ? `0 3px 12px ${item.accent}18`
                      : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 15,
                        fontWeight: 600,
                        color: isHovered ? item.accent : "#111",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 14,
                        color: "#666",
                        marginTop: 3,
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
                    stroke={isHovered ? item.accent : "#999"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "all 0.2s ease",
                      transform: isHovered ? "translateX(3px)" : "translateX(0)",
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: 12,
            }}
          >
            How This Was Built
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: "#444",
              maxWidth: 640,
            }}
          >
            I read every text review on both stores individually, signed up
            with a real phone number and walked through every screen, then ran
            the raw observations through AI-assisted pattern recognition to
            surface themes and cross-references across the dataset.
            The prioritisation framework and solution architectures are
            original. Everything here is built on public data and one user's
            experience. Internal metrics would refine or redirect these
            conclusions. That is expected and welcome.
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginTop: 8,
            }}
          >
            <a
              href="mailto:ankurkulkarni90@gmail.com"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#555",
                textDecoration: "none",
              }}
            >
              ankurkulkarni90@gmail.com
            </a>
            <span style={{ color: "#ccc" }}>·</span>
            <a
              href="https://github.com/ankurkulkarni90"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#555",
                textDecoration: "none",
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
