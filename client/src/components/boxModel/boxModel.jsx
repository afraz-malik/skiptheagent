import React from 'react'
import BoxModelCss from './boxModel.module.css'

class BoxModel extends React.Component {
  render() {
    return (
      <div
        className={BoxModelCss.boxmodel}
        style={{ border: this.props.borderOff ? '' : '1px solid lightgrey' }}
      >
        <div className={BoxModelCss.boxmodel_topbar}>
          <div className={BoxModelCss.boxmodel_title}>
            <p>{this.props.title}</p>
          </div>
          <div className={BoxModelCss.extra} />
          <div className={BoxModelCss.extra} />

          {this.props.sidebar === 'arrow' && (
            <div className={BoxModelCss.boxmodel_nav}>
              <div
                className={BoxModelCss.arrow}
                onClick={() => this.props.scrollRight()}
              >
                <img alt="" src="images\leftarrow.png" />
              </div>
              <div
                className={BoxModelCss.arrow}
                onClick={() => this.props.scrollLeft()}
              >
                <img alt="" src="images\rightarrow.png" />
              </div>
            </div>
          )}
          {this.props.sidebar === 'cancel' && (
            <div className={BoxModelCss.cancel}>
              <img
                alt=""
                src="images\cancel.png"
                onClick={() => this.props.closeBox()}
              />
            </div>
          )}
          {this.props.sidebar === 'alert' && (
            <div className={BoxModelCss.alert}>
              + <span onClick={() => this.props.onAlert()}>ADD ALERT</span>
            </div>
          )}

          {this.props.sortBox === true && (
            <div className={BoxModelCss.sortby}>
              <div className={BoxModelCss.sortby_text}>
                <p>SORT BY:</p>
              </div>
              <div className={BoxModelCss.sortby_box}>
                <select
                  name="cars"
                  id="city"
                  value={this.props.filters.sortyBy}
                  onChange={(e) =>
                    this.props.handleFilters('sortBy', e.target.value)
                  }
                >
                  <option value="recent">Updated Date: Recent first</option>
                  <option value="popularity">Popularity</option>
                  <option value="price-high">Price High</option>
                  <option value="price-low">Price Low</option>
                </select>
              </div>
            </div>
          )}
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default BoxModel
