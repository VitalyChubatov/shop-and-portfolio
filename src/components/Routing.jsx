import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from '../App'
import { About } from './LINKS/About'
import { Contacts } from './LINKS/Contacts'

export const Routing = () => {
  return (
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/about' element={<About />} />
			<Route path='/contacts' element={<Contacts/>} />
		</Routes>
	)
}
