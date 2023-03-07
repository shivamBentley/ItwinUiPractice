import { Button } from '@itwin/itwinui-react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state"

import Input from './Input'
import "./styles/DataInput.scss"

export default function DataInput() {
    const initialInput = {
        index: 0,
        itemName: '',
        description: '',
        quantity: 0,
        price: 0,
        subtotal: 0,
        time: 0
    }

    //contain all action creator function ..
    const { addItem } = bindActionCreators(actionCreators, useDispatch());


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
        const element: any = document;
        const handleClick = async (e: any) => {
            if (e.key === 'Enter') {
                element.getElementById('addItem-button').click();
            }
        };
        if (element !== null) {
            element.addEventListener('keydown', handleClick);
        }
        return () => {
            if (element !== null) {
                element.removeEventListener('keydown', handleClick);
            }
        };
    }, [focus]);

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
                    id="addItem-button"
                >
                    Add Item
                </Button></div>
        </div>
    )
}
