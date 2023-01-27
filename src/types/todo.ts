export interface TodoState {
    todos: any[],
    totalCount: number,
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    FETCH_TOTAL_COUNT = "FETCH_TOTAL_COUNT",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction {
    type: TodoActionsTypes.FETCH_TODOS;  
}
interface FetchTodoSuccessAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS;  
    payload: [];
}
interface FetchTodoErrorAction {
    type: TodoActionsTypes.FETCH_TODOS_ERROR;  
    payload: string;
}
interface SetTodoPage {
    type: TodoActionsTypes.SET_TODO_PAGE;  
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage