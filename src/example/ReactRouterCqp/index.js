import React, { Component } from "react";
import { render } from "react-dom";
import  Main from "./component/Main"
import './main.css';


const DOM = document.getElementById("app");

const renderDOM = () => {
    render(<Main />, DOM);
};


if(module.hot){
    module.hot.accept(["./component/Main.js"], () => {
        renderDOM()
    });
}


renderDOM();
