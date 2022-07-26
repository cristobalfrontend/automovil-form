import React from "react";
import '../select/Select.css'

class Select extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            variable: "test",
            numerico: 0
        }
    }
    
    render (){
        return (  
            <div className="ctn-select">

                <label>{this.props.name}</label>

                {this.props.items === undefined && (console.log('Un elemento select sin datos.'))} 
                

                {this.props.items !== undefined && (
                    <select>
                    <option hidden>Seleccione un Item</option>
                    {this.props.items.map( item => {
                        return (<option key={item.key}>{item.nombre}</option>)
                    })};
                </select>
                )}
            </div>
        )
    }
};

export default Select;