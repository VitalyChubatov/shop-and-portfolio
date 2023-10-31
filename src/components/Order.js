import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
 
export class Order extends Component {
  render() {
    return (
        <div className='items'>
				<img src={'./img/' + this.props.item.img} />
			<div className='items_title'>
				<h3>{this.props.item.title}</h3>
				<p>Категория:{this.props.item.category}</p>
				<p className='pP'>{this.props.item.price}$</p>
                <FaTrash className='delete0' onClick={()=> {
                    this.props.onDelete(this.props.item.id)
                }} />
			</div>

        </div>
		)
  }
}

export default Order