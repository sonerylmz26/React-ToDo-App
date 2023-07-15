
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from 'uuid';



const Header = ({todos,setTodos}) => {



const [task , setTask ] = useState("")


const addTodo = (e) => {
e.preventDefault();

const newTodo = {
  // id: todos.lenght+1, kullanılabilir ama sağlıklı değil.
  // id: new Date().getTime(), // bir yöntem milisaniye veriyor 
  id: uuidv4() , // unic bir id veriyor bu metot
  text: task,
  comploted:false
}
setTodos([...todos, newTodo])

console.log(newTodo)
  setTask("")
}

  return (
    <Container className="">
  <Form onSubmit={addTodo}   className="d-flex flex-column mx-auto row">
      <Form.Control
placeholder="Enter the new Todo.."
aria-label="Recipient's username"
aria-describedby="basic-addon2"
onChange={(e)=> setTask(e.target.value)}
value={task}
className="col-12  w-75 mx-auto"
/>
<Button type="submit" variant="primary" disabled={!task.trim()} id="button-addon2 " className="mx-2 col-6 col-md-2 mx-auto mt-2">
Add Todo
</Button>
    </Form>
    </Container>
  );
};

export default Header;

