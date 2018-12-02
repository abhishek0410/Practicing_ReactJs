import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
    
class NavBar extends Component{
    state = {}
    render(){
        return(<nav className="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
      </nav>);
    }
}

export default NavBar;
