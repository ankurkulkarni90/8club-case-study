import { useState } from "react";

const journeyStages = [
  {
    id: "auth",
    phase: "Authentication",
    step: "Pre-Onboarding",
    timestamp: "12:36 – 12:37",
    duration: "~1 min",
    title: "Phone + OTP Verification",
    dataCollected: ["Phone number (+91)"],
    description:
      'Entry point. "Add your digits to proceed". casual, on-brand copy. Background is a grainy B&W party photo setting the vibe immediately. +91 prefix is hardcoded (India-only). OTP arrives from "CP-EIGHTC-S" within seconds. 4-digit code, 48-second countdown, "Resend OTP" option.',
    uxPositives: [
      "Copy is warm and casual, not clinical. sets the brand tone from screen 1",
      "B&W party imagery in the background immediately communicates what this app is about",
      "OTP auto-detection from Messages is surfaced (iOS keyboard suggestion)",
      "Terms & Conditions linked but not obstructive. checkbox-style consent",
    ],
    uxFriction: [
      "No option to sign up with email or social auth; phone-only creates a single point of failure",
      "Country code is hardcoded to +91, with no international user path",
    ],
    userFeeling: "Curious, slightly intrigued by the aesthetic",
    emotionScore: 7,
  },
  {
    id: "photo",
    phase: "Profile Build",
    step: "Step 1/5",
    timestamp: "12:37 – 12:40",
    duration: "~3 min",
    title: "Profile Photo Upload + Crop",
    dataCollected: ["Profile photo (face required)"],
    description:
      '"Add a photo. Your face keeps you trusted here." Disco ball icon as the upload button. Requests full photo library access (iOS permission dialog). After selection, a dedicated crop screen appears with "Crop Profile Picture" header. The step counter shows 1/5 in the top right. Background uses a subtle zigzag pattern in dark grey. Strategic context: for an invite-only app where hosts evaluate profiles before sending invites, the photo is the single most important data point. Making it mandatory upfront ensures every profile in the system is real and evaluable, a defensible product choice for the curation model.',
    uxPositives: [
      '"Your face keeps you trusted here". clever copy that frames the requirement as safety, not surveillance',
      "Dedicated crop screen ensures photo quality. they care about how profiles look",
      "The disco ball icon is a delightful touch. continues the party/nightlife visual language",
      "Step counter (1/5) sets expectations for the journey length",
      "For the curation model, photo-first is strategically correct. it's the primary signal hosts use to evaluate invitees",
    ],
    uxFriction: [
      "The strategic rationale is sound, but it creates a trust tradeoff: users must invest before receiving any value. The copy ('keeps you trusted') partially offsets this, but the gap remains",
      "Full photo library access requested (not limited access). Should use iOS 'Select Photos' limited access to reduce the permission footprint",
      "No skip option visible. mandatory photo is the right call for curation quality, but removes user agency at the earliest stage",
      "Multiple sub-steps across photo selection, confirmation, and cropping, as the iOS photo picker adds friction the app can't fully control",
    ],
    userFeeling: "Slight hesitation, but the copy and context help. 'OK, this makes sense for a curated app'",
    emotionScore: 5,
  },
  {
    id: "name",
    phase: "Profile Build",
    step: "Step 1/5 (continued)",
    timestamp: "12:40",
    duration: "<1 min",
    title: "Display Name Entry",
    dataCollected: ["Display name (first name / nickname)"],
    description:
      '"Add the name to your face". text input field, free-form entry. Still shows 1/5 in the step counter, meaning photo + name are bundled as a single step. The profile photo now appears as a circular avatar above the name field, creating continuity. Keyboard autocomplete suggestions visible.',
    uxPositives: [
      "Showing the uploaded photo above the name field creates a visual connection. 'this is becoming YOUR profile'",
      "Free-form text allows nicknames (entered 'Kulki'), not forcing legal names",
      "Still counted as Step 1/5. bundling photo + name avoids overwhelming the step counter",
    ],
    uxFriction: [
      "No last name field. intentional informality, but creates issues for matching/discovery later",
      "No character limit or format guidance visible",
    ],
    userFeeling: "Engaged, the profile is taking shape",
    emotionScore: 6,
  },
  {
    id: "dob",
    phase: "Profile Build",
    step: "Step 2/5",
    timestamp: "12:40",
    duration: "<1 min",
    title: "Date of Birth",
    dataCollected: ["Date of birth (DD/MM/YYYY)"],
    description:
      '"Hey 🖼️ Kulki". personalised greeting with the uploaded photo inline in the header text. "Add your birth date. Maybe you\'ll find a twin inside." DD/MM/YYYY format with numeric keyboard. Also offers "Select from Calendar" as an alternative. "Save Date" button.',
    uxPositives: [
      "Inline photo in the greeting is a premium touch. makes it feel personalised",
      '"Maybe you\'ll find a twin inside". playful copy that hints at the social discovery value',
      "Offering both manual entry and calendar picker covers different user preferences",
      "The personalisation loop (photo in greeting) rewards the effort of uploading a photo",
    ],
    uxFriction: [
      "No explanation of why DOB is needed or how it will be used/displayed",
      'Age eventually displays as "36 years young" on profile. But the user doesn\'t know this yet',
    ],
    userFeeling: "Warming up; the personalisation feels good",
    emotionScore: 7,
  },
  {
    id: "gender",
    phase: "Profile Build",
    step: "Step 3/5",
    timestamp: "12:40",
    duration: "<30 sec",
    title: "Gender Identity",
    dataCollected: ["Gender (Male / Female / Non-binary / Prefer not to say)"],
    description:
      '"Who do you identify yourself as?" Four options: Male ♂, Female ♀, Non-binary ⚧, Prefer not to say. Selected option (Male) gets a purple border highlight. "Save & Continue" button. Back arrow available.',
    uxPositives: [
      "Inclusive options including Non-binary and Prefer not to say. modern and thoughtful",
      "Clean single-selection UI with clear visual feedback (purple border on selection)",
      "Back navigation available. user can correct previous steps",
    ],
    uxFriction: [
      "No visibility into how gender is used, for matching? display? event curation?",
      "Reviews confirm gender-based waitlist bias (females approved faster). This data point feeds into that opaque process",
    ],
    userFeeling: "Neutral. quick, painless step",
    emotionScore: 6,
  },
  {
    id: "location",
    phase: "Profile Build",
    step: "Step 4/5",
    timestamp: "12:40",
    duration: "<30 sec",
    title: "Location Selection",
    dataCollected: ["City (Bangalore, Karnataka)"],
    description:
      '"Accepting Invites from Bangalore, Karnataka" with a green dot indicator (active status). Only one city visible. "Change Location" link at the bottom. "Next" button to proceed.',
    uxPositives: [
      "Green dot conveys 'active/available' status. familiar pattern",
      "Location is pre-detected from phone settings or IP. minimal effort required",
      '"Accepting Invites from" framing is smart. positions the user as a receiver, not a browser',
    ],
    uxFriction: [
      "Only Bangalore is shown, with no other cities visible even as 'coming soon'. For a non-Bangalore user, this is a dead end",
      "'Change Location' link exists but the affordance is unclear. change to what?",
      "No explanation of what location means for the experience. will I only see Bangalore events?",
      "This is the geographic limitation that reviews heavily complain about",
    ],
    userFeeling: "Fine if in Bangalore; confused or disappointed if elsewhere",
    emotionScore: 6,
  },
  {
    id: "hotspots",
    phase: "Profile Build",
    step: "Step 5/5",
    timestamp: "12:40 – 12:41",
    duration: "~1 min",
    title: "Hotspot Preference Selection",
    dataCollected: [
      "Up to 5 hotspot categories selected from: Party, Fitness, Picnic, Brunch, Lunch, Dinner, Music, Travel, Liquor Tasting, Weekend Getaway, Games, Dance, Cook Fest, Lit Meet, House Party, Art & Craft, Outdoor Activities, Comedy (partially visible)",
    ],
    description:
      '"What kind of Hotspots would you like to attend?" Stamp-style visual cards in a 2-column grid. Each category has a unique B&W illustration with bold typography. Selected cards turn colorful (pink for Picnic, purple for Music/Lit Meet, blue for Art & Craft/Weekend Getaway). Bottom bar shows running selection list and "Max: 5" cap. "Submit" button.',
    uxPositives: [
      "The stamp-card design is genuinely beautiful and distinctive. This is where 8club's visual identity shines brightest",
      "Color-on-selection provides satisfying visual feedback. grey → vivid colour is rewarding",
      "Max 5 cap forces intentional choices. prevents 'select all' laziness, creates a meaningful preference signal",
      "The running selection bar at the bottom provides real-time feedback on choices",
      "18+ categories show genuine breadth, and this isn't just a party app",
      "Each stamp has a unique, curated illustration (disco ball for Party, gramophone for Music, etc.). high craft",
    ],
    uxFriction: [
      "No indication of how these preferences will be used. matching? feed curation? host visibility?",
      "Categories require scrolling through multiple screens of options, which feels long",
      "Some categories feel overlapping (Lunch vs Dinner vs Brunch; Travel vs Weekend Getaway vs Outdoor Activities)",
    ],
    userFeeling: "Delighted. This is the emotional high point of onboarding",
    emotionScore: 9,
  },
  {
    id: "explainer",
    phase: "Onboarding Complete → Product Education",
    step: "Post-Setup",
    timestamp: "12:41",
    duration: "<30 sec",
    title: '"How Does It Work?" Explainer',
    dataCollected: [],
    description:
      'Warm orange/amber gradient background, a visual shift from the dark theme, signaling "new chapter." Step 1: "You get invited to Hotspots. When someone hosts a Hotspot (event) on 8club, they choose who gets in. You\'ll get the invite if you\'re picked." Step 2: "In or out... you choose! Once invited, it\'s your call. Mark yourself \'in\' to join the guest list or skip it." Orange "Let\'s get started" CTA.',
    uxPositives: [
      "The colour shift from dark to warm orange marks a clear transition. 'setup is done, welcome to the product'",
      "Only 2 steps keeps it digestible, with no information overload",
      "The framing is aspirational: you get INVITED, you CHOOSE. positions the user as desirable",
    ],
    uxFriction: [
      "Only explains the Hotspot invitation flow. doesn't mention the waitlist that's about to gate them",
      "No mention of hosting. only positions the user as a guest, not a potential host",
      "The gap between this promise ('you get invited') and the reality ('you sit on a waitlist') is where trust breaks",
    ],
    userFeeling: "Excited, expectations are set high",
    emotionScore: 8,
  },
  {
    id: "contacts",
    phase: "Post-Onboarding Hooks",
    step: "Optional",
    timestamp: "12:42",
    duration: "<30 sec",
    title: "Contact Sync",
    dataCollected: ["Phone contacts (optional)"],
    description:
      '"See what your friends are up to and join in! Find Hotspots your friends will be at. holler at \'em and head out together!" A floating cloud of profile photos with activity badges ("Going to a Party 🎉", "Going for a Brunch 🥐"). Purple "Sync Contacts" CTA. "Maybe Later" escape hatch top-right.',
    uxPositives: [
      "The profile photo cloud with activity badges is visually compelling. shows what the experience looks like",
      '"Maybe Later" is available, not forcing the permission',
      "Copy is fun and informal ('holler at \\'em'). consistent brand voice",
      "Shows real-looking profiles with activity context. social proof in the visual itself",
    ],
    uxFriction: [
      "Contact sync is a high-trust ask for a brand new user. especially before they've experienced any value",
      "The promise (see what friends are up to) requires friends to already be on the platform. chicken-and-egg",
    ],
    userFeeling: "Intrigued but cautious. might skip for now",
    emotionScore: 6,
  },
  {
    id: "username",
    phase: "Post-Onboarding Hooks",
    step: "Auto-generated",
    timestamp: "12:42",
    duration: "~1 min",
    title: "Username Assignment",
    dataCollected: ["Username (@kulki)"],
    description:
      '"We\'ve created a default username for you: @user_b6qfu8." Two CTAs: "I like it" (purple, filled) and "Edit username" (purple, outlined). Clicking Edit opens a clean screen: "Give yourself a unique name. People will use this username to find you." Changed to @kulki. "Change it anytime" note below with reference to Edit Profile.',
    uxPositives: [
      "Auto-generating a default username removes friction for users who don't care",
      'Offering immediate edit for those who do care. "I like it" vs "Edit" is a clean binary',
      '"Change it anytime" reduces pressure, with no commitment anxiety',
      "The edit screen is focused and distraction-free",
    ],
    uxFriction: [
      "The auto-generated username (user_b6qfu8) is obviously ugly and creates a negative micro-impression",
      "No username suggestions based on the display name entered earlier (Kulki → @kulki should be auto-suggested)",
    ],
    userFeeling: "Mildly annoyed by ugly default, satisfied after editing",
    emotionScore: 6,
  },
  {
    id: "profile_review",
    phase: "Profile Complete → Waitlist",
    step: "Profile Review",
    timestamp: "12:42 – 12:43",
    duration: "~2 min",
    title: "Profile Page + Completion Carousel",
    dataCollected: [],
    description:
      'Edit Profile view shows all collected data: Kulki, phone, username @kulki, Email ID (Add Email), DOB 09/01/1990, Gender Male, Pronouns (Select), Location Bangalore, Bio (not added). Profile tab shows @kulki with "16%" completion ring in red, "36 years young | Male." A horizontal carousel of "COMPLETE YOUR PROFILE" cards prompts: (1) add social handle (Instagram icon), (2) add photos, (3) add job details, (4) write a bio, (5) add pronouns. Bottom navigation revealed: Home, Wall, Waitlist, Hotspots, Notifs, Profile.',
    uxPositives: [
      '"36 years young" instead of "36 years old". brand-consistent, positive framing',
      "Profile completion carousel with swipeable cards is a smart progressive disclosure pattern",
      "Each card has distinct, beautifully written copy, not generic 'complete your profile' nagging",
      "The 16% number creates a clear gap that incentivises completion",
      "Bottom nav reveals the full app structure. user can see what awaits them",
    ],
    uxFriction: [
      "16% completion after finishing ALL 5 mandatory onboarding steps feels deflating. 'I just did everything you asked and I'm only 16% done?'",
      "The remaining completion steps aren't explained in a checklist. just a carousel you have to swipe through to discover what's missing",
      "There is no indication of what completion percentage, if any, unlocks waitlist clearance",
      "Email is optional during onboarding but counts toward completion, which is a missed opportunity to collect it earlier",
    ],
    userFeeling: "Deflated. 'Wait, 16%? I just filled out everything!'",
    emotionScore: 4,
  },
  {
    id: "waitlist",
    phase: "The Waiting Game",
    step: "Liminal State",
    timestamp: "12:42 – 12:46+",
    duration: "Indefinite",
    title: "Waitlist Screen",
    dataCollected: [],
    description:
      '"Profile Submitted" with green checkmark badge. "You\'re already closer than most" (subtle flattery). "Invite brewing... Scroll while it simmers" (main headline). "Profile stuck at 16% • Just 5 steps to go" (red warning bar at bottom, later updates to 33% / 4 steps after adding Instagram). This is the default landing screen on the Waitlist tab. The user is now in a gated state.',
    uxPositives: [
      '"You\'re already closer than most" is psychologically clever. creates relative positioning, reduces abandonment',
      '"Invite brewing... Scroll while it simmers", and the coffee metaphor is warm and on-brand',
      "Profile Submitted badge confirms the system received the submission. closure on that action",
      "The profile % nudge provides a clear next action to take while waiting",
    ],
    uxFriction: [
      "THE CRITICAL GAP: No explanation of what determines waitlist clearance. Is it profile completion? Manual review? Time-based? Social connections? The user is left entirely guessing",
      "'Scroll while it simmers'. scroll WHERE? The waitlist screen itself is empty. There's nothing to scroll",
      "The Wall tab loaded as a blank white screen initially. The 'scroll' instruction leads to an empty feed",
      "No estimated wait time, no queue position, no status updates. total opacity",
      "No explanation of what the 'steps to go' will actually change. will 100% guarantee clearance?",
      "Reviews show users waiting MONTHS in this state with no communication. This is where 8club loses them",
    ],
    userFeeling: "Confused → frustrated → eventually abandoned. The emotional cliff.",
    emotionScore: 2,
  },
  {
    id: "explore_wall",
    phase: "Exploring While Waitlisted",
    step: "Limited Access",
    timestamp: "12:43",
    duration: "~1 min",
    title: "Wall Tab (Content Feed)",
    dataCollected: [],
    description:
      'Wall tab initially loads as a completely blank white screen. no content, no loading state, nothing. On second attempt or after loading, it shows story-style vertical content: "10s ONLY SZN: BAEWATCH" by Mayank, a full-screen event photo with bold typography. This is the content feed showing past/upcoming event highlights.',
    uxPositives: [
      "When it loads, the Wall content is visually striking. full-bleed event photos with bold typography create aspiration",
      "Story-style vertical scroll is a familiar, engaging format",
      "Showing event content to waitlisted users builds desire. 'this is what you're missing'",
    ],
    uxFriction: [
      "The initial blank white screen is a serious bug/loading issue. kills momentum completely",
      "No loading indicator or skeleton state. user can't tell if it's broken or empty",
      "The white screen against the dark app theme is visually jarring. clearly unintended",
      "For a waitlisted user, seeing events they can't attend risks tipping from aspiration to frustration, depending on the wait time",
    ],
    userFeeling: "Confused by blank screen, then curious when content appears",
    emotionScore: 4,
  },
  {
    id: "explore_notifs",
    phase: "Exploring While Waitlisted",
    step: "Limited Access",
    timestamp: "12:44",
    duration: "<30 sec",
    title: "Notifications Tab",
    dataCollected: [],
    description:
      'Header: "Notifications" with a "What\'s New?" badge (green dot). Shows "Hotspot Invites. 0 invites pending." A banner prompts "Turn on Notifications. Know when you\'re invited to a Hotspot and stay updated. Grant Permission →." Below that, an empty state illustration of a puppy with "No Notifications here."',
    uxPositives: [
      "The puppy empty state illustration is charming. softer than a generic 'nothing here' message",
      "Notification permission ask is contextualised ('know when you're invited'). gives a reason",
      "Hotspot Invites counter at the top creates a clear 'inbox' mental model. Users know where invites will land",
      '"What\'s New?" badge suggests the team ships updates visibly',
    ],
    uxFriction: [
      "Asking for notification permission while on the waitlist feels premature. 'notify me about what? I'm not even in yet'",
      "0 invites pending is technically accurate but emotionally flat for a new user",
    ],
    userFeeling: "Mildly deflated but understands the structure",
    emotionScore: 5,
  },
  {
    id: "profile_completion",
    phase: "Profile Enhancement",
    step: "Post-Onboarding",
    timestamp: "12:44 – 12:46+",
    duration: "~5 min",
    title: "Social Links + Profile Completion",
    dataCollected: ["Instagram handle (ankurkulkarni90)", "Visibility preferences"],
    description:
      'Edit Profile → "Connect your socials" section: Instagram, LinkedIn, X (Twitter). Each has a text field for handle/URL and a "Visible to everyone" toggle (defaults to OFF). After adding Instagram handle (ankurkulkarni90) with visibility ON, profile completion jumps from 16% → 33%. The edit profile page also reveals additional fields: Professional Details (Designation, Company), each with "Add" buttons. The profile page now shows the Instagram badge as a clickable link, and the waitlist "steps to go" drops from 5 to 4.',
    uxPositives: [
      "Social link visibility toggles give users control. privacy-conscious design",
      "Instagram added as a visible badge on the public profile. creates social proof for other users and hosts",
      "Professional Details section (Designation + Company) shows they're building a professional-social hybrid profile",
      "Profile completion % updates in real-time. feedback loop for effort",
      "The completion carousel cards update/reduce as items are completed. satisfying progress",
    ],
    uxFriction: [
      "Adding ONE Instagram handle jumped profile from 16% to 33%. The weighting feels arbitrary",
      "Social links default to 'not visible'. But visibility is what makes profiles attractive to hosts. Defaulting to OFF hurts user outcomes",
      "No LinkedIn/X auto-verification. it's just a text field, so anyone can type any handle",
      "Still no clear connection between profile completion % and waitlist clearance",
    ],
    userFeeling: "Mildly productive. at least the number went up",
    emotionScore: 5,
  },
];

const phaseColors = {
  Authentication: { bg: "#FEF2F2", border: "#DC2626", text: "#991B1B", light: "#FFF5F5" },
  "Profile Build": { bg: "#F5F3FF", border: "#7C3AED", text: "#5B21B6", light: "#FAF5FF" },
  "Onboarding Complete → Product Education": { bg: "#FFF7ED", border: "#D97706", text: "#92400E", light: "#FFFBF0" },
  "Post-Onboarding Hooks": { bg: "#EFF6FF", border: "#2563EB", text: "#1E40AF", light: "#F0F7FF" },
  "Profile Complete → Waitlist": { bg: "#ECFDF5", border: "#059669", text: "#065F46", light: "#F0FDF9" },
  "The Waiting Game": { bg: "#FEF2F2", border: "#DC2626", text: "#991B1B", light: "#FFF5F5" },
  "Exploring While Waitlisted": { bg: "#F9FAFB", border: "#6B7280", text: "#374151", light: "#FAFAFA" },
  "Profile Enhancement": { bg: "#F5F3FF", border: "#7C3AED", text: "#5B21B6", light: "#FAF5FF" },
};

function EmotionBar({ score }) {
  const colors = ["#DC2626","#DC2626","#EA580C","#EA580C","#D97706","#D97706","#65A30D","#059669","#0D9488","#0891B2"];
  const labels = ["","","Frustrated","Frustrated","Uncertain","Uncertain","Neutral","Positive","Delighted","Peak"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
      <div style={{ display: "flex", gap: 2, flex: 1 }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              height: 5,
              flex: 1,
              borderRadius: 3,
              background: i < score ? colors[score - 1] : "#E5E5E3",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 14, color: colors[score - 1], fontWeight: 600, minWidth: 80, textAlign: "right", fontFamily: "'JetBrains Mono', monospace" }}>
        {labels[score - 1]} ~{score}/10
      </span>
    </div>
  );
}

function StageCard({ stage, isExpanded, onToggle, index }) {
  const phase = phaseColors[stage.phase] || phaseColors["Authentication"];
  return (
    <div
      style={{
        background: "#fff",
        borderLeft: `3px solid ${phase.border}`,
        borderRadius: 12,
        marginBottom: 12,
        overflow: "hidden",
        border: `1px solid #E5E5E3`,
        borderLeftWidth: 3,
        borderLeftColor: phase.border,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        transition: "all 0.2s",
      }}
    >
      <div
        onClick={onToggle}
        style={{
          padding: "14px 18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
        }}
      >
        <div
          style={{
            minWidth: 32,
            height: 32,
            borderRadius: "50%",
            background: phase.border,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
            marginTop: 2,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {index + 1}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: phase.text,
                textTransform: "uppercase",
                letterSpacing: "1px",
                background: phase.bg,
                padding: "2px 8px",
                borderRadius: 4,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {stage.step}
            </span>
            <span style={{ fontSize: 14, color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
              {stage.timestamp} · {stage.duration}
            </span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#111", lineHeight: 1.3, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stage.title}</div>
          <EmotionBar score={stage.emotionScore} />
        </div>
        <div
          style={{
            color: "#666",
            fontSize: 18,
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            flexShrink: 0,
            marginTop: 6,
          }}
        >
          ▾
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: "0 18px 18px 64px" }}>
          <p style={{ color: "#555", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px 0" }}>
            {stage.description}
          </p>

          {stage.dataCollected.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#2563EB", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>
                Data Collected
              </div>
              {stage.dataCollected.map((d, i) => (
                <div key={i} style={{ fontSize: 14, color: "#1E40AF", padding: "3px 0", display: "flex", alignItems: "flex-start", gap: 6, background: "#EFF6FF", borderRadius: 6, paddingLeft: 10, marginBottom: 4, paddingTop: 6, paddingBottom: 6 }}>
                  <span style={{ color: "#2563EB", flexShrink: 0 }}>◆</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            <div style={{ background: "#F0FDF4", borderRadius: 10, padding: 14, border: "1px solid #BBF7D0" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#166534", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                ✓ What's Working
              </div>
              {stage.uxPositives.map((p, i) => (
                <div key={i} style={{ fontSize: 14, color: "#166534", padding: "4px 0", lineHeight: 1.55 }}>
                  {p}
                </div>
              ))}
            </div>
            <div style={{ background: "#FFFBEB", borderRadius: 10, padding: 14, border: "1px solid #FDE68A" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#92400E", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                ⚡ Friction / Questions
              </div>
              {stage.uxFriction.map((f, i) => (
                <div key={i} style={{ fontSize: 14, color: "#92400E", padding: "4px 0", lineHeight: 1.55 }}>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              background: "#F5F3FF",
              borderRadius: 8,
              fontSize: 14,
              color: "#5B21B6",
              fontStyle: "italic",
              border: "1px solid #E0DBFF",
            }}
          >
            💭 Estimated user feeling: {stage.userFeeling}
          </div>
        </div>
      )}
    </div>
  );
}

export default function JourneyMap() {
  const [expandedStages, setExpandedStages] = useState(new Set([0]));
  const [expandAll, setExpandAll] = useState(false);

  const toggleStage = (index) => {
    setExpandedStages((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleAll = () => {
    if (expandAll) {
      setExpandedStages(new Set());
    } else {
      setExpandedStages(new Set(journeyStages.map((_, i) => i)));
    }
    setExpandAll(!expandAll);
  };

  const scores = journeyStages.map((s) => s.emotionScore);

  return (
    <div style={{ background: "#FAFAF8", color: "#1A1A1A", minHeight: "100vh", fontFamily: "'Source Serif 4', Georgia, serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "28px 18px" }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
            <img src="https://framerusercontent.com/images/9EnPwoHguYNzJT30BQDRklwgAoQ.png" alt="8club" style={{ width: 36, height: 36, borderRadius: 8, objectFit: "contain" }} />
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111", margin: 0, letterSpacing: "-0.5px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                New User Onboarding Journey Map
              </h1>
              <p style={{ fontSize: 14, margin: "2px 0 0", color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
                Complete screen-by-screen mapping · Download → Waitlist
              </p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#666", margin: "10px 0 0", lineHeight: 1.5 }}>
            ~42 screenshots · 15 distinct stages · ~10 minutes total · 6 candidate patterns identified.
          </p>
        </div>

        {/* Emotion Journey Overview */}
        <div style={{ background: "#fff", borderRadius: 14, padding: 18, marginBottom: 20, border: "1px solid #E5E5E3", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>
            Estimated Emotional Arc
          </div>
          <div style={{ fontSize: 14, color: "#666", marginBottom: 6, fontStyle: "italic", lineHeight: 1.5 }}>
            Each row is one step in the onboarding flow, in order. Scores are subjective estimates based on UX patterns and copy analysis.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {scores.map((s, i) => {
              const colors = ["","","#DC2626","#DC2626","#EA580C","#D97706","#65A30D","#059669","#0D9488","#0891B2"];
              const barColor = colors[s] || "#999";
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                  <div style={{
                    fontSize: 14, color: "#999", minWidth: 22, textAlign: "right", marginRight: 6,
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 500,
                  }}>
                    {i + 1}.
                  </div>
                  <div style={{
                    fontSize: 14, color: "#444", minWidth: 220, width: 220, textAlign: "right", paddingRight: 12,
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500,
                    lineHeight: 1.3,
                  }}>
                    {journeyStages[i].title}
                  </div>
                  <div style={{ flex: 1, height: 10, background: "#F0EFED", borderRadius: 5, overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: `${s * 10}%`,
                      background: barColor,
                      borderRadius: 5,
                      transition: "width 0.4s ease",
                    }} />
                  </div>
                  <div style={{
                    fontSize: 14, fontWeight: 600, color: barColor, minWidth: 36, textAlign: "right",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {s}/10
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 20 }}>
          {[
            { label: "Total Screens", value: "~42", color: "#2563EB" },
            { label: "Data Points Collected", value: "9", color: "#7C3AED" },
            { label: "Time to Waitlist", value: "~6 min", color: "#D97706" },
            { label: "Profile at End", value: "33%", color: "#DC2626" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "14px 10px",
                textAlign: "center",
                border: "1px solid #E5E5E3",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, color: stat.color, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: "#666", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.8px", fontFamily: "'JetBrains Mono', monospace" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <button
            onClick={toggleAll}
            style={{
              background: "#fff",
              border: "1px solid #E0DBFF",
              borderRadius: 8,
              color: "#7C3AED",
              padding: "6px 14px",
              fontSize: 14,
              cursor: "pointer",
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Journey Stages */}
        {journeyStages.map((stage, i) => (
          <StageCard
            key={stage.id}
            stage={stage}
            index={i}
            isExpanded={expandedStages.has(i)}
            onToggle={() => toggleStage(i)}
          />
        ))}

        {/* Coverage Note */}
        <div style={{ background: "#fff", borderRadius: 12, padding: 16, marginTop: 20, borderLeft: "3px solid #6B7280", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#6B7280" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#6B7280", marginBottom: 6, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace" }}>
            Coverage Note
          </div>
          <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7 }}>
            The bottom navigation has 6 tabs: Home, Wall, Waitlist, Hotspots, Notifs, Profile. This journey map covers Wall, Waitlist, Notifs, and Profile. The <strong style={{ color: "#111" }}>Home tab</strong> and <strong style={{ color: "#111" }}>Hotspots tab</strong> were empty or gated for a waitlisted user. Their absence from this map is itself a data point: the tabs that should build anticipation during the wait currently offer nothing to a user who hasn't been cleared.
          </div>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: "#fff", borderRadius: 12, padding: 20, marginTop: 12, borderLeft: "3px solid #D97706", border: "1px solid #E5E5E3", borderLeftWidth: 3, borderLeftColor: "#D97706", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Candidate Observation Universe for Prioritisation (Step 2)
          </div>
          <div style={{ fontSize: 14, color: "#666", marginBottom: 12, fontStyle: "italic" }}>
            Six patterns surfaced from the journey. Step 2 will apply a prioritisation lens to determine which 2-3 merit a deep-dive.
          </div>
          <div style={{ fontSize: 14, color: "#444", lineHeight: 1.75 }}>
            <p style={{ margin: "0 0 10px 0" }}>
              <strong style={{ color: "#111" }}>1. The Emotional Cliff:</strong> User sentiment peaks at the Hotspot Selection stage (estimated 9/10. genuinely delightful UI) and crashes at the Waitlist screen (estimated 2/10). The delta between the "How Does It Work" explainer's promise and the waitlist reality is the single biggest emotional drop in the entire flow.
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              <strong style={{ color: "#111" }}>2. The Opacity Problem:</strong> At no point does the app explain what determines waitlist clearance, what profile completion % maps to, or what happens next. The user has zero agency over the most important outcome of their onboarding.
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              <strong style={{ color: "#111" }}>3. The 16% Deflation:</strong> Completing all 5 mandatory onboarding steps results in only 16% profile completion. This framing punishes the user for doing exactly what was asked and creates a discouraging first impression of the profile.
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              <strong style={{ color: "#111" }}>4. The Empty State Gap:</strong> The app tells waitlisted users to "scroll while it simmers" but multiple tabs (Wall, Notifications) are empty or broken. There's no curated content experience for the liminal waiting period.
            </p>
            <p style={{ margin: "0 0 10px 0" }}>
              <strong style={{ color: "#111" }}>5. The Trust Sequencing Problem:</strong> High-trust permissions (full photo library access, contacts sync) are requested before the user has experienced any product value. UX best practice is to ask at the moment of relevance — e.g., contacts sync after attending a first Hotspot, when inviting friends is a natural action. Front-loading these asks depresses permission grant rates and creates unnecessary friction.
            </p>
            <p style={{ margin: "0" }}>
              <strong style={{ color: "#111" }}>6. The Re-engagement Dead End:</strong> The app collects a phone number but does not use it for SMS-based status updates. Email is not collected during onboarding (optional, buried in Edit Profile). Push notification permission hasn't been granted yet. This means a waitlisted user who closes the app has zero re-engagement channels available — the only path back in is the user remembering to open the app on their own.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "22px 0 8px 0", borderTop: "1px solid #E5E5E3", marginTop: 24 }}>
          <div style={{ fontSize: 14, color: "#666", fontFamily: "'JetBrains Mono', monospace" }}>
            Product analysis by Ankur Kulkarni
          </div>
        </div>
      </div>
    </div>
  );
}
