import React, {Component} from 'react';
import './styles.css';
import Newss from './Newss';
    
class Nav extends Component {
    render() {
        return (
            <div>
                <meta http-equiv="refresh" content="2"/>
            <Newss newss={this.state.newss} />
            </div>   
        )
    }    
    state = {
        newss: []
    };
 
    componentDidMount() {
        fetch("http://api.mediastack.com/v1/news?access_key=8f7856dda49fdc3423b3aec4636b5835&languages=en&limit=5")
            .then(res => res.json())
            .then((res) => {
                this.setState({ newss: res.data })
            })
            .catch(console.log)
    }
}
export default Nav;