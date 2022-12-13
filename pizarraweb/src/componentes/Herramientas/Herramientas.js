import React,{Component} from "react";
import Pizarra from "../pizarra/Pizarra";
import './style.css';

class Herramientas extends Component{
    colorSolo;
        constructor(props) {
            super(props);
            this.state = {
                color: "#000000",
                size: "5"
            }
        }
    
        cambiarColor(params) {
            this.setState({
                color: params.target.value
            })
            
        }
        cambiarSoloUnColor(params) {
            console.log("parametroSolo "+ this.colorSolo)
            var n=params
            console.log("parametro "+ params)
            /*this.setState({
                color: params
            })*/
            
        }
    
        cambiarTamano(params) {
            this.setState({
                size: params.target.value
            })
        }
    
    
    
    
        render() {
    
            return (
                <div className="container">
                    
                    <div class="tools-section">
                        <div className="color-picker-container">
                            Seleccion Color : &nbsp; 
                            <input type="color" value={this.state.color} onChange={this.cambiarColor.bind(this)}/>
                        </div>
    
                        <div className="brushsize-container">
                            Selecione  Espesor : &nbsp; 
                            <select value={this.state.size} onChange={this.cambiarTamano.bind(this)}>
                                <option> 5 </option>
                                <option> 10 </option>
                                <option> 15 </option>
                                <option> 20 </option>
                                <option> 25 </option>
                                <option> 30 </option>
                            </select>
                        </div>
    
                    </div>
    
    
                  <br></br>
                  
                    <div class="tools-section">
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <button className="w3-button" href="">
                     deshacer
                    </button>
                    <input type="color" id="btn-color"></input>
                    <button className="w3-button w3-black">
                    </button>
                    <button
                    className="w3-button w3-green"
                    ></button>
                    <button
                    className="w3-button w3-red"
                    ></button>
                    <input type="color" value={'#ffff00'} onChange={this.cambiarSoloUnColor.bind("#ffff00")}/>
                    <button
                    className="w3-button w3-yellow"
                    >oo</button>
                    <button
                    ></button>
                    <button
                      className="w3-button w3-border">
                    <img src="images/borrador.png" alt="" />
                    </button>
                    <button
                    className="w3-button w3-border"
                    >
                    <img src="images/pincel.png" alt="" />
                    </button>
                    <input
                    defaultValue={1}
                    type="range"
                    id="grosor"
                    min={1}
                    max={20}
                    
                    ></input>
                    <button
                    className="w3-button w3-pale-green "
                    >
                    limpiar
                    </button>
                    <button
                    id="descargar"
                    download="imagen.jpg"
                    className="w3-button"
                    >
                    descargar
                    </button>
                    </div>
                <br></br>
                <br></br>
                <br></br>
                    <div class="board-container">
                        <Pizarra color={this.state.color} size={this.state.size}></Pizarra>
                    </div>
                </div>
            )
        }
    }
    
    export default Herramientas