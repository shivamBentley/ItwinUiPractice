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
    let newList: any = [];
    state.itemList.forEach((item: any) => {
        if (item.index !== action.payload) {
            newList.push(item);
        }
        else {
            state.totalAmount -= item.subtotal;
        }
    });
    state.itemList = newList;
    return state;
}

const editItem = (state: any, action: any) => {
    const { columnId, value, rowData } = action.payload;
    let newList: any = [];
    state.itemList.forEach((item: any) => {
        if (rowData.index === item.index) {
            const updatedItem = { ...item, [columnId]: value }
            if (columnId === "price" || columnId === "quantity") {
                state.totalAmount -= item.subtotal;
                const updatedSubTotalAmount = updatedItem.quantity * updatedItem.price;
                updatedItem.subtotal = updatedSubTotalAmount;
                state.totalAmount += updatedItem.subtotal;
            }
            newList.push(updatedItem);
        }
        else newList.push(item)
    });
    state.itemList = newList;
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