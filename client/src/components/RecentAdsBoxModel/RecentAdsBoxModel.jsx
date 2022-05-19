import React from 'react'
// import RecentAdsBoxModelCss from './RecentAdsBoxModel.module.scss'
// Components
import AdsBoxModel from '../AdsBoxModel1/AdsBoxModel1'
// import Button from '../button/button'
const RecenAdsBoxModel = () => {
  // const [view, setView] = useState(false)
  // const [viewValue, setViewValue] = useState('VIEW MORE')

  // const channgeView = () => {
  //   setView(!view)
  //   setViewValue('VIEW LESS')
  //   if (view) setViewValue('VIEW MORE')
  // }
  return (
    <div>
      <AdsBoxModel view={false} view2={false} />
      {/* <div className={RecentAdsBoxModelCss.more}>
        <Button viewmore="true" onClick={() => channgeView()}>
          {`${viewValue}`}
        </Button>
      </div> */}
    </div>
  )
}

export default RecenAdsBoxModel
