// src/components/forms/MyTextField.jsx

import React from 'react'; // React를 한 번만 import 합니다.
import '../../App.css';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export default function MyTextField(props) {
    const { label, name, control } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    id="outlined-basic"
                    onChange={onChange}
                    value={value}
                    label={label}
                    variant="outlined"
                    className={"myForm"}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
}


