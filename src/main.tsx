import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/fonts.css'
import './styles/global.css'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import HarvestOnslaught from './pages/HarvestOnslaught'
import BreakneckBattleTank from './pages/BreakneckBattleTank'
import TaleOfNexus from './pages/TaleOfNexus'
import PhaseSwapDemo from './pages/PhaseSwapDemo'
import UnderDevelopment from './pages/UnderDevelopment'
import NotFound from './pages/NotFound'
import SiteLayout from './components/SiteLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/harvest-onslaught" element={<HarvestOnslaught />} />
          <Route path="/breakneck-battle-tank" element={<BreakneckBattleTank />} />
          <Route path="/taleofnexus-thetrueguardian" element={<TaleOfNexus />} />
          <Route path="/phase-swap-demo" element={<PhaseSwapDemo />} />
          <Route path="/under-development-page" element={<UnderDevelopment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
