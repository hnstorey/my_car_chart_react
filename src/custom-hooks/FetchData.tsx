import { useEffect, useState } from 'react';
import { server_calls } from '../api/server_calls';

export const useGetData = () => {
    const [ serviceData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])
    
  return { serviceData, getData:handleDataFetch }
}

export default useGetData