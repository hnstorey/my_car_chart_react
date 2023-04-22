import { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => {
    return (
        <TextField
            variant = 'outlined'
            size = 'small'
            margin = 'normal'
            inputRef={ref}
            fullWidth
            type='text'
            {...props}
        />
    )
})

export default Input