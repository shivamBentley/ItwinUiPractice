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

export const editItem = (columnId: any, value: String | Number, rowData: itemType) => {
    const payload = {
        columnId: columnId,
        value: value,
        rowData: rowData
    }
    return (dispatch: any) => {
        dispatch({
            type: "editItem",
            payload: payload
        })
    }
}


