import React from 'react';
import NewsBoxModelCss from './NewsBoxModel.module.css'

import NewsBoxModelGen from '../NewsBoxModelGen/NewsBoxModelGen'
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})
const NewsBoxModel = ({url}) =>{
	return(
    <div className={NewsBoxModelCss.boxmodel}>
        <div className={NewsBoxModelCss.boxmodel_topbar}>
          <div className={NewsBoxModelCss.boxmodel_title}>
            <p>LATEST NEWS</p>
          </div>
          <div className={NewsBoxModelCss.extra} />
          <div className={NewsBoxModelCss.extra} />
          <div className={NewsBoxModelCss.boxmodel_nav}>
            <Link to='#dummy'><img alt='' src="images/leftarrow.png" /></Link>
            <Link to='#dummy'><img alt='' src="images/rightarrow.png" /></Link>
          </div>
        </div>
        <div className={NewsBoxModelCss.boxmodel_body}>
          {
            [...Array(3)].map((i,j) =>
              <NewsBoxModelGen key={j} />
            )
          }
        </div>
    </div>
    )
}

export default  connect(mapStateToProps)(NewsBoxModel);