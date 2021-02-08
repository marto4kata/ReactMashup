import React from "react";
import {Route} from 'react-router-dom';
import './index.css'
import Clock from './CLock'

function CalculatorButton() {
  return (
    <Route render={({history}) => (
      <button
        type='button'
        onClick={() => {
          history.push('/calculator')
        }}
      >
        Temperatures Converter
      </button>
    )}/>
  )
}

function StoreButton() {
  return (
    <Route render={({history}) => (
      <button
        type='button'
        onClick={() => {
          history.push('/store')
        }}
      >
        Store
      </button>
    )}/>
  )
}

function GameButton() {
  return (
    <Route render={({history}) => (
      <button
        type='button'
        onClick={() => {
          history.push('/game')
        }}
      >
        Tic-tac-toe
      </button>
    )}/>
  )
}

function DartsCalculator() {
  return (
    <Route render={({history}) => (
      <button
        type='button'
        onClick={() => {
          history.push('/darts')
        }}
      >
        Darts Calculator
      </button>
    )}/>
  )
}

export default function Homepage() {
  return [
    <div id='navbar-container'>
      <nav className="d-flex justify-content-center">
        <StoreButton/>
        <CalculatorButton/>
        <GameButton/>
        <DartsCalculator/>
      </nav>
    </div>,
    <Clock/>
  ]
}



