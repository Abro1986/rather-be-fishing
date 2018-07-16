import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {

	constructor(props){
		super(props)

		this.state = {
			spots : {
					data: []
			}
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}



	componentDidMount(){
		axios.get('https://boiling-wildwood-87428.herokuapp.com/allspots').then((res) => {
			console.log(res.data.spots);
			this.setState({
				spots: {
					data: res.data.spots
				}
			})
		})
//		console.log(this.state)
	}

	deletePost(e){
		e.preventDefault();
		let targetData = e.target.getAttribute('data')
		axios.delete(`https://boiling-wildwood-87428.herokuapp.com/spots/${targetData}`).then((res)=> {
			console.log(res.data.spots)
			// this.setState({
			// 	spots: {
			// 		data: res.data.spots
			// 	}
			// })
		})
	}

	render() {
		let listOfSpots = this.state.spots.data.map((spotObject, index)=> {
			return <li key={index}>
						 <h4>{spotObject.name}</h4>
						 <h5>{spotObject.description}</h5>
						 <h6>{spotObject.species}</h6>
						 <h6>Temperature: {spotObject.weather.temperature}</h6>
						 <h6>location: {spotObject.location.lat}, {spotObject.location.lng}</h6>
						 <button onClick={this.deletePost}  type='button' data= {spotObject._id}>delete</button>
			</li>			 
		}) 
		return(
			<div>
				<h1>List of Spots</h1>
				<ul>{listOfSpots}</ul>
				<h1> Dashboard </h1>
			</div>
		)
	}
}

export default Dashboard