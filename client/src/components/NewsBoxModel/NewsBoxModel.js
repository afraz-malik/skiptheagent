import React from 'react';
import NewsBoxModelCss from './NewsBoxModel.module.css'

import NewsBoxModelGen from '../NewsBoxModelGen/NewsBoxModelGen'

const NewsBoxModel = () =>{
	return(
    <div className={NewsBoxModelCss.boxmodel}>
        <div className={NewsBoxModelCss.boxmodel_topbar}>
          <div className={NewsBoxModelCss.boxmodel_title}>
            <p>LATEST NEWS</p>
          </div>
          <div className={NewsBoxModelCss.extra} />
          <div className={NewsBoxModelCss.extra} />
          <div className={NewsBoxModelCss.boxmodel_nav}>
            <a href='#dummy'><img alt='' src="images/leftarrow.png" /></a>
            <a href='#dummy'><img alt='' src="images/rightarrow.png" /></a>
          </div>
        </div>
        <div className={NewsBoxModelCss.boxmodel_body}>
          {
            [...Array(3)].map((i) =>
              <NewsBoxModelGen key={i} />
            )
          }
        </div>
    </div>
    )
}

export default NewsBoxModel;