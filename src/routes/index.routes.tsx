import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Competence } from 'src/pages/Competence/Competence'

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

const GenericNotFound = lazy(() =>
  import('src/pages/GenericNotFound/GenericNotFound').then(module => ({
    default: module.GenericNotFound,
  })),
)

export const RoutesConfig = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/charts" element={<Charts />} />

        <Route path="/competence" element={<Competence />} />

        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  )
}
