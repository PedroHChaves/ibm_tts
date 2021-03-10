//Import modulos necessários
import React, {useState, useEffect} from "react"
import axios from "axios"
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

//Import do arquivos css
import "./global.css"
import "./sidebar.css"

function App() {

    //Cria as variáveis para obter o valor no input
    const [comentario, setComentario] = useState("")
    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/").then(resp => setComentarios(resp.data))
    }, [])

    //Inicializa os componentes do materialize
    function componentDidMount() {
        M.AutoInit();
    }

    //Envia os dados obtidos para o backend
    function enviaBack(e){
        e.preventDefault()
        let request = {
            comentario: comentario
        }

        axios.post(process.env.REACT_APP_API_URL + "/cadastrar", request).then(resp => {
            setComentarios(valorAntigo => [...valorAntigo, resp.data])
        }).catch(err => {
            console.log(err)
        })
    }

    function ouvir(link){
        const audio = document.querySelector("audio")
        if(audio){
            audio.src = link
            audio.play()
        }
    }

    return (
        <div className="container">
            <div className="row">
                
    
                <div className="mb-3 col-md-4 campoComentarios">
                    <strong><i className="material-icons center">comment</i>Comentário</strong>
                    <br />
                    <form onSubmit={e => enviaBack(e)}>
                        <textarea value={comentario} onChange={e => setComentario(e.target.value)} required className="form-control" id="comment" name="comment" rows="5"> </textarea>
                        <button type="submit" className="btn btn-success btnCadastrar" id="cadastrar">
                            Cadastrar
                        </button>
                    </form>
                </div>
    
                <div className="col-md-2 mid"></div>
    
                <div className="mb-3 col-md-6 divComments" id="divComments">
                    <ul name="comentarios" id="comentarios" className="comentarios">
                        <strong><i className="material-icons center">comment</i>Comentários</strong>
                        {
                            comentarios.map(item => (
                                <div key={item.link}>
                                    <li className="comment">{item.conteudo}</li>                                
                                    <button name="btnOuvir"className="btn btn-success btn-sm btnOuvir" onClick={() => ouvir(item.link)}>
                                        Ouvir
                                    </button>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <audio className="audio">
                    O seu navegador não suporta este tipo de audio
                </audio>
            </div>
        </div>
    );
}

export default App;
