
import React from "react";
import '../button/Button.css';

class Button extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log("Click ! ")
    }

    render() {

        return (
            <div className = "ctn-button" >
                <button onClick={this.handleClick}>Enviar</button>
            </div>
        )
    }
};

export default Button;