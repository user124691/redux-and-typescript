import { TodoAction, TodoActionsTypes, TodoState } from "../../types/todo"


const initialState: TodoState = {
    todos: [],
    totalCount: 0,
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type){
        case TodoActionsTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionsTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionsTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}