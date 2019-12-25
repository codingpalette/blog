// 상태를 위한 타입 선언
export type Todo = {
    ListContent : any[],
    isTodoLoad : boolean,
    isPostDell : boolean,
    
};
type TodosState = Todo;
  
// 초깃값 설정
const initialState: TodosState = {
    ListContent : [
        // { id: 1, text: '타입스크립트 배우기', done: true },
        // { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
        // { id: 3, text: '투두리스트 만들기', done: false }
    ],
    isTodoLoad : true,
    isPostDell : false,
}

const dummyList = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false }
];


// 액션 type
export const LOAD_TODO_REQUEST = 'LOAD_TODO_REQUEST';
export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS';
export const LOAD_TODO_FAILURE = 'LOAD_TODO_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';

export const DEL_TODO_SUCESS = 'DEL_TODO_SUCESS';



function todos(state: TodosState = initialState, action: any): TodosState {
    switch (action.type) {
        case LOAD_TODO_REQUEST:
            return {
                ...state,
            };
        case LOAD_TODO_SUCCESS:
            return {
                ...state,
                isTodoLoad : false,
                ListContent : dummyList
            };
        case LOAD_TODO_FAILURE:
            return {
                ...state,
            };
        case ADD_TODO_REQUEST:
            return {
                ...state,
            };
        case ADD_TODO_SUCCESS:
            const nextId = Math.max(...state.ListContent.map((todo: { id: number; }) => todo.id)) + 1;
            return {
                ...state,
                ListContent : [
                    ...state.ListContent ,
                    {
                        id : nextId,
                        text : action.data,
                        done : false
                    }
                ]
            };
        case TOGGLE_TODO_SUCCESS:
            return {
                ...state,
                ListContent : state.ListContent.map( todo => todo.id === action.data ? { ...todo, done: !todo.done } : todo )
            }
        case DEL_TODO_SUCESS:
            console.log(action)
            return {
                ...state,
                ListContent : state.ListContent.filter( todo => todo.id !== action.data )
            }
    
        
    //   case TOGGLE_TODO:
    //     return state.map(todo =>
    //       todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    //     );
    //   case REMOVE_TODO:
    //     return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
}

export default todos;