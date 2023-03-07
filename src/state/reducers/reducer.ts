const reducer = (state = 0, action :any) => {
    switch (action.type) {
        case "add":
            return state + action.payload
            break;

        case "remove":
            return state - action.payload
            break;

        default:
            return state;
    }
}


export default reducer;