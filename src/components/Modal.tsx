// Todo: Style Modal

import ServiceForm from '../components/ServiceForm'

type Props = {
    id?: string[],
    open: Boolean,
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div
            onClick = { props.onClose }
            className='fixed h-full w-full flex 
            justify-center align-middle bg-gray-300 bg-opacity-25'>
            <div
                className='max-w-800px w-2/5 mt-20 flex z-1 bg-gray-300 shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                <div className='w-full flex-flex-col'>
                    <div className='flex flex-row space-apart'>
                        <p className='flex justify-start m-1 bg-gray-300 p-1 rounded hover:bg-cyan-800 text-cyan-800 hover:text-cyan-200'
                        onClick={ props.onClose }>
                            X
                        </p>
                    </div>
                    <div className='flex flex-col items-center text-center mt-1 p-1'>
                        <ServiceForm id= { props.id } />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal