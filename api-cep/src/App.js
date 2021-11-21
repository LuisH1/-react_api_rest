import react, {useState} from "react";
import './App.css';
import api from "./services/api"

function App(){

const [cep, setcep] = useState("")
const [dados, setDados] = useState("")


function atribuircep(e){
  
  e.preventDefault();
  setcep(e.target.value);
}


function consultarCep(){

    //https://viacep.com.br/ws/{cep}/json/
    
    let url = cep + '/json'
    api.get(url)
    .then((response) => {
      if (!response.data.erro){
        let objeto = JSON.stringify(response.data);
        setDados(objeto);
      }else{
        setDados("CEP inválido,digite outro cep.")
      }
    })
    .catch((err) => {setDados("CEP inválido,digite outro cep.")
  });

} 



return (
    <div className="App">
      <header className="App-header">
        <h1> Consultar CEP</h1>

        <div>
          <input type="number"  name="cep" onChange={(e) => atribuircep(e)} />
          <button onClick={() => consultarCep ()} >Buscar CEP </button>
        </div>
        <div name="resultado" >
            {dados}
        </div>
      </header>
    </div>
  );
}

export default App;
