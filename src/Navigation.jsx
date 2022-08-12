// import React, { useState } from 'react'


export default function Navigation(props) {
  const {state, setState} = props

  const toggleElement = (element) => {
    state[element] ? setState((prev) => ({...prev, [element]: false})) : setState((prev) => ({...prev, [element]: true}))
  }

  const toggleObject = (element, subElement) => {
    state[element][subElement] ? setState((prev) => ({...prev, [element]: {...prev[element], [subElement]: false}})) : setState((prev) => ({...prev, [element]: {...prev[element], [subElement]: true}}))
  }

  return(
    <nav>
      {/* <button>Products</button> */}
      <button onClick={() => toggleObject("wiki", "display")} className={state.wiki.display ? 'selected' : null}>Wikipedia</button>
      <button onClick={() => toggleElement("catFact")} className={state.catFact ? 'selected' : null}>Cat Fact</button>
      <button onClick={() => toggleElement("xkcd")} className={state.xkcd ? 'selected' : null}>XKCD</button>
      <button onClick={() => toggleElement("fox")} className={state.fox ? 'selected' : null}>Fox</button>
      <button onClick={() => toggleElement("dog")} className={state.dog ? 'selected' : null}>Dog</button>
      <button onClick={() => toggleElement("satellite")} className={state.satellite ? 'selected' : null}>Satellite Pic</button>
      <button onClick={() => toggleElement("animals")} className={state.animals ? 'selected' : null}>Animals</button>
      <button onClick={() => toggleElement("quote")} className={state.quote ? 'selected' : null}>Quotes</button>
      <button onClick={() => toggleElement("user")} className={state.user ? 'selected' : null}>Users</button>
    </nav>
  )
}