import React from 'react'
import { Header } from '../Header'
import { FaAddressBook,FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { Footer } from '../Footer'

export const About = () => {
  return (
		<div className='about'>
			<Header />
			<div className='about-me'>
				Всем привет,начал свое обучение Frontend-разработке ровно 1 год назад,
				активно изучаю все технологии , на данный момент мне 24 года, ранее
				работал по другому направлению и понял что это не мое,<br/>
        решил Войти в АйТи <br/>сейчас же ищу хорошую команду,где хочется получить опыт,умею
				работать на <br/> HTML <FaHtml5/> Css <FaCss3Alt/> Js <FaJs/> React <FaReact/>Git <FaGithub/>
      
				,есть несколько пет проектов которые делал сам для себя,посмотреть их можно во вкадке<br/> про меня <FaAddressBook/>
			</div>
      <Footer/>
		</div>
	)
}
