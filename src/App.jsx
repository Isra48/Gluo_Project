import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const URL_API =
  "https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=03abbb74e4d7fa5b1d866ffcf2845fc9&hash=5aa12a5845d6c2d3ede8ab92947fe2ea";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [auxData, setAuxData] = useState([]);
  console.log(auxData);

  useEffect(() => {
    fetch(URL_API)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setAuxData(json.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (text) => {
    setAuxData(data);
    let aux = [];
    data.forEach((el) => {
      console.log(el.name);
      if (el.name.includes(text)) {
        aux.push(el);
      }
      setData(aux);
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setData(auxData);
  };

  const handleDelete = (id) => {
    let aux = auxData;
    for (var i = 0; i < aux.length; i++) {
      if (aux[i].id === id) {
        aux.splice(i, 1);
      }
      setAuxData(aux);
    }
  };

  useEffect(() => {
    console.log("Cambio dara");
    setData(auxData);
  }, [auxData]);

  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <Navbar search={search} onChange={handleChange} onClick={handleClick} />
        {data.map((el, ind) => (
          <Card
            key={ind}
            title={el.name}
            subTitle={el.description}
            img={el.thumbnail.path + "." + el.thumbnail.extension}
            handleDelete={() => handleDelete(el.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
