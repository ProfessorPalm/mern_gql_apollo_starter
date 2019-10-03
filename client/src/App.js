import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Books from "./components/Books";

//Create Apollo Client instance and connect it to graphql server
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    //Wrap application with ApolloProvider, similar to Redux
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
