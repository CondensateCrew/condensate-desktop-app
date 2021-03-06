import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { removeCurrentBrainstorm, reverseInstructions, removeAllWords, removeInsights } from '@/redux/actions'
import './Header.scss'
import back from '@/assets/down.svg'

const Header: React.FC = () => {
  const [isRedirected, setIsRedirected] = useState<boolean>(false)
  const dispatch = useDispatch()
  const redirect = (): void => setIsRedirected(true)

  const backToDashboard = (): void => {
    if (isRedirected) {
      dispatch(removeCurrentBrainstorm())
      dispatch(reverseInstructions())
      dispatch(removeAllWords())
      dispatch(removeInsights())
    }
  }

  useEffect(backToDashboard, [isRedirected])

  return (
    isRedirected
      ? <Redirect to="/dashboard" />
      : (
        <header className="round-header">
          <button onClick={redirect}>
            <img src={back} alt="back"/>
            to dashboard
          </button>
          <h1>Condensate</h1>
        </header>
      )
  )
}

export default Header
