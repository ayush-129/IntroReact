import Chai from "./comp";

function App() {
  const username="Ayush is here"
  return (
    <>
      <h1>Vite React App, {username}</h1>
      <Chai/>
    </>
  );
}

export default App;


// {username} is the evualated expression. We cant write javascript inside the return 