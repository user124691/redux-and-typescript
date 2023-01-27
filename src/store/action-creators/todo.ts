import {Dispatch} from 'redux'
import axios from "axios"
import { TodoAction, TodoActionsTypes } from '../../types/todo'
 
export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try{
            dispatch({type: TodoActionsTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            setTimeout(() => {
                dispatch({type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        }catch(e){
            dispatch({type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: "Произошел сердечный приступ, как по расписанию"})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionsTypes.SET_TODO_PAGE, payload: page}
}