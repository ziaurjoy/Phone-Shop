


export const initialstate = {
    profile: null,
    pagereload: null,
}

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case "ADD_PROFILE":
            return {
                ...state,
                profile: action.profile,
            }
        case "PAGE_RELOAD":
            return {
                ...state,
                pagereload: action.pagereload,
            }
        default:
            return state;
    }
};

export default reducer;