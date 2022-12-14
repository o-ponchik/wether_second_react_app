import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://lighthearted-pony-a59add.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariia Matviian
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/o-ponchik/wether_second_react_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub .
        </footer>
      </div>
    </div>
  );
}
