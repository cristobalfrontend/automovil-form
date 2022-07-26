
import React from "react";
import '../input/Inputs.css'

class Input extends React.Component {

    render  () {
        let handleChange = (event) => {
            console.log(event.target.value)
        };

        return (
            <div className="ctn-inputs">
                <label>{this.props.name}</label>
                <input onChange={handleChange} type={this.props.types === 'text' ? 'text' : 'number'}></input>
            </div>
        )
    }
};

export default Input;