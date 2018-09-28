import React, { Component } from 'react';

class Gasto extends Component {
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto
        console.log(nombreGasto);
        console.log(cantidadGasto);
        return (
            <li className = "gastos">
                <p>
                    {nombreGasto}
                    <span className = "gasto"> ${cantidadGasto} </span>
                </p>
            </li>
        );
    }
}

export default Gasto;