import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import ReviewAnalysis from './pages/ReviewAnalysis'
import Prioritisation from './pages/PrioritisationDeepDives'
import JourneyMap from './pages/OnboardingJourneyMap'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 44,
        height: 44,
        borderRadius: 12,
        border: '1px solid #E5E5E3',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(8px)',
        color: '#555',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        zIndex: 1000,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#7C3AED'
        e.currentTarget.style.color = '#5B21B6'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#E5E5E3'
        e.currentTarget.style.color = '#555'
      }}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  )
}

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
          color: '#555',
          fontSize: 14,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#7C3AED'
          e.currentTarget.style.color = '#5B21B6'
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(91,33,182,0.1)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#E5E5E3'
          e.currentTarget.style.color = '#555'
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
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
      <BackToTopButton />
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing onNavigate={handleNavigate} />} />
        <Route path="/review-analysis" element={<PageWrapper><ReviewAnalysis /></PageWrapper>} />
        <Route path="/onboarding-journey" element={<PageWrapper><JourneyMap /></PageWrapper>} />
        <Route path="/prioritisation" element={<PageWrapper><Prioritisation /></PageWrapper>} />
      </Routes>
    </>
  )
}
