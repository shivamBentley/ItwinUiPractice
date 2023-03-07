const initialState: any = {
    customerDetails: {
        name: '',
        address: '',
        phone: '',
    },
    itemList: [],
    totalAmount: 0,
    date: '',
    alarm: ''
}

const addItem = (state: any, action: any) => {
    const index: Number = state.itemList.length + 1;
    action.payload.index = index;
    state.itemList.push(action.payload)
    state.totalAmount += action.payload.subtotal;
    state.date = new Date();
    state.itemList.sort((a: any, b: any) => b.index - a.index)
    return state;
}

const removeItem = (state: any, action: any) => {
    let newList = state.itemList.filter((item: any) => {
        return item.index !== action.payload;
    });
    state.itemList = newList;
    return state;
}

const editItem = (state: any, action: any) => {

    return state;
}

const reducer = (state: any = initialState, action: any) => {

    console.log(action.type)
    switch (action.type) {
        case "addItem":
            return addItem(state, action);
        case "removeItem":
            return removeItem(state, action);
        case "editItem":
            return editItem(state, action);
        default:
            return state;
    }
}


export default reducer;