import React, { useEffect, useState } from 'react'
import store from '../state/store';

function CustomerInfo() {
    const [totalAmount, setAmount] = useState<any>(0)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            // update component state or do something else
            const amount: Number = store.getState().store.totalAmount;
            setAmount(amount)
        });
        return () => unsubscribe();
    }, [totalAmount]);
    return (
        <div><span>{totalAmount}</span></div>
    )
}

export default CustomerInfo