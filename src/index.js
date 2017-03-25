import React from 'react'
import { render } from 'react-dom'
import { YogaDayCount } from './components/YogaDayCount'

window.React = React

render(
	<YogaDayCount total={30}
				       classStyle="Hatha"
				       classDuration={45}
				       goal={100}
  />,
	document.getElementById('react-container')
)
