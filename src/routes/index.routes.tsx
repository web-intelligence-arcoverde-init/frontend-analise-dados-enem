import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

const Charts = lazy(() =>
  import('src/pages/Charts/Charts').then(module => ({
    default: module.Charts,
  })),
)

const HeatMap = lazy(() =>
  import('src/pages/HeatMap/HeatMap').then(module => ({
    default: module.HeatMap,
  })),
)

const Competence = lazy(() =>
  import('src/pages/Competences/Competences').then(module => ({
    default: module.Competence,
  })),
)

const AboutCompetences = lazy(() =>
  import('src/pages/About/AboutCompetences/AboutCompetences').then(module => ({
    default: module.AboutCompetences,
  })),
)

const AboutEssayCompetence = lazy(() =>
  import('src/pages/About/AboutEssayCompetence/AboutEssayCompetence').then(
    module => ({
      default: module.AboutEssayCompetence,
    }),
  ),
)

const AboutHabilities = lazy(() =>
  import('src/pages/About/AboutHabilities/AboutHabilities').then(module => ({
    default: module.AboutHabilities,
  })),
)

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

const RedacaoPage = lazy(() =>
  import('src/pages/Redacao/Redacao').then(module => ({
    default: module.Redacao,
  })),
)

export const RoutesConfig = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/charts" element={<Charts />} />

        <Route path="/redacao-media" element={<RedacaoPage />} />

        <Route path="/heatmap" element={<HeatMap />} />

        <Route path="/competence" element={<Competence />} />

        <Route path="/about/competences" element={<AboutCompetences />} />

        <Route
          path="/about/essaycompetences"
          element={<AboutEssayCompetence />}
        />

        <Route path="/about/habilities" element={<AboutHabilities />} />

        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  )
}
