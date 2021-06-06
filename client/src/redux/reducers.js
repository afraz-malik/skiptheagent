const initialState = {
    url: null
}
export const URLReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SET_URL':
            return Object.assign({}, state, {url: action.payload})
        default:
            return state
    }
}