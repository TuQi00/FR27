import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let bg = "yellow";
const root = ReactDOM.createRoot(document.getElementById('root'));

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor() {
  bg = generateRandomColor(); 
  MyApp();
}

function MyApp() {
  const element = (
    <h1 style={{ color: "red", backgroundColor: bg }}
      onClick={changeColor}
    >
      Bye, Kmin

    </h1>
  );
  root.render(element);
}
MyApp()


