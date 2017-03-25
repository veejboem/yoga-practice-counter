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

const addCalDay = () => {
  var counter = 30;
  var MonthCountdown = setInterval(function(){
      console.log(counter);
      counter--;
    if (counter === 0) {
      console.log("HAPPY NEW MONTH!!");
      clearInterval(MonthCountdown);
    }
  }, 1000);
  return MonthCountdown;
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
        <div className="goal">
          <CheckCircleO />
          <span>
            Progress to Goal: {calcGoalProgress(
              total,
              goal
            )}
          </span>
        </div>
        <span>There are_{addCalDay()}_days left of the challenge.</span>
			</div>
)
