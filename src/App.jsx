import "./App.css";
import ToDo from "./Todo";
import Food from "./Food"

function App() {
  const time = 50;

  return (
    <>
      <h1>React Core concepts</h1>
      <ToDo task="Learn React" isDone={true}   time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={true} time=""></ToDo>
      <Food eat="Burger"></Food>

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumder" tech="React"></Developer>
      <Developer name="Rajon" tech="Java"></Developer>
      <Developer name="Shabana" tech="Python"></Developer>
      <Device device="Laptop" owner="Mahim"></Device>
      <Device device="Mobile" owner="Rafiq"></Device>
      <Device device="IPad" owner="Biplob"></Device>
      <Player name="Tamim" runs="6000"></Player>
      <Player name="Mushfiq" runs="8000"></Player> */}
    </>
  );
}
// const {name,runs} = {name: 'Tamim', runs: 50}

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Device(objects) {
  const styleDevice = {
    color: "orange",
    backgroundColor: "purple",
    padding: "10px",
    borderRadius: "10px",
  };
  console.log(objects);
  return (
    <div style={styleDevice}>
      <h3>Device Name: {objects.device}</h3>
      <p>Owner Name: {objects.owner}</p>
    </div>
  );
}

function Developer(props) {
  return (
    <div
      style={{
        color: "yellow",
        backgroundColor: "blue",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Person() {
  const age = 24;
  const name = "Biplob";
  const personStyle = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <p id="" title="tooltip" style={personStyle}>
      I am a person and my name and age is: {name} {age}
    </p>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <p>Playing and Losing</p>
    </div>
  );
}

export default App;
