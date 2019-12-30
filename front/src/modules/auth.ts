// 상태를 위한 타입 선언
export type Auth = {
    logind : boolean,
    
};
type AuthState = Auth;
  
// 초깃값 설정
const initialState: AuthState = {
    logind : false
}




// 액션 type



function auth(state: AuthState = initialState, action: any): AuthState {
    switch (action.type) {
      default:
        return state;
    }
}

export default auth;