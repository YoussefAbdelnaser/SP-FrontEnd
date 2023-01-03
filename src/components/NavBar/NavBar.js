import React, { Component } from "react";
import './NavBarStyles.css'



class NavBar extends Component{
    state={clicked: false}
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <>
        <div className="conatiner">
            <nav>
                <a href="index.html">
                    <img id="logo" src="https://i.pinimg.com/originals/eb/07/9a/eb079acaa15d96de99453600d32ada7d.png"/>
                </a>
                <div>
                    <ul id="navbar" className={this.state.clicked ? " #navbar active" :"#navabr"}>
                        <li><a href="index.html">Shop</a></li>
                        <li><a href="index.html">Reservations</a></li>
                        <li><a href="index.html">Status</a></li>
                        <li><a href="index.html">Analytics</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </div>
        </>
    )
}
}

export default NavBar;