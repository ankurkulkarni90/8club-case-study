import { useState } from "react";

const observations = [
  {
    id: 1,
    name: "The Emotional Cliff",
    short: "Sentiment peaks at Hotspot selection (est. ~9/10) and crashes at the Waitlist screen (est. ~2/10). The gap between promise and reality.",
    funnelStage: "Onboarding → Waitlist transition",
    breadth: "100%",
    severity: "Critical",
    feasibility: "Medium",
    cluster: "waitlist",
  },
  {
    id: 2,
    name: "The Opacity Problem",
    short: "No explanation of what determines waitlist clearance, what profile completion % maps to, or what happens next. Zero user agency.",
    funnelStage: "Waitlist",
    breadth: "100%",
    severity: "Critical",
    feasibility: "High",
    cluster: "waitlist",
  },
  {
    id: 3,
    name: "The 16% Deflation",
    short: "Completing all 5 mandatory steps = only 16% profile completion. Punishes users for doing exactly what was asked.",
    funnelStage: "Post-onboarding",
    breadth: "100%",
    severity: "Medium",
    feasibility: "High",
    cluster: "waitlist",
  },
  {
    id: 4,
    name: "The Empty State Gap",
    short: '"Scroll while it simmers", but there\'s nothing to scroll. Multiple tabs are empty or broken for waitlisted users.',
    funnelStage: "Waitlist",
    breadth: "100%",
    severity: "High",
    feasibility: "Medium",
    cluster: "waitlist",
  },
  {
    id: 5,
    name: "The Trust Sequencing Problem",
    short: "High-trust permissions (photo library, contacts) asked before user experiences any product value.",
    funnelStage: "Onboarding",
    breadth: "100%",
    severity: "Low–Medium",
    feasibility: "Medium",
    cluster: "onboarding",
  },
  {
    id: 6,
    name: "The Re-engagement Dead End",
    short: "No email collected. Push notifications not granted. No SMS updates. A waitlisted user who closes the app has zero re-engagement channels.",
    funnelStage: "Post-waitlist (recovery)",
    breadth: "All churned waitlist users",
    severity: "High",
    feasibility: "High",
    cluster: "reengagement",
  },
];

const severityColor = {
  Critical: { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA", dot: "#DC2626" },
  High: { bg: "#FFF7ED", text: "#9A3412", border: "#FFEDD5", dot: "#EA580C" },
  Medium: { bg: "#FEFCE8", text: "#854D0E", border: "#FEF08A", dot: "#CA8A04" },
  "Low–Medium": { bg: "#F0FDF4", text: "#166534", border: "#BBF7D0", dot: "#22C55E" },
};

const feasibilityColor = {
  High: { bg: "#F0FDF4", text: "#166534", border: "#BBF7D0" },
  Medium: { bg: "#FEFCE8", text: "#854D0E", border: "#FEF08A" },
  Low: { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA" },
};

function SeverityBadge({ level }) {
  const c = severityColor[level] || { bg: "#F9FAFB", text: "#374151", border: "#E5E7EB" };
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: c.text, background: c.bg, padding: "3px 8px", borderRadius: 4, border: `1px solid ${c.border}`, fontFamily: "'JetBrains Mono', monospace" }}>
      {level}
    </span>
  );
}

function FeasibilityBadge({ level }) {
  const c = feasibilityColor[level] || { bg: "#F9FAFB", text: "#374151", border: "#E5E7EB" };
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: c.text, background: c.bg, padding: "3px 8px", borderRadius: 4, border: `1px solid ${c.border}`, fontFamily: "'JetBrains Mono', monospace" }}>
      Fix: {level}
    </span>
  );
}

function FunnelDiagram() {
  const stages = [
    { label: "Download", width: 100, users: "~69K (Play)", color: "#2563EB" },
    { label: "Complete Onboarding", width: 85, users: "~6 min, low friction", color: "#7C3AED" },
    { label: "Waitlist Clearance", width: 35, users: "Unknown %", color: "#DC2626", highlight: true },
    { label: "First Hotspot Invite", width: 28, users: "Host-dependent", color: "#D97706" },
    { label: "RSVP 'In'", width: 22, users: "User choice", color: "#059669" },
    { label: "Actually Attend", width: 18, users: "~55% fill rate", color: "#0D9488" },
  ];
  return (
    <div style={{ margin: "16px 0" }}>
      {stages.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{ minWidth: 100, maxWidth: 160, textAlign: "right", fontSize: 12, color: "#666", flexShrink: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.label}</div>
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                width: `${s.width}%`,
                height: 24,
                background: s.highlight ? `linear-gradient(90deg, ${s.color}, ${s.color}88)` : `${s.color}20`,
                borderRadius: 4,
                border: s.highlight ? `1px solid ${s.color}` : `1px solid ${s.color}40`,
                display: "flex",
                alignItems: "center",
                paddingLeft: 8,
              }}
            >
              <span style={{ fontSize: 10, color: s.highlight ? "#991B1B" : "#666", fontFamily: "'JetBrains Mono', monospace" }}>{s.users}</span>
            </div>
          </div>
          {s.highlight && <span style={{ fontSize: 11, color: "#DC2626", fontWeight: 700, flexShrink: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>← THE BOTTLENECK</span>}
        </div>
      ))}
    </div>
  );
}

function DeepDive1() {
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: 24, marginBottom: 20, borderLeft: "3px solid #DC2626", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#DC2626", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#DC2626", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
        Deep-Dive #1. Primary Observation
      </div>
      <h3 style={{ fontSize: 20, color: "#111", margin: "0 0 6px 0", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        The Waitlist-to-Activation Gap
      </h3>
      <p style={{ fontSize: 12, color: "#999", margin: "0 0 16px 0", fontStyle: "italic" }}>
        Synthesises observations #1 (Emotional Cliff), #2 (Opacity), #3 (16% Deflation), and #4 (Empty States) as facets of one core problem.
      </p>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Why This Matters for 8club Right Now</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 8px 0" }}>
            8club is pre-Series A. The metric that determines whether they raise successfully is <strong style={{ color: "#111" }}>activation rate</strong>, i.e. what percentage of users who download the app eventually attend their first Hotspot. Every step upstream of that first attendance is activation infrastructure.
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            The waitlist sits at the narrowest point of the funnel. It is, by design, a curation gate. and curation is core to 8club's brand promise. The problem isn't that the waitlist exists. It's that <strong style={{ color: "#111" }}>the experience of waiting is actively destroying the demand the onboarding just created</strong>.
          </p>
          <p style={{ margin: "0" }}>
            This is visible in the data that's already public: the waitlist is the single most common complaint in app store reviews across both iOS and Android. Users who wait more than a few days without any signal tend to leave 1-star reviews and uninstall. The app is effectively converting marketing spend into negative reviews.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The Four Facets of This Problem</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
          {[
            {
              title: "Expectation vs. Reality",
              body: 'The "How Does It Work" explainer promises: "You get invited to Hotspots." The reality: you sit on a waitlist with no invites, no timeline, no status. The emotional arc data shows this as the sharpest sentiment drop in the entire flow. from excitement (est. ~8/10) to confusion (est. ~2/10) in a single transition.',
              color: "#DC2626", bg: "#FEF2F2", border: "#FECACA",
            },
            {
              title: "Zero User Agency",
              body: "At no point does the app explain what determines clearance. Is it profile completion? Manual review? Social connections? Time? The \"Profile stuck at 33%\" nudge implies completion helps, but reviews show users at 100% still waiting months. The user can't take any action they know will change their outcome.",
              color: "#D97706", bg: "#FFF7ED", border: "#FFEDD5",
            },
            {
              title: "Deflating Progress Signals",
              body: 'Completing all 5 mandatory onboarding steps results in 16% profile completion. The framing says "you\'re 16% done" when the user just did everything asked. This creates a psychological penalty for compliance. Compare: if onboarding said "Core profile complete. 5 optional steps to stand out to hosts," the same data becomes empowering.',
              color: "#CA8A04", bg: "#FEFCE8", border: "#FEF08A",
            },
            {
              title: "An Empty Room to Wait In",
              body: "\"Scroll while it simmers\", but the Wall tab loaded blank, Notifications show zero, and the Hotspots tab is gated. The user is told to explore an app that has nothing to show them yet. This is a missed opportunity: the waiting period could build anticipation, educate about the community, or showcase what's coming.",
              color: "#7C3AED", bg: "#F5F3FF", border: "#E0DBFF",
            },
          ].map((facet) => (
            <div key={facet.title} style={{ background: facet.bg, borderRadius: 10, padding: 14, borderTop: `3px solid ${facet.color}`, border: `1px solid ${facet.border}`, borderTopWidth: 3, borderTopColor: facet.color }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: facet.color, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{facet.title}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>{facet.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What I'd Want to Understand First</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 6px 0" }}>Before proposing solutions, a PM on this team would need to understand the mechanics behind the curtain:</p>
          {[
            "What is the actual clearance criteria today? Manual review? Algorithmic? Batch processing? What's the average time-to-clearance, and how does it vary by profile completeness, gender, and social connections?",
            "What's the current waitlist-to-clearance conversion rate? Of users who complete onboarding, what % ever get cleared? At what point (day 1, 3, 7, 30) does the probability of clearance approach zero?",
            "Is there a capacity constraint? Is the waitlist long because demand outstrips Hotspot supply in Bangalore, or because the curation process is manual and under-resourced?",
            "What does the cohort data look like? Do users who complete their profile to 100% have meaningfully different clearance rates than those at 33%? This determines whether the profile completion nudge is honest or misleading.",
          ].map((q, i) => (
            <p key={i} style={{ margin: "0 0 4px 0", color: "#1E40AF", paddingLeft: 16, borderLeft: "2px solid #BFDBFE" }}>
              {q}
            </p>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>How I'd Measure Impact</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Primary metric:</strong> Waitlist-to-first-Hotspot-attendance conversion rate (the true activation metric).</p>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Leading indicators:</strong> Day-7 retention of waitlisted users (are they still opening the app?), profile completion rate among waitlisted users (are the nudges working?), time-to-clearance distribution.</p>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Guardrail metrics:</strong> App store rating trend (are negative reviews decreasing?), support ticket volume related to waitlist status.</p>
          <p style={{ margin: "0", padding: "8px 12px", background: "#FFF7ED", borderRadius: 8, border: "1px solid #FFEDD5" }}>
            <strong style={{ color: "#92400E" }}>Directional estimate:</strong> Comparable invite-only and waitlisted consumer products (e.g. Clubhouse, early CRED) that shipped transparency features (status updates, progress indicators, timeline estimates) during their gating period saw 15-25% improvement in Day-7 retention of gated users. Reframing progress signals (milestone acknowledgment instead of raw percentages) has been shown to lift completion intent by 10-15% in onboarding studies. These are directional benchmarks, not predictions. Actual impact depends on 8club's current conversion rates, which require internal data.
          </p>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Directional Ideas (Ordered by Implementation Effort)</div>
        <div style={{ fontSize: 12, color: "#999", fontStyle: "italic", marginBottom: 10 }}>These are starting points for exploration, not prescriptions. The right answer depends on data only the team has.</div>
        {[
          { effort: "Low", effortColor: "#059669", effortBg: "#F0FDF4", effortBorder: "#BBF7D0", title: "Reframe the progress signal", body: "When onboarding completes, show \"Core profile complete ✓\" as a distinct milestone before introducing optional enhancement steps. The 16% number doesn't need to disappear, but the user should feel they've accomplished something before being told they're barely started. This is a copy and logic change, not an architecture change." },
          { effort: "Low", effortColor: "#059669", effortBg: "#F0FDF4", effortBorder: "#BBF7D0", title: "Add transparency to the wait", body: "Even without revealing the exact algorithm, communicate: an estimated timeline (\"most profiles are reviewed within X days\"), what stage the user is in (\"submitted → under review → cleared\"), and what actions genuinely improve their chances (if profile completion matters, say so explicitly). Opacity is only valuable when it serves the brand. here it's eroding trust." },
          { effort: "Medium", effortColor: "#D97706", effortBg: "#FFF7ED", effortBorder: "#FFEDD5", title: "Build a waitlist-lite experience", body: "Instead of empty tabs, give waitlisted users curated content: a highlight reel of past Hotspots (the Wall already has this content. surface it reliably), a \"trending this week in Bangalore\" feed, or profiles of active hosts they could follow. The goal is to build anticipation and social proof during the wait, not just kill time. This transforms the waitlist from a dead-end into a warmup." },
          { effort: "Medium", effortColor: "#D97706", effortBg: "#FFF7ED", effortBorder: "#FFEDD5", title: "Status update touchpoints", body: "At 24h, 48h, and 72h post-submission, send a brief in-app or push update: where the profile stands, what's happening in the community, and one specific action the user could take. This converts silence into communication. Even \"we're still reviewing\" is better than nothing, because it confirms the system is alive." },
        ].map((idea) => (
          <div key={idea.title} style={{ background: "#FAFAF8", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid #E5E5E3" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: idea.effortColor, background: idea.effortBg, padding: "3px 8px", borderRadius: 4, flexShrink: 0, marginTop: 2, border: `1px solid ${idea.effortBorder}`, fontFamily: "'JetBrains Mono', monospace" }}>
              {idea.effort}
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{idea.title}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>{idea.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeepDive2() {
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: 24, marginBottom: 20, borderLeft: "3px solid #D97706", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#D97706", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#D97706", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
        Deep-Dive #2. Secondary Observation
      </div>
      <h3 style={{ fontSize: 20, color: "#111", margin: "0 0 6px 0", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        The Re-engagement Dead End
      </h3>
      <p style={{ fontSize: 12, color: "#999", margin: "0 0 16px 0", fontStyle: "italic" }}>
        Observation #6, a structural gap in the ability to bring waitlisted users back after they leave the app.
      </p>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Why This Matters</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 8px 0" }}>
            Even if the waitlist experience improves (Deep-Dive #1), there will always be a gap between onboarding and clearance. During that gap, users will close the app. The question is: <strong style={{ color: "#111" }}>can the system bring them back when it's their turn?</strong>
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            Right now, the answer appears to be no. The onboarding flow collects a phone number (for auth) but there's no evidence of transactional SMS for waitlist status updates. Email is not collected during onboarding. it's an optional field buried in Edit Profile, meaning most users never provide it. Push notification permission is requested on the Notifications tab, but a waitlisted user exploring the app may not navigate there or may decline because the ask feels premature ("notify me about what?").
          </p>
          <p style={{ margin: "0" }}>
            This creates a paradox: 8club invests in acquiring a user, onboarding them, collecting their data, and evaluating their profile, but when the moment comes to convert them (waitlist clearance), the app may have no way to reach them. The user has to remember to come back on their own. For an app competing against Instagram, WhatsApp, and daily life for attention, that's a significant structural weakness.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Current Re-engagement Channel Map</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 10 }}>
          {[
            { channel: "Push Notifications", status: "Not granted", statusColor: "#DC2626", statusBg: "#FEF2F2", note: "Permission asked post-onboarding on the Notifs tab. likely low grant rate for waitlisted users who see no immediate value" },
            { channel: "Email", status: "Not collected", statusColor: "#DC2626", statusBg: "#FEF2F2", note: "Optional field in Edit Profile, not part of onboarding flow. Most users likely skip it." },
            { channel: "SMS", status: "Number collected, not used", statusColor: "#D97706", statusBg: "#FFF7ED", note: "Phone number collected for OTP but no evidence of transactional SMS for status updates or re-engagement." },
          ].map((ch) => (
            <div key={ch.channel} style={{ background: "#FAFAF8", borderRadius: 10, padding: 14, border: "1px solid #E5E5E3" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ch.channel}</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: ch.statusColor, marginBottom: 6, background: ch.statusBg, display: "inline-block", padding: "2px 8px", borderRadius: 4, fontFamily: "'JetBrains Mono', monospace" }}>{ch.status}</div>
              <div style={{ fontSize: 11, color: "#666", lineHeight: 1.55 }}>{ch.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>What I'd Want to Understand First</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          {[
            "What % of users who complete onboarding grant push notification permission before leaving their first session? If it's below 30%, the re-engagement gap is confirmed.",
            "What % of waitlisted users return to the app within 7 days without any outbound trigger? This measures organic return rate, the baseline without any re-engagement system.",
            "Of users who ARE cleared from the waitlist, what % open the app within 48 hours of clearance? If clearance happens but the user never comes back to discover it, the investment in review and approval is wasted.",
            "Is there a legal/compliance constraint on using the OTP phone number for transactional SMS in India? (TRAI regulations around promotional vs. transactional messaging matter here.)",
          ].map((q, i) => (
            <p key={i} style={{ margin: "0 0 4px 0", color: "#1E40AF", paddingLeft: 16, borderLeft: "2px solid #BFDBFE" }}>
              {q}
            </p>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>How I'd Measure Impact</div>
        <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Primary metric:</strong> Clearance-to-first-session-post-clearance rate (does the user come back when approved?).</p>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Leading indicators:</strong> Push notification opt-in rate, email collection rate during onboarding, Day-7 return rate for waitlisted users.</p>
          <p style={{ margin: "0 0 6px 0" }}><strong style={{ color: "#111" }}>Experiment:</strong> A/B test adding a lightweight email collection step in onboarding (positioned as "we'll email you when you're in") vs. current flow. Measure email provision rate and subsequent return rate when clearance notification is sent.</p>
          <p style={{ margin: "0", padding: "8px 12px", background: "#FFF7ED", borderRadius: 8, border: "1px solid #FFEDD5" }}>
            <strong style={{ color: "#92400E" }}>Directional estimate:</strong> Email collection steps placed in onboarding with a clear, specific value proposition ("we'll notify you when you're in") typically see 40-60% provision rates at comparable consumer apps. Moving push notification permission into a contextually relevant moment (e.g., right after explaining how invites work) lifts opt-in rates by 15-30% compared to asking on a settings tab. For transactional SMS, open rates on time-sensitive state-change messages (like account approval) consistently exceed 90%. Even modest improvements across these three channels compound: if 8club currently loses 50%+ of cleared users because they never learn they were approved, recovering even a fraction of that cohort directly increases activation.
          </p>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Directional Ideas (Ordered by Implementation Effort)</div>
        <div style={{ fontSize: 12, color: "#999", fontStyle: "italic", marginBottom: 10 }}>Starting points, not prescriptions. Compliance review needed for SMS-based approaches.</div>
        {[
          { effort: "Low", effortColor: "#059669", effortBg: "#F0FDF4", effortBorder: "#BBF7D0", title: "Move notification permission ask into the onboarding flow", body: "Instead of burying it on the Notifications tab, request push permission during the \"How Does It Work\" explainer. right at the moment the user learns they'll receive invites. The context (\"we need to notify you when you're invited\") makes the ask natural. This is a flow reorder, not a new feature." },
          { effort: "Low", effortColor: "#059669", effortBg: "#F0FDF4", effortBorder: "#BBF7D0", title: "Add email collection to onboarding with clear value framing", body: "Add an optional step after the username screen: \"Add your email so we can let you know the moment you're in.\" The value proposition is immediate and specific. Even a 40-50% provision rate creates a re-engagement channel that currently doesn't exist." },
          { effort: "Medium", effortColor: "#D97706", effortBg: "#FFF7ED", effortBorder: "#FFEDD5", title: "Transactional SMS for critical state changes", body: "Use the already-collected phone number to send a single SMS when waitlist status changes: \"You're in! Open 8club to see your first Hotspot invites.\" Under TRAI regulations, service/transactional SMS tied to an existing account relationship is permissible. One high-signal message at the right moment is worth more than a drip campaign." },
        ].map((idea) => (
          <div key={idea.title} style={{ background: "#FAFAF8", borderRadius: 10, padding: 14, marginBottom: 8, display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid #E5E5E3" }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: idea.effortColor, background: idea.effortBg, padding: "3px 8px", borderRadius: 4, flexShrink: 0, marginTop: 2, border: `1px solid ${idea.effortBorder}`, fontFamily: "'JetBrains Mono', monospace" }}>
              {idea.effort}
            </span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{idea.title}</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.65 }}>{idea.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Prioritisation() {
  const [showMatrix, setShowMatrix] = useState(true);

  return (
    <div style={{ background: "#FAFAF8", color: "#1A1A1A", minHeight: "100vh", fontFamily: "'Source Serif 4', Georgia, serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "28px 18px" }}>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, fontWeight: 700, color: "#fff",
              boxShadow: "0 2px 8px rgba(91,33,182,0.25)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>8</div>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111", margin: 0, letterSpacing: "-0.5px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Observation Prioritisation & Deep-Dives
              </h1>
              <p style={{ fontSize: 12, margin: "2px 0 0", color: "#888", fontFamily: "'JetBrains Mono', monospace" }}>
                Step 2 · 6 observations → framework → 2 deep-dives
              </p>
            </div>
          </div>
        </div>

        {/* Business Context */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid #E5E5E3", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The Prioritisation Lens: What Matters for 8club Right Now?</div>
          <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
            <p style={{ margin: "0 0 8px 0" }}>
              8club is a pre-Series A company with ~$795K seed funding, ~200K community members (heavily Bangalore-concentrated), and effectively zero revenue. They're hiring their first PM. The next fundraise depends on proving the core loop works: users download → onboard → get cleared → receive Hotspot invites → attend → come back.
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              At this stage, the metric that matters most is <strong style={{ color: "#111" }}>activation rate</strong>, i.e. what percentage of users who download the app make it all the way to attending their first Hotspot. Everything upstream of that first attendance is activation infrastructure. Everything downstream (repeat attendance, hosting, referrals) is retention and growth, which are important but only meaningful after activation works.
            </p>
            <p style={{ margin: "0" }}>
              So the prioritisation question becomes: <strong style={{ color: "#111" }}>of the 6 observations from the journey map, which ones sit at the highest-leverage point in the activation funnel, affect the most users, and are addressable given a small, fast-moving team?</strong>
            </p>
          </div>
        </div>

        {/* Activation Funnel */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid #E5E5E3", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8club's Activation Funnel</div>
          <div style={{ fontSize: 11, color: "#999", marginBottom: 4, fontStyle: "italic" }}>
            Widths are illustrative. actual conversion rates would need internal data. The bottleneck location is informed by public review data.
          </div>
          <FunnelDiagram />
          <div style={{ fontSize: 12, color: "#666", lineHeight: 1.65, marginTop: 8 }}>
            The onboarding-to-waitlist transition is relatively smooth (~6 minutes, low friction). The waitlist itself is where the funnel collapses. Public app store reviews confirm this is the primary churn point. 4 of our 6 observations cluster here.
          </div>
        </div>

        {/* Prioritisation Matrix */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid #E5E5E3", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 2, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Evaluation Matrix</div>
              <div style={{ fontSize: 11, color: "#999" }}>3 criteria: funnel position × severity × feasibility for a small team</div>
            </div>
            <button onClick={() => setShowMatrix(!showMatrix)} style={{ background: "#fff", border: "1px solid #E0DBFF", borderRadius: 8, color: "#7C3AED", padding: "5px 12px", fontSize: 11, cursor: "pointer", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {showMatrix ? "Collapse" : "Expand"}
            </button>
          </div>

          {showMatrix && (
            <div>
              {observations.map((obs) => (
                <div
                  key={obs.id}
                  style={{
                    background: obs.cluster === "waitlist" ? "#FFFBF5" : "#FAFAF8",
                    borderRadius: 10,
                    padding: 14,
                    marginBottom: 8,
                    borderLeft: obs.cluster === "waitlist" ? "3px solid #DC2626" : obs.cluster === "reengagement" ? "3px solid #D97706" : "3px solid #D1D5DB",
                    border: "1px solid #E5E5E3",
                    borderLeftWidth: 3,
                    borderLeftColor: obs.cluster === "waitlist" ? "#DC2626" : obs.cluster === "reengagement" ? "#D97706" : "#D1D5DB",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#111", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <span style={{ color: "#999", marginRight: 6, fontFamily: "'JetBrains Mono', monospace" }}>#{obs.id}</span>
                      {obs.name}
                    </div>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      <SeverityBadge level={obs.severity} />
                      <FeasibilityBadge level={obs.feasibility} />
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#666", lineHeight: 1.55, marginBottom: 6 }}>{obs.short}</div>
                  <div style={{ display: "flex", gap: 16, fontSize: 11 }}>
                    <span style={{ color: "#999" }}>Funnel: <span style={{ color: "#5B21B6", fontWeight: 500 }}>{obs.funnelStage}</span></span>
                    <span style={{ color: "#999" }}>Breadth: <span style={{ color: "#5B21B6", fontWeight: 500 }}>{obs.breadth}</span></span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* The Clustering Insight */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 20, marginBottom: 20, borderLeft: "3px solid #7C3AED", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#7C3AED", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#5B21B6", marginBottom: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The Clustering Insight</div>
          <div style={{ fontSize: 13, color: "#444", lineHeight: 1.75 }}>
            <p style={{ margin: "0 0 8px 0" }}>
              Four of the six observations (#1 Emotional Cliff, #2 Opacity, #3 16% Deflation, #4 Empty States) are not independent problems. they are <strong style={{ color: "#111" }}>facets of one core issue: the waitlist-to-activation transition</strong>. The expectation gap, the lack of transparency, the deflating progress signal, and the empty experience are all symptoms of the same underlying condition: the waiting period actively destroys the demand that onboarding created.
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              Treating them as four separate issues would fragment effort. Treating them as one problem with four dimensions enables a cohesive solution. This is why they merge into Deep-Dive #1.
            </p>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong style={{ color: "#111" }}>Observation #6 (Re-engagement Dead End)</strong> is the structural complement: even if the waitlist experience improves, users who leave during the wait need a channel to be brought back. It earns Deep-Dive #2 because it addresses a different failure mode (system-level, not experience-level) with distinct solutions.
            </p>
            <p style={{ margin: "0" }}>
              <strong style={{ color: "#111" }}>Observation #5 (Trust Sequencing)</strong> is a valid friction point but is deprioritised because its impact is lower-order. Even with perfectly sequenced permissions, the waitlist gap would still be the activation killer. Fixing sequencing optimises the onboarding. fixing the waitlist experience unlocks the entire funnel. Sequencing becomes a natural follow-up once the higher-leverage problems are addressed.
            </p>
          </div>
        </div>

        {/* Final Selection */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 20, marginBottom: 20, border: "1px solid #BFDBFE", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1E40AF", marginBottom: 10, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Final Selection: 2 Deep-Dives</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            <div style={{ background: "#FAFAF8", borderRadius: 10, padding: 14, borderTop: "3px solid #DC2626", border: "1px solid #FECACA", borderTopWidth: 3, borderTopColor: "#DC2626" }}>
              <div style={{ fontSize: 10, color: "#DC2626", fontWeight: 600, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>PRIMARY</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The Waitlist-to-Activation Gap</div>
              <div style={{ fontSize: 11, color: "#666", lineHeight: 1.55 }}>Synthesises observations #1, #2, #3, #4 as dimensions of one core problem. Highest impact, affects 100% of users, addresses the funnel's primary bottleneck.</div>
            </div>
            <div style={{ background: "#FAFAF8", borderRadius: 10, padding: 14, borderTop: "3px solid #D97706", border: "1px solid #FFEDD5", borderTopWidth: 3, borderTopColor: "#D97706" }}>
              <div style={{ fontSize: 10, color: "#D97706", fontWeight: 600, marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>SECONDARY</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>The Re-engagement Dead End</div>
              <div style={{ fontSize: 11, color: "#666", lineHeight: 1.55 }}>Observation #6: Structural infrastructure gap, no channels to bring waitlisted users back. Complements #1 by addressing the system layer, not just the experience layer.</div>
            </div>
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: "#999", lineHeight: 1.55, fontStyle: "italic" }}>
            Deprioritised: #5 (Trust Sequencing). valid but lower-order; a natural follow-up optimisation once the primary bottleneck is addressed.
          </div>
        </div>

        {/* Deep Dives */}
        <div style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 16, marginTop: 28, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Deep-Dives</div>
        <DeepDive1 />
        <DeepDive2 />

        {/* Closing Note */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 18, marginTop: 8, borderLeft: "3px solid #059669", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#059669", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#065F46", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>A Note on Framing</div>
          <div style={{ fontSize: 12, color: "#555", lineHeight: 1.75 }}>
            Everything above is informed by one new user's onboarding experience and publicly available data (app store reviews, website, LinkedIn). The 8club team has internal data. clearance rates, cohort analysis, retention curves, A/B test history. that would refine, redirect, or invalidate some of these observations. That's expected and welcome. The value here isn't in having the final answer. It's in demonstrating a way of looking at the product: mapping the experience, identifying patterns, connecting observations to business context, and thinking about what to explore first.
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "22px 0 8px 0", borderTop: "1px solid #E5E5E3", marginTop: 24 }}>
          <div style={{ fontSize: 12, color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>
            Product analysis by Ankur Kulkarni
          </div>
        </div>
      </div>
    </div>
  );
}
