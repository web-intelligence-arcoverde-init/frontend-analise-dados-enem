import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() =>
  import('src/pages/Home/Home').then(module => ({
    default: module.Home,
  })),
)

const ExampleChart = lazy(() =>
  import('src/pages/ExampleChart/ExampleChart').then(module => ({
    default: module.ExampleChart,
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

        <Route path="/chart" element={<ExampleChart />} />

        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  )
}
