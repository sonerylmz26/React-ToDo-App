import { useEffect, useState } from "react"
import Header from "../components/Header"
import TodoList from "../components/TodoList"

import { Container } from "react-bootstrap";
const todoList = [
  {
    id: 1, 
    text: "React Todo App",
    comploted:false
  }
]



const Home = () => {

const [todos , setTodos  ] = useState(JSON.parse(localStorage.getItem("todos")) || todoList)

useEffect(() => {
 
  localStorage.setItem("todos", JSON.stringify(todos) )

},[todos])


return (

<Container >

<Header setTodos={setTodos} todos={todos} />

<TodoList setTodos={setTodos}  todos={todos} />

</Container>



   
  )
}

export default Home