
// export const initialstate = {
//     profile:null,
// }

// const reducher = (state,action) =>{
//     switch (action.type){
//         case "ADD_PROFILE":
//             return {
//                 ... state,
//                 profile: action.profile,
//             }
//         default:
//             return state;

//     }
// }

// export default reducher



export const initialstate = {
    profile: null,
}

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "ADD_PROFILE":
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export default reducer;