import '../stylesheets/ui.scss'
import DirectionsWalk from 'react-icons/lib/md/directions-walk'
import AvTimer from 'react-icons/lib/md/av-timer'
import CalendarO from 'react-icons/lib/fa/calendar-o'
import CheckCircleO from 'react-icons/lib/fa/check-circle-o'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
  }

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

export const YogaDayCount = ({total, classStyle, classDuration, goal}) => (
			<div className="yoga-day-count">
				<div className="total-days">
					<span>
            <CalendarO />
            {total} Total Days of Yoga Practice
          </span>
				</div>
				<div className="class-style">
          <DirectionsWalk />
          <span>Style: {classStyle}</span>
				</div>
				<div className="class-duration">
          <AvTimer />
          <span>{classDuration} Minutes</span>
				</div>
        <div>
          <CheckCircleO />
          <span>
            Goal Progress: {calcGoalProgress(
              total,
              goal
            )}
          </span>
        </div>
			</div>
)
