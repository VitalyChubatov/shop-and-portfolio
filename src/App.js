
import Categories from './components/Categories';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import  Items  from './components/Items.js'
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					title: 'Cтул серый',
					img: 'chair-grey.jpeg',
					desc: 'Какой то текст',
					category: 'chairs',
					price: '49,99',
				},
				{
					id: 2,
					title: 'Стул белый',
					img: 'chair-white.jpeg',
					desc: 'Какой то текст',
					category: 'chairs',
					price: '49,99',
				},
				{
					id: 22,
					title: 'Стул белый',
					img: '100034342700b0.webp',
					desc: 'Какой то текст',
					category: 'chairs',
					price: '49,99',
				},
				{
					id: 3,
					title: 'Диван',
					img: 'sofa.jpeg',
					desc: 'Какой то текст',
					category: 'sofa',
					price: '566,99',
				},
				{
					id: 4,
					title: 'Стол',
					img: 'table.webp',
					desc: 'Какой то текст',
					category: 'tables',
					price: '49,99',
				},
				{
					id: 5,
					title: 'Свет',
					img: 'wall-light.jpeg',
					desc: 'Какой то текст',
					category: 'light',
					price: '49,99',
				},
				{
					id: 6,
					title: 'Диван',
					img: 'sofa.jpeg',
					desc: 'Какой то текст',
					category: 'sofa',
					price: '566,99',
				},
				{
					id: 7,
					title: 'Стол',
					img: 'orig.webp',
					desc: 'Какой то текст',
					category: 'tables',
					price: '49,99',
				},
				{
					id: 8,
					title: 'Свет',
					img: 'wall-light.jpeg',
					desc: 'Какой то текст',
					category: 'light',
					price: '49,99',
				},
				{
					id: 9,
					title: 'Диван',
					img: 'sofa.jpeg',
					desc: 'Какой то текст',
					category: 'sofa',
					price: '566,99',
				},
				{
					id: 10,
					title: 'Стол',
					img: 'table.webp',
					desc: 'Какой то текст',
					category: 'tables',
					price: '49,99',
				},
				{
					id: 11,
					title: 'Свет',
					img: 'wall-light.jpeg',
					desc: 'Какой то текст',
					category: 'light',
					price: '49,99',
				},
			],
		}
		this.state.currentItems = this.state.items
		this.addToOrder =this.addToOrder.bind(this)//посмотреть
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
	
  }
  render() {
     return (
        <div className='wrapper'>
				<Header addSum={this.sum} orders={this.state.orders} onDelete={this.deleteOrder}/>
				<Categories chooseCategory={this.chooseCategory}/>
				<Items items = {this.state.currentItems} onAdd ={this.addToOrder}/>
				<Footer/>
        </div>
      )
}

chooseCategory (category){
	if (category === 'all') {
		return this.setState({currentItems: this.state.items})
	}
	this.setState({
		currentItems: this.state.items.filter(el => el.category === category)
	})

}

deleteOrder(id) {

	this.setState({orders: this.state.orders.filter(el => el.id !== id)})

}

addToOrder(item) {
let isInArray = false
	this.state.orders.forEach(el =>{
		if(el.id === item.id)
		isInArray = true
	})
	if(!isInArray)
 this.setState({orders: [...this.state.orders, item]})
}
}



export default App;
