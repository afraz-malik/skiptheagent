import React from 'react'
import RulesBoxCss from './RulesBox.module.scss'

const RulesBox = ({ city1, city2 }) => {
  return (
    <div className={RulesBoxCss.rulebox}>
      <div className={RulesBoxCss.insiderulebox}>
        <p>Rules of City 1</p>
        <div className={RulesBoxCss.rules}>
          {city1 && city2 ? (
            <ul>
              <li>
                <p>
                  <b>{city1}</b> habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, <b>{city1}</b> eget, tempor sit amet, ante.
                  Donec eu libero sit amet <b>{city1}</b> egestas semper. Aenean
                  ultricies mi vitae est.
                </p>
              </li>
              <li>
                <p>
                  <b>{city1}</b> placerat eleifend leo. Quisque sit amet est et
                  sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                  sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                  elit eget tincidunt <b>{city1}</b>, eros ipsum rutrum orci,
                  sagittis tempus lacus enim ac dui.
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  Donec non enim in turpis pulvinar <b>{city1}</b>. Ut felis.
                  Praesent dapibus, neque id cursus faucibus, tortor neque
                  egestas <b>{city1}</b>, eu vulputate magna eros eu erat.
                  Aliquam erat volutpat. Nam dui mi, <b>{city1}</b> quis,
                  accumsan porttitor, faci<b>{city1}</b>lisis luctus, metus
                </p>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={RulesBoxCss.insiderulebox}>
        <p>Rules of City 2</p>
        <div className={RulesBoxCss.rules}>
          {city1 && city2 ? (
            <ul>
              <li>
                <p>
                  <b>{city2}</b> habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est.
                </p>
              </li>
              <li>
                <p>
                  Mauris placerat <b>{city2}</b> leo. Quisque sit amet est et
                  sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                  sed,
                  <b>{city2}</b> vitae, ornare sit amet, wisi. Aenean fermentum,
                  elit eget tincidunt condimentum, eros ipsum <b>{city2}</b>{' '}
                  orci, sagittis tempus lacus enim ac dui.
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  Donec non enim in turpis pulvinar facilisis. Ut felis.
                  Praesent <b>{city2}</b>, neque id cursus faucibus, tortor
                  neque egestas augue, eu vulputate magna eros eu erat. Aliquam
                  erat volutpat. Nam dui mi, tincidunt <b>{city2}</b>, accumsan
                  porttitor, facilisis luctus, metus
                </p>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default RulesBox
