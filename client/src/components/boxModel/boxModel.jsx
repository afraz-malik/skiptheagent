import React from 'react'
import BoxModelCss from './boxModel.module.css'

class BoxModel extends React.Component {
  render() {
    return (
      <div className={BoxModelCss.boxmodel}>
        <div className={BoxModelCss.boxmodel_topbar}>
          <div className={BoxModelCss.boxmodel_title}>
            <p>{this.props.title}</p>
          </div>
          <div className={BoxModelCss.extra} />
          <div className={BoxModelCss.extra} />
          {this.props.sidebar === 'arrow' ? (
            <div className={BoxModelCss.boxmodel_nav}>
              <div
                className={BoxModelCss.arrow}
                onClick={() => this.props.scrollRight()}
              >
                <img alt="" src="\images\leftarrow.png" />
              </div>
              <div
                className={BoxModelCss.arrow}
                onClick={() => this.props.scrollLeft()}
              >
                <img alt="" src="\images\rightarrow.png" />
              </div>
            </div>
          ) : null}
          {this.props.sidebar === 'cancel' ? (
            <div className={BoxModelCss.cancel}>
              <img
                alt=""
                src="\images\cancel.png"
                onClick={() => this.props.closeBox()}
              />
            </div>
          ) : null}
          {this.props.sidebar === 'alert' ? (
            <div className={BoxModelCss.alert}>
              + <span onClick={() => this.props.onAlert()}>ADD ALERT</span>
            </div>
          ) : null}
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default BoxModel
