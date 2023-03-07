import List from './List'
import DataInput from './DataInput'

function Invoice() {
    return (
        <div className='Invoice'>
            <div>customer details, time , total amount etc</div>
            <div className='data-input'><DataInput /></div>
            <List />
        </div>
    )
}

export default Invoice