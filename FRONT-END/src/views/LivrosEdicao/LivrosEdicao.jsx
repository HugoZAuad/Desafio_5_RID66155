import {useEffect , useState} from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import SubmenuLivros from '../../components/SubmenuLivros/SubmenuLivros'
import { useParams, useNavigate } from 'react-router-dom'
import { LivrosService } from '../../api/LivrosService'

const LivrosEdicao = () => {  
  let {livroId} = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getLivro(){
    try {
      const {data} = await LivrosService.getLivro(livroId);
      setLivro(data)
    } finally {
      setLoading(false)
    }
  }

  async function editLivro(event){
    event.preventDefault();

    if (isNaN(Number(livro.pages)) || isNaN(Number(livro.ISBN))) {
      alert('Número de Páginas e ISBN devem ser números válidos.');
      return;
    }

    const body = {
        titulo: livro.titulo,
        pages: parseInt(livro.pages),
        ISBN: parseInt(livro.ISBN),
        editora: livro.editora
      }
    if(livro.titulo !== undefined && livro.titulo !== '' && livro.pages !== undefined && livro.pages !== '' && livro.ISBN !== undefined && livro.ISBN !== '' && livro.editora !== undefined && livro.editora !== ''){
      await LivrosService.updateLivro(Number(livro.id),body)
      .then(({data})=>{
        alert(data.mensagem)
        navigate('/livros')
      })
      .catch(({response:{data,status}})=>{
        alert(`${status} - ${data}`)      
      });
    }  

  }

  useEffect(() => {
    getLivro()    
  }, [])  

  if (loading) {
    return <div>Carregando dados do livro...</div>
  }

  if (!livro) {
    return <div>Livro não encontrado.</div>
  }

  return (
  <>
    <Header/>    
    <SubmenuLivros/>
    <div className='livrosCadastro'>
        <h1>Edição de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Titulo</label>
              <input type="text" required onChange={(event)=>{ setLivro({...livro, titulo: event.target.value})}} value={livro.titulo || ''} ></input>
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="number" required onChange={(event)=>{ setLivro({...livro, pages: event.target.value})}} value={livro.pages || ''}></input>
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="number" required onChange={(event)=>{ setLivro({...livro, ISBN: event.target.value})}} value={livro.ISBN || ''}></input>
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text" required onChange={(event)=>{ setLivro({...livro, editora: event.target.value})}} value={livro.editora || ''}></input>
            </div> 
            <div className='form-group'>
              <button onClick={editLivro}>Atualizar Livro</button>  
            </div>                   
          </form>
          </div>        
    </div>
  </>)
  
}

export default LivrosEdicao
