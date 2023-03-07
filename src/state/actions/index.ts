export const addItem = (item: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "addItem",
            payload: item
        })
    }
}

export const removeItem = (index: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "removeItem",
            payload: index
        })
    }
}


export const editItem = (index: any) => {
    return (dispatch: any) => {
        dispatch({
            type: "editItem",
            payload: index
        })
    }
}


