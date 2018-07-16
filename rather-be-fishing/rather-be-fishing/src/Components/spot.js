import React, { Component } from 'react';
import axios from 'axios';


class Spot extends Component {

  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      species: '',
      post: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

  }

  onInputChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault()

    let newSpot = {
      name: this.state.name,
      description: this.state.description,
      species: this.state.species,
    }
    if (event.target.name.value !== '') {
      axios.post('https://boiling-wildwood-87428.herokuapp.com/spots', newSpot).then((res) => {
//      axios.post('localhost:3001/spots', newSpot).then((res) => {
      
//      console.log(event.target.name.value)
      console.log(newSpot)
    })
        this.setState({
          name: '',
          description: '',
          species: '',
          post: 'new spot added'
        })
    } else {this.setState({
          post: 'no value entered'
    })    
  }
}


	render() {
    return (
      <div className='river'>
      	<div className='textbox'>
	      	<h3>Contact Us</h3>
	      	<p>Fill in the blanks below and we'll get back to you ASAP</p>
	      	<p>{this.state.post}</p>
      	</div>
        <form className='container' onSubmit={ this.onFormSubmit }>
        	<div className="form-row ">
    				<div className="form-group col-md-6">
      				<input
      				 type="text"
      				 name='name'
      				 onChange={ this.onInputChange } 
      				 className="form-control" 
      				 placeholder="place" 
      				 value={this.state.name}/>
    				</div>
    			<div className="form-group col-md-6">
      				<input 
      				type="text" 
      				name='description'
      				onChange={ this.onInputChange }
      				className="form-control" 
      				placeholder="description"
      				value={this.state.description}/>
      			</div>		
      		<div className="form-group col-md-6">
      				<input
      				type="text"
      				name='species'
      				className="form-control"
      				onChange={this.onInputChange}
      				value={this.state.species}
      				placeholder="species"
      				/>
      				

    			</div>
  			</div>
        	<button type='submit' className="btn btn-primary">Send it</button>
        </form>
      </div>  
    );
  }
}

export default Spot;
