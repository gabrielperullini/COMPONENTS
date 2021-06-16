//DESTRUCTURING
import React, { Component } from "react";
import "./styles.css";

let nombre = "GABRIEL PERULLINI";
let edad = "34";

const styles = {
  h1: {
    color: "magenta"
  },
  h2: {
    color: "red"
  },
  p: {
    backgroundColor: "black",
    color: "white",
    fontSize: 40
  }
};

export default class App extends React.Component {
  render() {
    return (
      //<Fragment> EL SINONIMO ES HACER <> </> Y NO HACE FALTA EL DESTRUCTURING DE FRAGMENT
      <div className="App">
        <div className="container">
          <h1 id="title" style={styles.h1}>
            React: Js Clase 03
          </h1>
          <div className="row">
            <h2 style={styles.h2}>JSX</h2>
            <p style={styles.p}>NOMBRE : {nombre}</p>
            <p style={styles.p}>EDAD : {edad}</p>
          </div>
        </div>
      </div>
      //</Fragment>
    );
  }
}
//export default App; pero hice el export en la clase
