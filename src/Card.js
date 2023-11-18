import React from 'react';

const Card = ({id , name , email}) =>{
	return (
		<div className = 'bg-light-pink dib br3 tc pa3 ma2 grow bw2 shadow-5'>
			<img alt = 'robofriend' src = {`https://robohash.org/${id}?400*400`}/>
			<h2 >{name}</h2>
			<p>{email}</p>

		</div>
		
	)
}

export default Card