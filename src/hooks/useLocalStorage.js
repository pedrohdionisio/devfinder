/* eslint-disable no-console */
import { useCallback, useState } from 'react'

export default function useLocalStorage(key, initialValue = '') {
  const { state, setState } = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)

      return storedValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value) => {
    try {
      setState(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }, [key])

  return [state, setValue]
}
