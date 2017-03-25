import DirectionsWalk from 'react-icons/lib/md/directions-walk'
import AvTimer from 'react-icons/lib/md/av-timer'
import CalendarO from 'react-icons/lib/fa/calendar-o'
import CheckCircleO from 'react-icons/lib/fa/check-circle-o'
import { YogaDayRow } from './YogaDayRow'

export const YogaDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Class Style</th>
        <th>Meditative</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <YogaDayRow key={i}
                        {...day}/>
      )}
    </tbody>
  </table>
)
