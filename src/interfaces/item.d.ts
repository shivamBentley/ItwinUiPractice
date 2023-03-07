export { };
declare global {
    interface itemType {
        index:Number,
        time: Number,
        itemName: String,
        description: String,
        quantity: Number,
        price: Number,
        subtotal: Number,
    }

    interface Invoice {
        customerDetails: {
            name: String,
            address: String,
            phone: String,
        },
        itemList: itemType[],
        totalAmount: Number,
        date: String,
        alarm: String
    }
}