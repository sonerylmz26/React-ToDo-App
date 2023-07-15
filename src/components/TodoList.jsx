import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from "react-bootstrap";


const TodoList = ({todos, setTodos}) => {

const deleteTodo = (id) => {
  
  const newTodos = todos.filter(todo=> todo.id !== id)

  setTodos(newTodos)

}

const toogleTodo = (id) => {

const newTodos = todos.map((todo=> todo.id === id ? {...todo, completed:!todo.completed} : todo))

setTodos(newTodos)

}

  return (
    <div>

    <ListGroup className=' mx-auto mt-5 row ' >
   {
    todos.map((item, i) =>{
const{text, id } = item
      return(
        <Container key={i} className='col-12 col-md-8 ' >
            <ListGroup.Item 
            role="button" variant="success" className='m-2 text-capitalize rounded-3 p-3 fs-2 d-flex justify-content-between align-items-center list '  >
            <span className={
             item.completed ? "complete" : ""  } onClick={()=>toogleTodo(item.id)} >{text}</span>

        
 
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16"
            role="button"

            onClick={()=>deleteTodo(id)}
            >
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
          
            </ListGroup.Item>
        </Container>
      )
    })
   }


    </ListGroup>


 
    </div>
  )
}

export default TodoList