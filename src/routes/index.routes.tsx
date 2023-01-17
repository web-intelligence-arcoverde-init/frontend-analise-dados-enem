import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const SignIn = lazy(() =>
  import('src/pages/SignIn').then(module => ({
    default: module.SignIn,
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
        <Route path="/" element={<SignIn />} />

        <Route path="*" element={<GenericNotFound />} />
      </Routes>
    </Suspense>
  )
}
