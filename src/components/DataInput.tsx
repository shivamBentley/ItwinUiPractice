import { Button } from '@itwin/itwinui-react'
import  { useState, useEffect } from 'react'
import Input from './Input'
import "./styles/DataInput.scss"
interface itemType {
    time: Number,
    itemName: String,
    description: String,
    quantity: Number,
    price: Number,
    subtotal: Number,
}

export default function DataInput({ addItem }: any) {
    const initialInput = {
        itemName: '',
        description: '',
        quantity: 0,
        price: 0,
        subtotal: 0,
        time: 0
    }
    const [focus, setFocus] = useState<boolean>(true)
    const [item, setItem] = useState<itemType>(initialInput);

    const handelChange = (e: any) => {
        setItem({ ...item, time: (new Date().getTime()), [e.target.name]: e.target.value });
    }

    const addItems = async (item: itemType) => {
        item.subtotal = item.quantity.valueOf() * item.price.valueOf();
        if (item.subtotal !== 0) {
            await addItem(item);
            await setItem(initialInput)
        }
        setFocus(false);
    }

    useEffect(() => {
        setFocus(true);
    }, [focus])

    return (
        <div className='data-Input' >
            <div className='inline-input'>
                <Input
                    placeholder={'Enter item name...'}
                    name={'itemName'}
                    label={'Item Name'}
                    handelChange={handelChange}
                    value={item.itemName}
                    type={'text'}
                    focus={focus}
                /></div>

            <div className='inline-input'>
                <Input placeholder={'Enter description...'}
                    name={'description'}
                    label={'Description'}
                    handelChange={handelChange}
                    value={item.description}
                    type={'text'}
                /></div>

            <div className='inline-input'>
                <Input
                    placeholder={'Enter quantity name...'}
                    name={'quantity'}
                    label={'Quantity'}
                    handelChange={handelChange}
                    value={item.quantity}
                    type={'Number'}

                /></div>

            <div className='inline-input'>
                <Input
                    placeholder={'Enter price name...'}
                    name={'price'}
                    label={'price'}
                    handelChange={handelChange}
                    value={item.price}
                    type={'Number'}

                /></div>

            <div className='inline-input add-button'>
                <Button onClick={() => { addItems(item) }}
                    styleType='high-visibility'
                >
                    Add Item
                </Button></div>

        </div>
    )
}
