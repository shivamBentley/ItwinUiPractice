export const addItem = (item: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "add",
            payload: item
        })
    }
}

export const removeItem = (item: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "remove",
            payload: item
        })
    }
}