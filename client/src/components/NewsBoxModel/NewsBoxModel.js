import React from 'react';
import './NewsBoxModel.css'

const NewsBoxModel = () =>{
	return(
    <div className="boxmodel news_boxmodel">
        <div className="boxmodel_topbar">
          <div className="boxmodel_title">
            <p>LATEST NEWS</p>
          </div>
          <div className="extra" />
          <div className="extra" />
          <div className="boxmodel_nav">
            <a href='#dummy'><img alt='' src="images/leftarrow.png" /></a>
            <a href='#dummy'><img alt='' src="images/rightarrow.png" /></a>
          </div>
        </div>
        <div className="boxmodel_body news_boxmodel_body">
          <div className="newscards">
            <div className="newsimg">
              <div className="newsdate">
                <p>19 November 2019</p>
              </div>
            </div>
            <div className="namecomment">
              <div className="name">
                <div className="userlogo">
                  <img alt='' src="images\user.png" />
                </div>
                <div className="username">Malik Anees</div>
              </div>
              <div className="comment">
                <div className="commentlogo">
                  <img alt='' src="images\comments.png" />
                </div>
                <div className="username">Comments (2)</div>
              </div>
            </div>
            <div className="newstitle">
              <h4><a href='#dummy'> Powerfull and flexible Machines </a></h4>
            </div>
            <div className="newsdesp">
              <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.</p>
            </div>
          </div>
          <div className="newscards">
            <div className="newsimg">
              <div className="newsdate">
                <p>19 November 2019</p>
              </div>
            </div>
            <div className="namecomment">
              <div className="name">
                <div className="userlogo">
                  <img alt='' src="images\user.png" />
                </div>
                <div className="username">Malik Anees</div>
              </div>
              <div className="comment">
                <div className="commentlogo">
                  <img alt='' src="images\comments.png" />
                </div>
                <div className="username">Comments (2)</div>
              </div>
            </div>
            <div className="newstitle">
              <h4><a href='#dummy'> Powerfull and flexible Machines </a></h4>
            </div>
            <div className="newsdesp">
              <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.</p>
            </div>
          </div>
          <div className="newscards">
            <div className="newsimg">

              <div className="newsdate">
                <p>19 November 2019</p>
              </div>
            </div>
            <div className="namecomment">
              <div className="name">
                <div className="userlogo">
                  <img alt='' src="images\user.png" />
                </div>
                <div className="username">Malik Anees</div>
              </div>
              <div className="comment">
                <div className="commentlogo">
                  <img alt='' src="images\comments.png" />
                </div>
                <div className="username">Comments (2)</div>
              </div>
            </div>
            <div className="newstitle">
              <h4><a href='#dummy'> Powerfull and flexible Machines </a></h4>
            </div>
            <div className="newsdesp">
              <p>This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.Proin gravida nibh vel velit auctor aliqut. Aenea solicitun.</p>
            </div>
          </div>
        </div>
    </div>
    )
}

export default NewsBoxModel;