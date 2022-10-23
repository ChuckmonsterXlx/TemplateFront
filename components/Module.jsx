// React dependecies
const { useState, useEffect, createContext, useContext, useRef } = React;

const App = () => {

    return (
        <div>
            <Compo />
        </div>
    )
}

const Compo = () => {
    return (
        <h2>hola aca estoy render</h2>
    );
}


// Rendering
const module = document.querySelector('#modulo');
ReactDOM.render(<App />, module);