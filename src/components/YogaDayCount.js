import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
  }

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
  }

export const YogaDayCount = ({total, classStyle, classDuration, goal}) => (
			<div className="yoga-day-count">
				<div className="total-days">
					<span>{total} Total Days of Yoga Practice</span>
				</div>
				<div className="class-style">
          <span>Style: {classStyle}</span>
				</div>
				<div className="class-duration">
          <span>{classDuration} Minutes</span>
				</div>
        <div>
          <span>
            Goal Progress: {calcGoalProgress(
              total,
              goal
            )}
          </span>
        </div>
			</div>
)
