import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import pizzaData from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Render the DOM in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // In strict mode, components are rendered twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React v18
// ReactDOM.render(<App />, document.getElementById('root'););

function Header() {
  //   const style = { color: "blue", fontSize: "32px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <PizzaCard />
    </main>
  );
}

function PizzaCard() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Footer() {
  // return React.createElement('footer', null, "We're currently open!");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}
