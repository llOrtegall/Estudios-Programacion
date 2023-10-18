import { useState, useEffect } from 'react'
import { getRamdonFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRamdonFact().then(newFact => setFact(newFact))
  }
  // TODO: Aquí Tenemos Un Effect
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
