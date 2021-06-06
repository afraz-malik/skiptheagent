import React from 'react';
import BoxModelCss from './boxModel.module.css'

class BoxModel extends React.Component {
    render() {
        return (
            <div className={BoxModelCss.boxmodel}>
                <div className={BoxModelCss.boxmodel_topbar}>
                    <div className={BoxModelCss.boxmodel_title}>
                        <p>Title</p>
                    </div>
                    <div className={BoxModelCss.extra} />
                    <div className={BoxModelCss.extra} />
                </div>
                {this.props.children}
            </div>
        )
    }
}
export default BoxModel