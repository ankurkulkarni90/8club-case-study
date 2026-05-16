import { useState } from "react";

const reviewData = {
  summary: {
    playStore: { rating: 4.5, totalReviews: 197, source: "Google Play Store" },
    appStore: { rating: 4.8, totalReviews: 244, source: "Apple App Store" },
  },
  categories: [
    {
      id: "crashes",
      label: "App Crashes / Won't Open",
      icon: "💥",
      severity: "critical",
      count: 9,
      stores: "Both",
      reviews: [
        { user: "harsh bafna", rating: 1, store: "Play", date: "25 Dec 2025", text: "App crashes every few seconds leave aside minutes, search is impossible as keyboard disappears in a flash." },
        { user: "Abhinav", rating: 1, store: "Play", date: "16 Jan 2026", text: "App is constantly crashing, can't use it at all." },
        { user: "Sathya Narayan", rating: 1, store: "Play", date: "5 Dec 2025", text: "App is not opening after phone number registration." },
        { user: "Harsh Yadav", rating: 1, store: "Play", date: "26 Nov 2025", text: "App is not starting after phone number registration just stuck on 8 symbol." },
        { user: "AKASH BISWAS", rating: 1, store: "Play", date: "14 Dec 2025", text: "App is not working." },
        { user: "Sandeep Kataria", rating: 1, store: "Play", date: "19 Dec 2025", text: "Keeps crashing." },
        { user: "Anil Reddy", rating: 1, store: "Play", date: "25 Dec 2025", text: "Lagging always." },
        { user: "SaviorofProducts", rating: 1, store: "iOS", date: "~1y ago", text: "App doesn't seem to open." },
        { user: "Sathyamoorthy Iyer", rating: 4, store: "Play", date: "21 Dec 2025", text: "It's shutting down in one minute. Now the main page has 502 error.", note: "Rated 4★ overall but still reported a critical stability issue — even satisfied users hit crashes." },
      ],
      insight: "Crash cluster concentrated in Nov–Dec 2025, suggesting a bad release. 8club's Feb 2026 batch reply confirms they fixed it. But the damage — 9 reviews across both stores, some with 7–10 'helpful' votes — left a lasting rating scar.",
      pmAction: "Implement crash monitoring (Sentry/Firebase Crashlytics) with release-gating: if crash rate exceeds threshold in first 24h, auto-rollback. Add a staged rollout (10% → 50% → 100%) to catch regressions before full deployment."
    },
    {
      id: "waitlist",
      label: "Waitlist Frustration / No Activity",
      icon: "⏳",
      severity: "critical",
      count: 8,
      stores: "Both",
      reviews: [
        { user: "indrajit koner", rating: 1, store: "Play", date: "4 Mar 2025", text: "Have been on the waitlist for a month now. I don't know whether it even works. Or there are only certain types of people allowed in this club. Rating scale stops at 1, I would have given it a -8." },
        { user: "Roshan.Rp", rating: 1, store: "iOS", date: "~1y ago", text: "No activity on app even on profile completion on waitlist for more than 2 months." },
        { user: "sinhashashank", rating: 1, store: "iOS", date: "~1y ago", text: "Female profile acceptance is very quick vs male profiles." },
        { user: "Yadhuf8", rating: 1, store: "iOS", date: "~1y ago", text: "It's been more than 2 months. I got no engagement in the app even after completing the profile." },
        { user: "Blackjack1199", rating: 2, store: "iOS", date: "~1y ago", text: "Just been on the waitlist for a long time!!" },
        { user: "Dhruvil Prajapati", rating: 3, store: "Play", date: "4 Feb 2025", text: "Profile is submitted but it takes too long to get approval." },
        { user: "John Flynn", rating: 3, store: "Play", date: "2 Mar 2025", text: "App looks great. But too much time to approve my profile. Still on the waiting list." },
        { user: "vaishnnnnavi", rating: 1, store: "iOS", date: "1 Mar", text: "I'm not getting any invite." },
      ],
      insight: "The single most damaging pattern. 8club's curation-by-waitlist model creates a cold-start trap: users download → complete profile → wait weeks/months → churn with a 1★ review. The gender bias callout (\"female acceptance is very quick vs male\") is a perception problem that could become a PR problem. The canned waitlist responses (identical across 4+ reviews) feel robotic.",
      pmAction: "Three-pronged fix: (1) Set a maximum waitlist SLA (e.g. 72h) with status updates at 24h, 48h, and 72h — silence is what kills trust. (2) Create a 'waitlist-lite' experience: let waitlisted users browse public hotspots, see social proof, and build anticipation rather than staring at a dead screen. (3) Replace the copy-paste dev response with personalized, specific messaging."
    },
    {
      id: "discovery",
      label: "No Filtering / Discovery Broken",
      icon: "🔍",
      severity: "high",
      count: 7,
      stores: "Both",
      reviews: [
        { user: "arnav ajey", rating: 1, store: "Play", date: "26 Feb 2026", text: "No exclusivity. UI extremely cluttered. Events by Blocked Users still displayed. No date filtering. No city based filtering." },
        { user: "AKshat Soni", rating: 1, store: "Play", date: "4 Dec 2025", text: "No search feature, no city selection feature, profile panel is awful, no address button to show where the event is." },
        { user: "IshaanGoyal", rating: 2, store: "iOS", date: "23 Nov", text: "No option to filter by location. Why would I be interested in a party happening 2000km away." },
        { user: "lowkey.aditt", rating: 1, store: "iOS", date: "18 Nov", text: "The app and the concept is great but it's only Bangalore." },
        { user: "Bharat", rating: 3, store: "Play", date: "10 Dec 2025", text: "There NEEDS to be a Map to see hotspots near you." },
        { user: "aaxthaa", rating: 4, store: "iOS", date: "9 Jun", text: "Could you maybe consider adding an 'Explore Hotspots' page? Maybe integrate it in the wall?" },
        { user: "Daksh S Jain", rating: 2, store: "Play", date: "21 Apr 2026", text: "Many apps already in market. Random people create events which don't even get accepted." },
      ],
      insight: "Users are literally asking for the 'live map' that 8club's own marketing promises but hasn't shipped. The lack of city-based filtering for a product expanding beyond Bangalore is a fundamental gap. Showing events 2000km away destroys relevance. Blocked-user events still appearing signals basic moderation gaps.",
      pmAction: "Ship location-based filtering and map view as P0. This is the most requested feature across both stores and aligns with 8club's own stated vision. City selector on onboarding, distance-based sort on feed, and a map tab are table stakes."
    },
    {
      id: "keyboard",
      label: "Keyboard / Input Glitches",
      icon: "⌨️",
      severity: "high",
      count: 3,
      stores: "Both",
      reviews: [
        { user: "harsh bafna", rating: 1, store: "Play", date: "25 Dec 2025", text: "Search is impossible as keyboard disappears in a flash." },
        { user: "Richie", rating: 1, store: "Play", date: "25 Jan 2026", text: "Keyboard don't work." },
        { user: "Md Tajdar Alam Ansari", rating: 2, store: "Play", date: "22 Nov 2025", text: "Please fix the keyboard issue... it glitches a lot." },
      ],
      insight: "A Flutter-specific input handling bug that persisted for months. Likely related to Flutter's known issues with text field focus management on certain Android devices. 8club claims it's fixed as of Feb 2026.",
      pmAction: "Regression test keyboard behavior across top 20 Android devices by market share before every release. Add automated UI tests for search/chat input flows."
    },
    {
      id: "pricing",
      label: "Pricing / Value Mismatch",
      icon: "💸",
      severity: "medium",
      count: 3,
      stores: "Both",
      reviews: [
        { user: "Shailesh Kumar Singh", rating: 2, store: "Play", date: "15 Nov 2025", text: "For nightclubs what's the point of the invite/guestlist when the entry charges + cover are higher than BookMyShow." },
        { user: "Ayush Borse", rating: 4, store: "Play", date: "16 Mar 2026", text: "What do you mean payment meta is required for the action when I try to accept an invite?" },
        { user: "gdjeh009", rating: 1, store: "iOS", date: "22 Feb", text: "Pay for your lust. Destroy your life with this lust." },
      ],
      insight: "The pricing complaint is strategic: if 8club charges more than BookMyShow for the same nightclub, the 'exclusivity' premium must be visibly justified through curation, crowd quality, and experience — not just a guestlist label. The payment error is a conversion-killer at the most critical funnel step.",
      pmAction: "Audit pricing against BookMyShow/Insider for overlapping venues. Make the value delta visible: show crowd composition, past event photos, host credibility. Fix the payment metadata error immediately — it's blocking conversions."
    },
    {
      id: "exclusivity",
      label: "Exclusivity / Crowd Quality",
      icon: "👥",
      severity: "medium",
      count: 4,
      stores: "Both",
      reviews: [
        { user: "arnav ajey", rating: 1, store: "Play", date: "26 Feb 2026", text: "No exclusivity." },
        { user: "Yashdeep Sahu", rating: 1, store: "Play", date: "20 Jan 2026", text: "The users aren't good. If you're looking for something to explore this app doesn't provide it." },
        { user: "Irine Reviews", rating: 2, store: "Play", date: "30 May 2025", text: "Admin accepts only models or rich-looking people. They check your pics, features and background. But the invitation is open for girls." },
        { user: "Aditya", rating: 1, store: "Play", date: "5 Mar 2026", text: "Never got invited to any hotspots 😆" },
      ],
      insight: "A tension at the heart of the model: users who get in say 'no exclusivity,' users who don't say it's discriminatory. The perception of looks-based or gender-biased selection is a trust and brand risk. Meanwhile, users who do get in find the crowd quality doesn't match the 'exclusive' promise.",
      pmAction: "Reframe curation around interests and verified social proof rather than appearance. Publish transparent community guidelines for host selection. Track and report gender ratios to ensure balance. The 'exclusive' brand must be earned through experience quality, not gatekeeping."
    },
    {
      id: "support",
      label: "Customer Support / Communication",
      icon: "📞",
      severity: "medium",
      count: 3,
      stores: "Both",
      reviews: [
        { user: "j_1610", rating: 1, store: "iOS", date: "24 May", text: "You keep on texting them for a query, no one responds. Very unprofessional." },
        { user: "Shivanshu Gupta", rating: 1, store: "Play", date: "22 Jan 2026", text: "Account delete option is not working." },
        { user: "Meghansh Talreja", rating: 1, store: "Play", date: "19 Jul 2025", text: "It's a fake application." },
      ],
      insight: "Unresponsive support erodes trust fast, especially for an 'exclusive' brand. The account deletion failure is also a GDPR/privacy compliance risk. 8club's batch reply on 25 Feb 2026 (responding to months-old reviews simultaneously) screams 'we forgot about review management until someone remembered.'",
      pmAction: "Set up review monitoring with 48h response SLA. Automate account deletion flow per app store requirements. Consider in-app support chat to reduce friction."
    },
    {
      id: "ux",
      label: "UX / Profile / Photo Management",
      icon: "🎨",
      severity: "medium",
      count: 4,
      stores: "Both",
      reviews: [
        { user: "AKshat Soni", rating: 1, store: "Play", date: "4 Dec 2025", text: "Very wrong UI. Some noob Gen Z kid designed their UI just to make it look good, nothing else is right. Profile panel is awful." },
        { user: "nirnejak", rating: 3, store: "iOS", date: "31 Jul", text: "No way to double check photos you've added for an event. If you accidentally selected wrong photos, there's no option to delete them." },
        { user: "Adam9918", rating: 5, store: "iOS", date: "~1y ago", text: "Amazing UI but need profile editing option as I want to change photos that are uploaded." },
        { user: "taanishkaa", rating: 1, store: "iOS", date: "11 Jul", text: "WAY TOO MANY frequent updates!!!!!!!! It's very very irritating." },
      ],
      insight: "The photo management complaints are consistent: users can't edit/delete photos after upload for both profiles and events. This is a basic CRUD gap. The 'too many updates' complaint reflects the aggressive 1–2 week release cycle — good for iteration, bad for user patience. The UI polarizes: some love it, some find it form-over-function.",
      pmAction: "Ship photo edit/delete for profiles and events. Consider silent updates or batched releases to reduce update fatigue. Run a UX audit focused on information architecture — pretty UI that's hard to navigate is worse than plain UI that works."
    },
    {
      id: "geo",
      label: "Geographic Limitation",
      icon: "📍",
      severity: "high",
      count: 3,
      stores: "Both",
      reviews: [
        { user: "lowkey.aditt", rating: 1, store: "iOS", date: "18 Nov", text: "The app and the concept is great but it's only Bangalore." },
        { user: "Mohito Cloud", rating: 1, store: "Play", date: "4 Sep 2025", text: "Hey, is this available in Pune also?" },
        { user: "IshaanGoyal", rating: 2, store: "iOS", date: "23 Nov", text: "No option to filter by location. Party happening 2000km away." },
      ],
      insight: "8club claims to be 'serviceable across India' but user experience tells a different story. Non-Bangalore users see irrelevant content. The SOP-licensing expansion model may be creating supply in new cities but the app doesn't surface it effectively.",
      pmAction: "City-first onboarding: ask users their city upfront and filter the entire feed. Only show the 'all-India' view as an opt-in exploration mode. For cities with no active hotspots, show a 'coming soon' state with a referral incentive rather than an empty feed."
    },
  ],
  positives: [
    {
      id: "experience",
      label: "Event Experience & Vibe",
      icon: "🎉",
      reviews: [
        { user: "Raushan Pramod", rating: 5, store: "Play", date: "10 Feb 2026", text: "Smooth interface, great maneuver in the segment, brilliant team. There's no place to be when 8club's throwing a party!" },
        { user: "Pratik Mandapati", rating: 5, store: "Play", date: "19 Jul 2025", text: "Bastian parties are lit! No local crowd so no hassle of fights. Great experience overall!" },
        { user: "VIJAY BAHADUR YADAV", rating: 5, store: "Play", date: "30 Jan 2026", text: "Very good experience, great vibe to explore." },
        { user: "Poovanna Palandira", rating: 5, store: "Play", date: "23 Sep 2025", text: "Very nice app for getting exclusive invites for hassle-free entry into premium nightclub." },
        { user: "sourupp", rating: 5, store: "iOS", date: "8 Aug", text: "Got invited to more than 50 events. Cafe raves, parties, fake shadi. Going out couldn't have been more fun." },
        { user: "ahmer.19", rating: 5, store: "iOS", date: "8 Aug", text: "I don't have to worry about planning my weekends anymore because of 8club." },
        { user: "Lobzu", rating: 5, store: "iOS", date: "10 Aug", text: "Nice to see Bangalore make a change for the better with exclusive IPs and events." },
      ],
      insight: "When 8club works, users love it. The emotional payoff — 'I don't have to worry about planning my weekends' — is exactly the magic moment. Bastian parties, fake shaadi, cafe raves are named as highlights. 'No local crowd, no fights' is the exclusivity value proposition landing."
    },
    {
      id: "concept",
      label: "Concept & Vision",
      icon: "💡",
      reviews: [
        { user: "Zedd Yexx", rating: 4, store: "Play", date: "14 Feb 2026", text: "Great app to connect and host parties in town. Great initiative. Attended their recent party at Bastian, absolutely banger night." },
        { user: "URMILA YADAV", rating: 5, store: "Play", date: "14 Oct 2025", text: "New concept, nice app." },
        { user: "Priyanshu Mallick", rating: 5, store: "Play", date: "13 Mar 2025", text: "Great app to get and send invitations." },
      ],
      insight: "Even critics acknowledge the idea is strong. Multiple 1★ reviews start with 'great concept but...' — the vision resonates, the execution gap is what's hurting."
    },
  ],
};

const severityColor = {
  critical: { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA", dot: "#DC2626", light: "#FFF5F5" },
  high: { bg: "#FFF7ED", text: "#9A3412", border: "#FFEDD5", dot: "#EA580C", light: "#FFFAF5" },
  medium: { bg: "#FEFCE8", text: "#854D0E", border: "#FEF08A", dot: "#CA8A04", light: "#FEFDF5" },
};

const ratingBorder = (r) => r <= 2 ? "#F87171" : r <= 3 ? "#FBBF24" : "#34D399";

export default function ReviewAnalysis() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const totalNegReviews = reviewData.categories.reduce((sum, c) => sum + c.count, 0);
  const criticalCount = reviewData.categories.filter(c => c.severity === "critical").reduce((s, c) => s + c.count, 0);

  const sorted = [...reviewData.categories].sort((a, b) => {
    const sev = { critical: 3, high: 2, medium: 1 };
    return (sev[b.severity] * b.count) - (sev[a.severity] * a.count);
  });

  return (
    <div style={{ fontFamily: "'Source Serif 4', 'Georgia', serif", background: "#FAFAF8", color: "#1A1A1A", minHeight: "100vh", padding: "28px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 11,
            background: "linear-gradient(135deg, #5B21B6, #7C3AED)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 700, color: "#fff",
            boxShadow: "0 2px 8px rgba(91,33,182,0.25)"
          }}>8</div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, margin: 0, color: "#111", letterSpacing: "-0.5px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8club Review Intelligence</h1>
            <p style={{ fontSize: 12, margin: "2px 0 0", color: "#888", fontFamily: "'JetBrains Mono', monospace" }}>Google Play + Apple App Store · All reviews as of May 2026</p>
          </div>
        </div>
      </div>

      {/* Rating Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {[
          { ...reviewData.summary.playStore, icon: "▶", color: "#059669", accent: "#ECFDF5" },
          { ...reviewData.summary.appStore, icon: "🍎", color: "#2563EB", accent: "#EFF6FF" },
        ].map((s, i) => (
          <div key={i} style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            padding: "18px 16px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 10, color: "#999", marginBottom: 10, textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace" }}>{s.source}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
              <span style={{ fontSize: 34, fontWeight: 700, color: s.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.rating}</span>
              <span style={{ fontSize: 14, color: "#aaa" }}>/ 5</span>
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{s.totalReviews} reviews</div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 28 }}>
        {[
          { label: "Pain Points", value: totalNegReviews, color: "#DC2626" },
          { label: "Categories", value: reviewData.categories.length, color: "#D97706" },
          { label: "Critical", value: criticalCount, color: "#B91C1C" },
        ].map((s, i) => (
          <div key={i} style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 12,
            padding: "14px 10px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: s.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
            <div style={{ fontSize: 9, color: "#999", textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 22, background: "#F0EFED", borderRadius: 12, padding: 4 }}>
        {[
          { id: "overview", label: "Issues" },
          { id: "positive", label: "What Works" },
          { id: "meta", label: "Meta Insights" },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            flex: 1, padding: "10px 8px", borderRadius: 9, border: "none", cursor: "pointer",
            fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: activeTab === tab.id ? "#fff" : "transparent",
            color: activeTab === tab.id ? "#111" : "#888",
            boxShadow: activeTab === tab.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.2s"
          }}>{tab.label}</button>
        ))}
      </div>

      {/* Issues Tab */}
      {activeTab === "overview" && (
        <div>
          {/* Priority Matrix */}
          <div style={{
            marginBottom: 22, padding: "16px 18px",
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 14 }}>Priority by severity × volume</div>
            {sorted.map((cat) => {
              const sc = severityColor[cat.severity];
              const maxCount = 9;
              return (
                <div key={cat.id} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 14 }}>{cat.icon}</span>
                    <span style={{ fontSize: 12, color: "#444", flex: 1, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>{cat.label}</span>
                    <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: sc.text, background: sc.bg, padding: "2px 8px", borderRadius: 5, border: `1px solid ${sc.border}` }}>{cat.severity}</span>
                    <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#666", minWidth: 20, textAlign: "right" }}>{cat.count}</span>
                  </div>
                  <div style={{ height: 5, background: "#F0EFED", borderRadius: 3 }}>
                    <div style={{ height: 5, background: sc.dot, borderRadius: 3, width: `${(cat.count / maxCount) * 100}%`, transition: "width 0.5s ease", opacity: 0.85 }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Categories */}
          {sorted.map((cat) => {
            const sc = severityColor[cat.severity];
            const isExpanded = expandedCategory === cat.id;
            return (
              <div key={cat.id} style={{
                background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
                marginBottom: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
              }}>
                <button onClick={() => setExpandedCategory(isExpanded ? null : cat.id)} style={{
                  width: "100%", padding: "16px 18px", background: "none", border: "none",
                  cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12
                }}>
                  <span style={{ fontSize: 24 }}>{cat.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#111", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{cat.label}</span>
                      <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: sc.text, background: sc.bg, padding: "2px 7px", borderRadius: 5, border: `1px solid ${sc.border}` }}>{cat.severity.toUpperCase()}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>{cat.count} reviews · {cat.stores}</div>
                  </div>
                  <span style={{ color: "#bbb", fontSize: 16, transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▼</span>
                </button>

                {isExpanded && (
                  <div style={{ padding: "0 18px 18px" }}>
                    {/* Insight */}
                    <div style={{ background: "#F5F3FF", border: "1px solid #E0DBFF", borderRadius: 10, padding: 14, marginBottom: 12 }}>
                      <div style={{ fontSize: 10, color: "#6D28D9", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>Insight</div>
                      <div style={{ fontSize: 13, color: "#3B1F8E", lineHeight: 1.7 }}>{cat.insight}</div>
                    </div>

                    {/* PM Action */}
                    <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 14, marginBottom: 14 }}>
                      <div style={{ fontSize: 10, color: "#15803D", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>PM Action</div>
                      <div style={{ fontSize: 13, color: "#14532D", lineHeight: 1.7 }}>{cat.pmAction}</div>
                    </div>

                    {/* Reviews */}
                    <div style={{ fontSize: 10, color: "#aaa", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>Raw Reviews</div>
                    {cat.reviews.map((r, i) => (
                      <div key={i} style={{
                        padding: "12px 14px", background: "#FAFAF8", borderRadius: 10, marginBottom: 8,
                        borderLeft: `3px solid ${ratingBorder(r.rating)}`
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "#333", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{r.user}</span>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#aaa" }}>{r.date}</span>
                            <span style={{
                              fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                              color: r.store === "iOS" ? "#2563EB" : "#059669",
                              background: r.store === "iOS" ? "#EFF6FF" : "#ECFDF5",
                              padding: "2px 7px", borderRadius: 4,
                              border: `1px solid ${r.store === "iOS" ? "#BFDBFE" : "#A7F3D0"}`
                            }}>{r.store}</span>
                          </div>
                        </div>
                        <div style={{ fontSize: 11, color: "#D97706" }}>{"★".repeat(r.rating)}<span style={{ color: "#ddd" }}>{"★".repeat(5 - r.rating)}</span></div>
                        <div style={{ fontSize: 12, color: "#444", lineHeight: 1.6, marginTop: 4 }}>{r.text}</div>
                        {r.note && (
                          <div style={{ fontSize: 11, color: "#7C3AED", background: "#F5F3FF", padding: "6px 10px", borderRadius: 6, marginTop: 6, fontStyle: "italic", border: "1px solid #E0DBFF" }}>
                            ℹ️ {r.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* What Works Tab */}
      {activeTab === "positive" && (
        <div>
          {reviewData.positives.map((cat) => (
            <div key={cat.id} style={{
              background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
              marginBottom: 14, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#111", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{cat.label}</span>
              </div>

              <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 10, padding: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 10, color: "#15803D", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>Why It Matters</div>
                <div style={{ fontSize: 13, color: "#14532D", lineHeight: 1.7 }}>{cat.insight}</div>
              </div>

              {cat.reviews.map((r, i) => (
                <div key={i} style={{
                  padding: "12px 14px", background: "#FAFAF8", borderRadius: 10, marginBottom: 8,
                  borderLeft: "3px solid #34D399"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#333", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{r.user}</span>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "#aaa" }}>{r.date}</span>
                      <span style={{
                        fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                        color: r.store === "iOS" ? "#2563EB" : "#059669",
                        background: r.store === "iOS" ? "#EFF6FF" : "#ECFDF5",
                        padding: "2px 7px", borderRadius: 4,
                        border: `1px solid ${r.store === "iOS" ? "#BFDBFE" : "#A7F3D0"}`
                      }}>{r.store}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#444", lineHeight: 1.6, marginTop: 4 }}>{r.text}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Meta Insights Tab */}
      {activeTab === "meta" && (
        <div>
          {/* Developer Response Analysis */}
          <div style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            padding: 18, marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🤖 Developer Response Patterns</div>
            <div style={{ fontSize: 13, color: "#444", lineHeight: 1.8, marginBottom: 14 }}>
              On <strong style={{ color: "#B45309" }}>25 February 2026</strong>, 8club replied to <strong style={{ color: "#B45309" }}>15+ Google Play reviews</strong> in a single batch — some dating back months. This tells us review management wasn't a regular practice until recently.
            </div>
            <div style={{ fontSize: 13, color: "#444", lineHeight: 1.8, marginBottom: 14 }}>
              Across iOS, the developer responses on <strong style={{ color: "#B45309" }}>8 August</strong> used an identical copy-paste waitlist response across 4+ different users. Canned replies to nuanced complaints erode the "exclusive community" brand.
            </div>
            <div style={{ background: "#F5F3FF", border: "1px solid #E0DBFF", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 10, color: "#6D28D9", textTransform: "uppercase", letterSpacing: "1.2px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>Takeaway</div>
              <div style={{ fontSize: 13, color: "#3B1F8E", lineHeight: 1.7 }}>
                A brand that promises "your city's secret inner circle" can't reply like a customer support bot. Every review response is a public brand touchpoint. Personalize them or don't reply at all — a canned response is worse than silence for a luxury positioning.
              </div>
            </div>
          </div>

          {/* Rating Gap */}
          <div style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            padding: 18, marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>📊 The iOS vs Android Rating Gap</div>
            <div style={{ display: "flex", gap: 14, marginBottom: 14 }}>
              <div style={{ flex: 1, textAlign: "center", padding: 14, background: "#EFF6FF", borderRadius: 10, border: "1px solid #BFDBFE" }}>
                <div style={{ fontSize: 30, fontWeight: 700, color: "#2563EB", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>4.8</div>
                <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>iOS (244 ratings)</div>
              </div>
              <div style={{ flex: 1, textAlign: "center", padding: 14, background: "#ECFDF5", borderRadius: 10, border: "1px solid #A7F3D0" }}>
                <div style={{ fontSize: 30, fontWeight: 700, color: "#059669", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>4.5</div>
                <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>Android (197 reviews)</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "#444", lineHeight: 1.8 }}>
              The <strong style={{ color: "#DC2626" }}>0.3-star gap</strong> maps directly to the crash/keyboard cluster that was Android-specific (Flutter rendering issues). iOS users' top complaints are waitlist and discovery — product-level issues. Android users hit infrastructure-level failures first, which colored everything downstream.
            </div>
          </div>

          {/* Thematic Synthesis */}
          <div style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            padding: 18, marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🧠 Three Big Strategic Tensions</div>

            {[
              {
                title: "1. Curation vs Accessibility",
                body: "The waitlist exists to maintain quality, but it generates the highest volume of negative reviews. Users who can't get in feel discriminated against; users who do get in sometimes find it's not exclusive enough. The equilibrium is fragile — too strict and you starve growth, too loose and you lose the brand.",
                color: "#7C3AED"
              },
              {
                title: "2. Bangalore-first vs India-wide",
                body: "Marketing says 'serviceable across India' but the app doesn't filter by city. Non-Bangalore users see irrelevant content and churn. The SOP-licensing expansion model creates supply in new cities, but the product doesn't surface it. This is a product problem masquerading as a growth problem.",
                color: "#2563EB"
              },
              {
                title: "3. Vision vs Execution",
                body: "The most telling signal: even 1★ reviewers acknowledge the concept is strong. 'Good idea, horrendous execution' appears in nearly identical phrasing across multiple reviews. The product vision (live map, curated offline experiences) is resonant — but basic table stakes (stability, filtering, photo management, support) aren't met. The first PM's job is closing that gap.",
                color: "#D97706"
              }
            ].map((t, i) => (
              <div key={i} style={{ padding: "14px 16px", background: "#FAFAF8", borderRadius: 10, marginBottom: 10, borderLeft: `3px solid ${t.color}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t.title}</div>
                <div style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>{t.body}</div>
              </div>
            ))}
          </div>

          {/* Top 5 PM Priorities */}
          <div style={{
            background: "#fff", border: "1px solid #E5E5E3", borderRadius: 14,
            padding: 18, marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
          }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#111", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>🎯 If You Were Day-1 PM: Priority Stack</div>
            {[
              { p: "P0", label: "Crash monitoring + staged rollouts", why: "Can't build trust on an unstable foundation. Gate every release.", color: "#DC2626" },
              { p: "P0", label: "City-based filtering + location onboarding", why: "Most requested feature. Directly unlocks non-Bangalore retention.", color: "#DC2626" },
              { p: "P1", label: "Waitlist transparency + SLA + lite experience", why: "Converts the #1 churn moment into an engagement loop.", color: "#D97706" },
              { p: "P1", label: "Photo edit/delete for profiles and events", why: "Low-effort, high-trust UX fix. Unblocks hosts and attendees.", color: "#D97706" },
              { p: "P2", label: "Review management cadence + personalized responses", why: "Every public review is a brand billboard. Treat it like one.", color: "#2563EB" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: i < 4 ? "1px solid #F0EFED" : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, color: item.color, minWidth: 26, paddingTop: 2 }}>{item.p}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "#888" }}>{item.why}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "22px 0 8px", borderTop: "1px solid #E5E5E3", marginTop: 24 }}>
        <div style={{ fontSize: 10, color: "#bbb", fontFamily: "'JetBrains Mono', monospace" }}>
          Sources: {reviewData.categories.reduce((s, c) => s + c.reviews.length, 0) + reviewData.positives.reduce((s, c) => s + c.reviews.length, 0)} individual reviews analyzed · Google Play Store + Apple App Store
        </div>
      </div>
    </div>
  );
}
