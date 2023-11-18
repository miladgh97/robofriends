import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import './App.css'
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry';

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots : [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users =>this.setState({robots:users}))
		
	}

	onSearchChange = (event) => {
		this.setState ({searchfield : event.target.value})
	}

	render(){
		const filteredrobot= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		} else {
			return (
			<div className = 'tc'>
				<h1 className = 'yellow f1'> Robo Friends </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filteredrobot}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);	
		}
		
	}
	
}

export default App