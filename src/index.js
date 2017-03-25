import React from 'react'
import { render } from 'react-dom'
import { YogaDayList } from './components/YogaDayList'

window.React = React

render(
	<YogaDayList days={
    [
      {
        date: new Date("3/26/2017"),
        location: "Home",
        classStyle: "Hatha",
        meditative: false,
        duration: 35
      },
      {
        date: new Date("3/28/2017"),
        location: "Studio",
        classStyle: "Ashtanga",
        meditative: false,
        duration: 46
      },
      {
        date: new Date("3/30/2017"),
        location: "Class",
        classStyle: "Hatha",
        meditative: true,
        duration: 60
      }
    ]
  }/>,
	document.getElementById('react-container')
)
