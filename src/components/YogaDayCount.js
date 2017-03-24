import React from 'react'
import '../stylesheets/ui.scss'

export const YogaDayCount = React.createClass({
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
	render() {
		return (
			<div className="yoga-day-count">
				<div className="total-days">
					<span>{this.props.total} Total Days of Yoga Practice</span>
				</div>
				<div className="class-style">
          <span>Style: {this.props.classStyle}</span>
				</div>
				<div className="class-duration">
          <span>{this.props.classDuration} Minutes</span>
				</div>
        <div>
          <span>
            Goal Progress: {this.calcGoalProgress(
              this.props.total,
              this.props.goal
            )}
          </span>
        </div>
			</div>
		)
	}
})
