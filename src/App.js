import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import Parent from "./Parent";

function App() {
  // const initialState = {
  //   firstName: "yatong",
  //   lastName: "ha",
  // };
  // const [person, setPerson] = useState(initialState);
  // const changeName = () => {
  // person.firstName = "zzon";
  // person.lastName = "ddeok";
  // setPerson(person);
  //변경안됨

  //   const newCat = { ...person };
  //   newCat.firstName = "zzon";
  //   newCat.lastName = "ddeok";
  //   setPerson(newCat); //컴포넌트 렌더링됨
  // };

  console.log("App rendered");

  return (
    <div className="App">
      {/* <div onClick={changeName}>
        {person.firstName} {person.lastName}
      </div> */}
      <Parent />
    </div>
  );
}

export default App;
