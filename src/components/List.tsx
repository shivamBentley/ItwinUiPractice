
import { useMemo, useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { bindActionCreators } from 'redux'
import { actionCreators } from "../state"
import store from '../state/store'
import { RiDeleteBin6Line, RiEditBoxLine, RiCheckboxCircleLine } from 'react-icons/ri'

import './styles/List.scss'

import {
    EditableCell,
    DefaultCell,
    Table,
    tableFilters,

} from '@itwin/itwinui-react';
import type {
    CellProps,
    CellRendererProps
} from 'react-table';

function List() {
    const listItem: itemType[] = useSelector((state: any) => {
        const store: Invoice = state.store;
        return store.itemList
    })
    const [itemList, setItemList] = useState<any>(listItem);
    const { removeItem, editItem } = bindActionCreators(actionCreators, useDispatch());
    const [isEdit, setEdit] = useState<Number | null>(null)

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
                        maxWidth: 80,
                    },

                    {
                        id: 'itemName',
                        Header: 'Item Name',
                        accessor: 'itemName',
                        // Filter: tableFilters.NumberRangeFilter(translatedLabels),
                        maxWidth: 200,
                        cellRenderer: (props: any) => {
                            const index: Number = props.cellProps.row.original.index;
                            if (isEdit && isEdit === index) {
                                return <EditableCell {...props}
                                    onCellEdit={(columnId: string, value: string, rowData: any) => {
                                        editItem(columnId, value, rowData)
                                    }} />
                            }
                            return <DefaultCell {...props} />
                        },

                    },

                    {
                        id: 'description',
                        Header: 'Description',
                        accessor: 'description',
                        // Filter: tableFilters.NumberRangeFilter(translatedLabels),
                        cellRenderer: (props: any) => {
                            const index: Number = props.cellProps.row.original.index;
                            if (isEdit && isEdit === index) {
                                return <EditableCell {...props}
                                    onCellEdit={(columnId: string, value: string, rowData: any) => {
                                        editItem(columnId, value, rowData)
                                    }} />
                            }
                            return <DefaultCell {...props} />
                        },
                    },


                    {
                        id: 'quantity',
                        Header: 'Quantity',
                        accessor: 'quantity',
                        width: 100,
                        cellRenderer: (props: any) => {
                            const index: Number = props.cellProps.row.original.index;
                            if (isEdit && isEdit === index) {
                                return <EditableCell {...props}
                                    onCellEdit={(columnId: string, value: string, rowData: any) => {
                                        editItem(columnId, value, rowData)
                                    }} />
                            }
                            return <DefaultCell {...props} />
                        },
                    },
                    {
                        id: 'price',
                        Header: 'Price',
                        accessor: 'price',
                        width: 100,
                        cellRenderer: (props: any) => {
                            const index: Number = props.cellProps.row.original.index;
                            if (isEdit && isEdit === index) {
                                return <EditableCell {...props}
                                    onCellEdit={(columnId: string, value: string, rowData: any) => {
                                        editItem(columnId, value, rowData)
                                    }} />
                            }
                            return <DefaultCell {...props} />
                        },

                    },
                    {
                        id: 'subtotal',
                        Header: 'Subtotal',
                        accessor: 'subtotal',
                        width: 100,

                    },
                    {
                        id: 'edit-me',
                        Header: '',
                        width: 50,
                        Cell: (props: CellProps<any>) => {
                            const index: Number = props.row.original.index;

                            if (isEdit && isEdit === index) {
                                return <span id="delete-button" style={{ color: 'green' }} onClick={() => setEdit(null) }>
                                    <RiCheckboxCircleLine size={25} /></span>;
                            } else {
                                return <span id="delete-button" style={{ color: 'green' }} onClick={() => { setEdit(index) }}><RiEditBoxLine /></span>;

                            }
                        },
                    },
                    {
                        id: 'click-me',
                        Header: '',
                        width: 50,
                        Cell: (props: CellProps<any>) => {
                            const index: Number = props.row.original.index;
                            if (isEdit && isEdit === index) return <></>
                            else return <span id="edit-button" style={{ color: 'red' }} onClick={() => removeItem(props.row.original.index)}><RiDeleteBin6Line /></span>;
                        },
                    }
                ],
            },
        ],
        [editItem, removeItem, translatedLabels, isEdit],
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
            // isSortable
            />
        </div>
    )
}

export default List