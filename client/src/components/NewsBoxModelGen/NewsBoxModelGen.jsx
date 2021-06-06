import React from 'react';

import NewsBoxModelGenCss from './NewsBoxModelGen.module.css'
//Router
import {Link} from 'react-router-dom'
//Redux
import {connect} from 'react-redux'

const mapStateToProps=(state)=>({
  url: state.URLReducer.url
})


const NewsBoxModelGen = ({url}) => {
    return (
        <div className={NewsBoxModelGenCss.newscards}>
            <div className={NewsBoxModelGenCss.newsimg}>
                <div className={NewsBoxModelGenCss.newsdate}>
                    <p>19 November 2019</p>
                </div>
            </div>
            <div className={NewsBoxModelGenCss.namecomment}>
                <div className={NewsBoxModelGenCss.name}>
                    <div className={NewsBoxModelGenCss.userlogo}>
                        <img alt='' src="images\user.png" />
                    </div>
                    <div className={NewsBoxModelGenCss.username}>Malik Anees</div>
                </div>
                <div className={NewsBoxModelGenCss.comment}>
                    <div className={NewsBoxModelGenCss.commentlogo}>
                        <img alt='' src="images\comments.png" />
                    </div>
                    <div className={NewsBoxModelGenCss.username}>Comments (2)</div>
                </div>
            </div>
            <div className={NewsBoxModelGenCss.newstitle}>
                <h4><Link to='#dummy'> Powerfull and flexible Machines </Link></h4>
            </div>
            <div className={NewsBoxModelGenCss.newsdesp}>
                <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.</p>
            </div>
        </div>

    )
}
export default connect(mapStateToProps)(NewsBoxModelGen)