import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={each.id} projectDetails={each} />
    } else {
      return <CourseTimelineCard key={each.id} courseDetails={each} />
    }
  }
  return (
    <div className="TimelineView_container">
      <div className="responsive_container">
        <div className="header_container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="ccbp_heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
