import React, {Component} from 'react'

import {Link} from 'react-router-dom'


class Header extends Component { 
	render (){
		return (		
      <div>
        <div className="flybox">
      	 
        </div>
        <Link to='/'>Home</Link> 
        
        
        
        <Link to={'/dashboard'}> dashboard </Link>
        <Link to={'/spot'}> add </Link>       
       </div>    
    )
	}	
}

export default Header;