import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from 'react'

const TodoList: React.FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()    
    const pagesArray = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading) {
        return <h1>Loading...</h1>
     }
     if(error){
         return <h1>{error}</h1>
     }
    return (
        <div>
            {todos.map((item) => {
                return <div key={item.id}>{item.id}. {item.title}</div>
            })}
            <div style={{display: "flex"}}>
                {pagesArray.map(item => {
                    return <div
                    onClick={() => {setTodoPage(item)}} 
                    style={{border: item === page ? "2px solid orange" : "1px solid gray", padding: "10px"}} 
                    key={item}>{item}</div>
                })}
            </div>
        </div>
    )
}

export default TodoList