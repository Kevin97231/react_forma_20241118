import "./App.css";

function App() {
  let user = { name: "John", email: "jonh@email.com" };
  // let user = undefined;

  let salut = "salut !";

  const title =
    "Bonjour <strong>tout le monde !</strong> Bienvnue sur notre appli !";
  const imgSrc = "../src/assets/react.svg";

  const style = { color: "white", backgroundColor: "black" };

  const display = () => {
    if (user) {
      return <p>{user.name}</p>;
    } else return <p>Pas d utilisateur !</p>;
  };

  return (
    <>
      <p id="myId" className="myClass">
        {salut}
      </p>
      <p>Salut une deuxième fois !</p>

      {/* En jsx les balises sont utomatiquement échappées  */}
      {/* Déconseillé, à utiliser dans des cas particulier */}
      <h1>{title}</h1>
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>

      <div>
        <img src={imgSrc} alt="" />
      </div>

      <div style={style}>
        <p>Je suis la div avec le style !</p>
      </div>

      {display()}
      {user ? <p>{user.name}</p> : <p>Pas d'utilisateur !</p>}
      {user && <p>{user.name}</p>}
    </>
  );
}

export default App;
