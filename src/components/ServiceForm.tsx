import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';

import Input from "./Input";
import { server_calls } from "../api/server_calls";
import { chooseVehicle, chooseServiceDate, chooseDescription, chooseMileage,
    chooseNotes, chooseCost } from "../redux/slices/RootSlice";

interface ServiceFormProps {
    id?: string[],
    data?: {},
}

const ServiceForm = ( props: ServiceFormProps ) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${ props.id}`),
        console.log(data);
        console.log(errors);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated ${ props.id } ${ data }.`)
            setTimeout(() => { window.location.reload()}, 1500);
            event.target.reset()
        } else {
            dispatch(chooseVehicle(data.vehicle));
            dispatch(chooseServiceDate(data.service_date));
            dispatch(chooseDescription(data.description));
            dispatch(chooseMileage(data.mileage));
            dispatch(chooseNotes(data.notes));
            dispatch(chooseCost(data.cost));

            server_calls.create(store.getState())
            setTimeout(() => { window.location.reload()}, 1500);
        }
    }
  
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder='Vehicle' {...register('vehicle', {required: false, maxLength: 120})} />
        <Input placeholder='Service Date' {...register('service_date', {required: false, maxLength: 12})} />
        <Input placeholder='Description' {...register('description', {required: false, maxLength: 500})} />
        <Input placeholder='Mileage' {...register('mileage', {required: false, maxLength: 10})} />
        <Input placeholder='Notes' {...register('notes', {required: false, maxLength: 1000})} />
        <Input placeholder='Cost' {...register('cost', {required: false, maxLength: 10})} />
        <button className='p-2 m-2 bg-cyan-200 text-cyan-800 rounded hover:bg-cyan-800 hover:text-cyan-200'>
            <input type='submit' className='bg-cyan-200 text-cyan-800 rounded hover:bg-cyan-800 hover:text-cyan-200' />
        </button>
        </form>
  )
}

export default ServiceForm
