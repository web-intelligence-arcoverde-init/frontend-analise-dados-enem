import { EssayChart } from 'src/components'
import { useDispatch, useSelector } from 'react-redux'
import { readEssayRequest } from 'src/store/modules/results/actions'

import { useEffect } from 'react'

export const Redacao = () => {
  const loadingEssayAverage = useSelector(
    (state: any) => state.results.loadingEssayAverage,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readEssayRequest())
  }, [])

  return (
    <div>{loadingEssayAverage ? <span>Loading...</span> : <EssayChart />}</div>
  )
}
