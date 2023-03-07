
import { useMemo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state"
import store from '../state/store'
import { RiDeleteBin6Line, RiEditBoxLine } from 'react-icons/ri'

import './styles/List.scss'

import {
    Table,
    tableFilters,
} from '@itwin/itwinui-react';
import type {
    CellProps,
} from 'react-table';

function List() {
    const listItem: itemType[] = useSelector((state: any) => {
        const store: Invoice = state.store;
        return store.itemList
    })
    const [itemList, setItemList] = useState<any>(listItem);
    const { removeItem, editItem } = bindActionCreators(actionCreators, useDispatch());

    const translatedLabels = useMemo(
        () => ({
            filter: 'Filter',
            clear: 'Clear',
            from: 'From',
            to: 'To',
        }),
        [],
    );;


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
                        accessor: 'time',
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
                    {
                        id: 'edit-me',
                        Header: '',
                        width: 50,
                        Cell: (props: CellProps<any>) => {
                            return <span id="delete-button" style={{ color: 'green' }} onClick={() => editItem(props.row.original.index)}><RiEditBoxLine /></span>;
                        },
                    },
                    {
                        id: 'click-me',
                        Header: '',
                        width: 50,
                        Cell: (props: CellProps<any>) => {
                            return <span id="edit-button" style={{ color: 'red' }} onClick={() => removeItem(props.row.original.index)}><RiDeleteBin6Line /></span>;
                        },
                    }
                ],
            },
        ],
        [editItem, removeItem, translatedLabels],
    );

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            // update component state or do something else
            const updateList: itemType[] = store.getState().store.itemList.slice()
            setItemList(updateList)
        });
        return () => unsubscribe();
    }, [itemList]);

    return (
        <div className='list-table'>
            <Table
                columns={columns}
                data={itemList}
                emptyTableContent='No data.'
                isSelectable={true}
                selectionMode='multi'
                isSortable
            />
        </div>
    )
}

export default List