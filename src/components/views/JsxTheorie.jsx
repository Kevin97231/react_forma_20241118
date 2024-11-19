/* eslint-disable react/prop-types */
function JsxTheorie() {
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

  function handleClick(e) {
    console.log(e);
    alert("j'ai cliqué !");
  }

  const fruits = ["banane", "pomme", "abricot", "poire"];

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
      {user ? <p>{user.name}</p> : <p>Pas d&#39;utilisateur !</p>}
      {user && <p>{user.name}</p>}

      <button onClick={handleClick}>cliquez !</button>
      <button onClick={() => alert("j'ai encore cliqué !")}>cliquez !</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <Children
        text="Voici le texte passé par le composant parent !"
        text2="2e texte !"
      />

      <Title>Mon titre</Title>
      <Title color="red" id="myId" className="myClass">
        Mon titre
      </Title>
    </>
  );
}

const Children = ({ text, text2 }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{text2}</p>
    </div>
  );
};

const Title = ({ children, color = "blue", ...props }) => {
  return (
    <h1 style={{ color: color }} {...props}>
      {children}
    </h1>
  );
};

export default JsxTheorie;
