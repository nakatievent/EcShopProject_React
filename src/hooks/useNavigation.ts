import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()

  const goToPage = useCallback((destination: string) => {
    navigate(destination)
  }, [navigate])
  
  // const onClickButton = useCallback((destination: string) => {
	// 	goToPage(destination)
	// })

  return { goToPage }
}
