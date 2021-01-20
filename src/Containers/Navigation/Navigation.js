import React from 'react';
import { Nav } from 'react-bootstrap';  
import NavItems from '../../Components/Nav/NavItems/NavItems';
import SideNav from '../../Components/Nav/SideNav/SideNav'


class Navigation extends React.Component{
   
        state = {
            isSideDrawerOpen: false
        };

       componenetWillMount(){
           document.addEventListener('mousedown', this.handleClick, false)
       }
       componenetWillMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }


       handleClick = (e) => {
            if(this.node.contains(e.target)){
                
                return;

            }
       }

    sideDrawerHandler = () => {

        this.setState(prevState => ({ isSideDrawerOpen: !prevState.isSideDrawerOpen }));
        console.log('this is ', this.state.isSideDrawerOpen)
    }
    render() {
        return(
            <div>
                <NavItems clicked={this.sideDrawerHandler} />
                <div ref={node => this.node = node }>
                    <SideNav class={`side ${this.state.isSideDrawerOpen ? "" : "close"}`} />          
                </div>
            </div>
        )
    }
}

export default Navigation;