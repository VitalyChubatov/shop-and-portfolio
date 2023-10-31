import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa/index'

import Order from './Order.js'

const showOrders = (props) => {
	let summa = 0
	props.orders.forEach(el => summa += Number.parseFloat(el.price))
	return (
		<div>	
		{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el.id} item={el}/>
		))}
			<p className='summa'> Сумма: {new Intl.NumberFormat().format(summa)}$</p>
		</div>
	)
}
const showNothing = () => {
	return (
		<div className='nothing'>
			<h2>Список пуст</h2>
		</div>
	)
}

export function Header(props) {
  let [cartOpen,setCartOpen] = useState(false)
  return (
		<header>
			<div>
				<span className='logo'>Home Page</span>
				<ul className='nav'>
					<li href='/'>Про меня</li>
					<li>Контакты</li>
					<li>Меню</li>
					<li>Вход</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartOpen((cartOpen = !cartOpen))}
					className={`shop-cart-button ${cartOpen && 'active'}`}
				/>
				{cartOpen && (
					<div className='shop-cart'>
						{props.orders.length > 0 ? showOrders(props) : showNothing()}
					</div>
				)}
			</div>
			<div className='presentation'></div>
		</header>
	)
}



