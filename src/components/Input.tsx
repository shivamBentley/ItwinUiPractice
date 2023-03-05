import React from 'react'
import { LabeledInput } from '@itwin/itwinui-react'

export default function Input(props:any ) {
    const { placeholder, label, name, handelChange, type, value, min = 0 , focus= false} = props;
    return (
        <div >
            <LabeledInput
                placeholder={placeholder}
                label={label}
                name={name}
                onChange={(e) => { handelChange(e) }}
                value={value}
                type={type}
                min={min}
                setFocus= {focus}
            />
        </div>
    )
}
