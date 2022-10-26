import logo from "./logo.svg";
import "./App.css";
// import changePassword from "./ChangePassword";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button onClick={changePassword}>Change Password</button> */}
        <button
          onClick={() => {
            fetch("http://localhost:4000/screenshot")
              .then((response) => {
                if (response.status === 200) alert("Password Changed!!");
                else alert("Password Not Changed .... ");
              })
              .catch((error) => {
                alert("Password was not changed");
              });
          }}
        >
          TAKE SCREENSHOT
        </button>
      </header>
    </div>
  );
}

export default App;
