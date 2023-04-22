import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        vehicle: 'Vehicle',
        service_date: 'Service Date',
        description: 'Description',
        mileage: 'Mileage',
        notes: 'Notes',
        cost: 'Cost',
        follow_up: 'Follow Up',
    },
    reducers: {
        chooseVehicle: (state, action) => {state.vehicle = action.payload},
        chooseServiceDate: (state, action) => {state.service_date = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
        chooseMileage: (state, action) => {state.mileage = action.payload},
        chooseNotes: (state, action) => {state.notes = action.payload},
        chooseCost: (state, action) => {state.cost = action.payload},
        chooseFollowUp: (state,action) => {state.follow_up = action.payload},
    }
})

export const reducer = rootSlice.reducer
export const { chooseVehicle, chooseServiceDate, chooseDescription, chooseMileage, 
    chooseNotes, chooseCost, chooseFollowUp } = rootSlice.actions