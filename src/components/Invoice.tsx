import { useState } from 'react'
import List from './List'
import DataInput from './DataInput'


interface itemType {
    index: Number
    time: Number,
    itemName: String,
    description: String,
    quantity: Number,
    price: Number,
    subtotal: Number,
}

function Invoice() {

    const [itemList, setItemList] = useState<itemType[]>([]);

    const addItem = async (item: itemType) => {
        const newItemList = itemList.slice();
        item.index = itemList.length+1;
        newItemList.push(item);
        await setItemList(newItemList);        
    }

    return (
        <div className='Invoice'>
            <div>Header</div>
            <div className='data-input'><DataInput addItem={addItem} /></div>
            <List data={itemList} />
        </div>
    )
}

export default Invoice