
import { useMemo } from 'react'
import './styles/List.scss'

import {
    Table,
    tableFilters,
} from '@itwin/itwinui-react';

interface propsType {
    data: {
        index: Number
        time: Number,
        itemName: String,
        description: String,
        quantity: Number,
        price: Number,
        subtotal: Number
    }[]
}

function List({ data }: propsType) {
    const translatedLabels = useMemo(
        () => ({
            filter: 'Filter',
            clear: 'Clear',
            from: 'From',
            to: 'To',
        }),
        [],
    );;

    const onFilter = () => {

    }

    const sort = () => {

    }

    const columns = useMemo(
        () => [
            {
                Header: 'Table',
                columns: [
                    {
                        id: 'index',
                        Header: 'SL',
                        accessor: 'index',
                        maxWidth: 50,
                    },

                    {
                        id: 'itemName',
                        Header: 'Item Name',
                        accessor: 'itemName',
                        Filter: tableFilters.NumberRangeFilter(translatedLabels),
                        maxWidth: 200,
                    },

                    {
                        id: 'description',
                        Header: 'Description',
                        accessor: 'description',
                        Filter: tableFilters.NumberRangeFilter(translatedLabels),
                    },

                    {
                        id: 'quantity',
                        Header: 'Quantity',
                        accessor: 'quantity',
                        Filter: tableFilters.NumberRangeFilter(translatedLabels),
                    },
                    {
                        id: 'price',
                        Header: 'Price',
                        accessor: 'price',
                        Filter: tableFilters.NumberRangeFilter(translatedLabels),
                    },
                    {
                        id: 'subtotal',
                        Header: 'Subtotal',
                        accessor: 'subtotal',
                        Filter: tableFilters.NumberRangeFilter(translatedLabels),
                    },

                ],
            },
        ],
        [],
    );

    data.sort((item1, item2) => item2.time.valueOf() - item1.time.valueOf());
    return (
        <div className='list-table'>
            <Table
                columns={columns}
                data={data}
                emptyTableContent='No data.'
                isSelectable={true}
                selectionMode='multi'
                isSortable
                isResizable
                onSort={sort}
                onFilter={onFilter}
            />
        </div>
    )
}

export default List