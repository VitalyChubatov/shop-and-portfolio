import React from 'react'
import { Header } from '../Header'
import { FaGithub, FaMailBulk,FaTelegram } from 'react-icons/fa'
import { Footer } from '../Footer'

export const Contacts = () => {
  return (
		<div className='about'>
			<Header />
			<div className='about-disp'>
				<div className='about-display'>
					<FaMailBulk className='github-btn' />
					<br />
					<p>Почта: chubatovvv@bk.ru</p>
					<a href='https://e.mail.ru/inbox/' className='about-btn'>
						Написать
					</a>
				</div>

				<div className='about-display2'>
					<FaGithub className='github-btn' />

					<br />
					<p>Я в на github</p>
					<a
						href='https://github.com/VitalyChubatov?tab=repositories'
						className='about-btn'
					>
						Перейти
					</a>
				</div>

				<div className='about-display3'>
					<FaTelegram className='github-btn' />
					<br />
					<p>Я в телеграмм</p>
					<a
						href='https://t.me/houldC'
						className='about-btn'
					>
						Перейти
					</a>
				</div>
			</div>
			<Footer />
		</div>
	)
}
