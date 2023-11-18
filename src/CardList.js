import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
	const listComponent = robots.map((user , i) => {
		return ( <Card 
		key = {i} 
		id = {robots[i].id} 
		name = {robots[i].name} 
		email = {robots[i].email}
		/>
		);

	})
	return (
		<div>
			{listComponent}
		</div>
	)
}

export default CardList