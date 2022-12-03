// Import custom methods
import { localData, dateChangeFormat } from "../../globals/CustomHooks";
import { ButtonOffcanvasEnd, OfcanvasEnd } from "../../globals/CustomComponents";

// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

const App = () => {

    return (
        <div>
            <SecondComponent/>
        </div>
    )
}

const SecondComponent = () => {
    return (
        <div>
            <h3 className="titleTab">Datos de tu negocio</h3>
            <div className="d-flex imgRowUpload">
                <div className="imgTabContainer">
                    <div className="imgContainerBG"></div>
                </div>
                <div className="btnTabContainer">
                    <div className="btnsContainerDiv">
                        <button className="btnGlobal btnBlue">Subir nuevo logo</button>
                        <button className="btnGlobal btnWhite">Subir</button>
                    </div>
                    <p>Formatos permitidos: JPG, PNG o GIF. Tamaño máximo de 10MB</p>
                </div>
            </div>
            <div className="formRow">
                <form className="row">
                    <div className="d-flex flex-column col-6 divColForm">
                        <label htmlFor="name">Nombre del negocio</label>
                        <input type="text" name="name" onChange={validationLengthInput}></input>
                    </div>
                    <div className="d-flex flex-column col-6 divColForm">
                        <label htmlFor="address">Dirección</label>
                        <input type="text" name="address" onChange={validationLengthInput}></input>
                    </div>
                    <div className="d-flex flex-column col-6 divColForm">
                        <label htmlFor="instagram">Instagram @</label>
                        <input type="text" name="instagram" onChange={validationLengthInput}></input>
                    </div>
                    <div className="d-flex flex-column col-6 divColForm">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="number" name="whatsapp" onChange={validationLengthInput}></input>
                    </div>
                    <div className="col-12">
                        <input className="btnGlobal btnBlue" type="submit" value="Guardar cambios"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

function validationLengthInput(event) {
    if(event.target.value.length != 0) {
        event.target.style.backgroundColor = "#d3d3ec";
    } else {
        event.target.style.backgroundColor = "white";
    }
}

const FirstComponent = () => {
    return (
        <h2>React CDN </h2>
    );
}


// Rendering
const module = document.querySelector('#modulo');
ReactDOM.render(<App />, module);