import { Routes, Route, useNavigate } from 'react-router-dom'
import Landing from './pages/Landing'
import ReviewAnalysis from './pages/ReviewAnalysis'
import Prioritisation from './pages/PrioritisationDeepDives'
import JourneyMap from './pages/OnboardingJourneyMap'

function BackButton() {
  const navigate = useNavigate()
  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'linear-gradient(to bottom, #FAFAF8 60%, transparent)',
      padding: '12px 20px 20px',
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 16px',
          borderRadius: 10,
          border: '1px solid #E5E5E3',
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
          color: '#666',
          fontSize: 13,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={e => {
          e.target.style.borderColor = '#7C3AED'
          e.target.style.color = '#5B21B6'
          e.target.style.boxShadow = '0 2px 8px rgba(91,33,182,0.1)'
        }}
        onMouseLeave={e => {
          e.target.style.borderColor = '#E5E5E3'
          e.target.style.color = '#666'
          e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Back to Overview
      </button>
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <div style={{ background: '#FAFAF8', minHeight: '100vh' }}>
      <BackButton />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px 48px' }}>
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    const routes = {
      'review-analysis': '/review-analysis',
      'onboarding-journey': '/onboarding-journey',
      'prioritisation': '/prioritisation',
    }
    navigate(routes[id] || '/')
  }

  return (
    <Routes>
      <Route path="/" element={<Landing onNavigate={handleNavigate} />} />
      <Route path="/review-analysis" element={<PageWrapper><ReviewAnalysis /></PageWrapper>} />
      <Route path="/onboarding-journey" element={<PageWrapper><JourneyMap /></PageWrapper>} />
      <Route path="/prioritisation" element={<PageWrapper><Prioritisation /></PageWrapper>} />
    </Routes>
  )
}
