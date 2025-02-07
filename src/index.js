import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* Conditional Rendering with && Operator */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* Conditional Rendering with ternaries (if/else) */}
      {numPizzas > 0 ? (
        //React Fragment
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later. :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject);

  // Conditional Rendering With Multiple Returns
  // if (pizzaObject.soldOut) return null;

  return (
    // Conditional Setting CSS Classes on to elements
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {/* Conditional Setting the Text Content of An Element */}
        <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // return React.createElement('footer', null, "We're currently open!");
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // Conditional Rendering with Multiple Returns
  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {/* Conditional Rendering with && Operator */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* Contional Rendering with ternaries (if/else) */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  console.log(closeHour);
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
