import List from './List'
import DataInput from './DataInput'
import CustomerInfo from './CustomerInfo'

function Invoice() {
    return (
        <div className='Invoice'>
            <div><CustomerInfo /></div>
            <div className='data-input'><DataInput /></div>
            <List />
        </div>
    )
}

export default Invoice