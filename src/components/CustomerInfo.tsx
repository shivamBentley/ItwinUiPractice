import Input from './Input'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state"
import store from '../state/store';
import './styles/Customer.scss'

function CustomerInfo() {
    const initialInput = {
        name: '',
        address: '',
        phone: ''
    }
    const [customer, setCustomer] = useState<any>(initialInput);
    const { updateCustomer } = bindActionCreators(actionCreators, useDispatch());

    const [totalAmount, setAmount] = useState<any>(0)
    const [totalPiece, setPeice] = useState<any>(0)
    const handelChange = (e: any) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
        updateCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            // update component state or do something else
            const data: any = store.getState().store;
            setAmount(data.totalAmount)
            setPeice(data.totalPiece)
        });
        return () => unsubscribe();
    }, [totalAmount]);
    return (
        <div className='basic-info'>
            <div className='customer-info'>
                <div className='inline-input'>
                    <Input
                        placeholder={'Enter customer name...'}
                        name={'name'}
                        label={'Name'}
                        handelChange={handelChange}
                        value={customer.name}
                        type={'text'}
                    /></div>

                <div className='inline-input'>
                    <Input placeholder={'Enter address...'}
                        name={'address'}
                        label={'Address'}
                        handelChange={handelChange}
                        value={customer.description}
                        type={'text'}
                    /></div>

                <div className='inline-input'>
                    <Input placeholder={'Enter phone...'}
                        name={'phone'}
                        label={'Phone'}
                        handelChange={handelChange}
                        value={customer.description}
                        type={'text'}
                    /></div>

            </div>
            <div className='list-info'>
                <div className='total-piece'><span>Total Peice : {totalPiece}</span></div>
                <div className='total-amount'><span>Total Amount : {totalAmount}</span></div>
            </div>
        </div>)
}

export default CustomerInfo