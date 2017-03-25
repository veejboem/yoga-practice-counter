import DirectionsWalk from 'react-icons/lib/md/directions-walk'
import AvTimer from 'react-icons/lib/md/av-timer'
import CalendarO from 'react-icons/lib/fa/calendar-o'
import CheckCircleO from 'react-icons/lib/fa/check-circle-o'

export const YogaDayRow = ({ location,
                              date, classStyle,meditative,
                              duration
                            }) => (
    <tr>
      <td>
        {date.getMonth()+1}/{date.getDate()}/
        {date.getFullYear()}
      </td>
      <td>
        {location}
      </td>
      <td>
        {classStyle}
      </td>
      <td>
       {(meditative) ? <AvTimer  /> : null}
      </td>
      <td>
        {duration}
      </td>
    </tr>

)
