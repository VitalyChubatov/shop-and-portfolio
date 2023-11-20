import React , { Component } from 'react'

export class Item extends Component {
  render() {
	return (
		<div className='item'>
			<div>
				<img src={'./img/' + this.props.item.img} alt='.' />
				<h3>{this.props.item.title}</h3>
				<p>Описание:{this.props.item.desc}</p>
				<p>Категория:{this.props.item.category}</p>
				<p className='pP'>{this.props.item.price}$</p>
				<button onClick={() => this.props.onAdd(this.props.item)}>Корзина</button>
			</div>
		</div>
	)
}
}



export default Item