import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import Modal from './Modal';
import { server_calls } from '../api/server_calls';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hideable: true },
  { field: 'vehicle', headerName: 'Vehicle', flex: 1 },
  { field: 'service_date', headerName: 'Service Date', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 1 },
  { field: 'mileage', headerName: 'Mileage', flex: 1 },
  { field: 'notes', headerName: 'Notes', flex: 1 },
  { field: 'cost', headerName: 'Cost', flex: 1 },
]

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { serviceData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
      server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection Model: ${ selectionModel }`)
      setTimeout( () => { window.location.reload() }, 1500)
    }
  
    return (
    <>
      <Modal 
        id = { selectionModel }
        open = { open }
        onClose = { handleClose }
      />
      <div className='h-full flex flex-row justify-center'>
        <div className='p-3'>
        <button
            className='p-2 m-2 bg-cyan-200 text-cyan-800 rounded hover:bg-cyan-800 hover:text-cyan-200'
            onClick = { handleOpen }
          >
            Create New Service Entry
          </button>
        </div>
        <div className='p-3'>
          <button
            className='p-2 m-2 bg-cyan-200 text-cyan-800 rounded hover:bg-cyan-800 hover:text-cyan-200'
            onClick = { handleOpen }
          >
            Update Service Entry
          </button>
        </div>
        <div className='p-3'>
          <button
            className='p-2 m-2 bg-cyan-200 text-cyan-800 rounded hover:bg-cyan-800 hover:text-cyan-200'
            onClick = { deleteData }
          >
            Delete Service Entry
          </button>
        </div>
      </div>
      <div className={ open ? 'hidden' : 'container h-full mx-10 my-5 flex flex-col justify-self-center'}
          style={{ height: 'auto', width: '90%' }}>
            <h2 className='text-center bg-cyan-800 text-gray-200 p-3 tracking-tighter'>My Service History</h2>
            <DataGrid rows={ serviceData } columns={ columns } pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={(item: any) => {
                setSelectionModel(item)
            }}
            />
          </div>
    </>
  )
}

export default DataTable
