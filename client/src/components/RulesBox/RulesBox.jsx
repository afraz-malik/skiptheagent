import React from 'react'
import RulesBoxCss from './RulesBox.module.scss'

const RulesBox = () => {
  return (
    <div className={RulesBoxCss.rulebox}>
      <div className={RulesBoxCss.insiderulebox}>
        <p>Rules of City 1</p>
        <div className={RulesBoxCss.rules}></div>
      </div>
      <div className={RulesBoxCss.insiderulebox}>
        <p>Rules of City 2</p>
        <div className={RulesBoxCss.rules}></div>
      </div>
    </div>
  )
}

export default RulesBox
