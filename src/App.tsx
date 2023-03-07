import { text } from "./text";

function App() {
  return (
    <div data-type="flex" /*data-type="fix"*/ /*data-type="absolute" */>
      <div className="header" />
      <div className="main">
        <div className="content">{text}</div>
      </div>
      <div className="footer">
        <input />
      </div>
    </div>
  );
}

export default App;
