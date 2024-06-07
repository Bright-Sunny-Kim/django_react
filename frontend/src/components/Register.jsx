// src/components/Register.jsx

import React from 'react'; // React를 한 번만 import 합니다.
import '../App.css';
import { Box } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyPassField from './forms/MyPassField';
import MyButton from './forms/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';

const Register = () => {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const submission = (data) => {
        AxiosInstance.post('register/', {
            email: data.email,
            password: data.password,
        })
        .then(() => {
            navigate('/');
        })
        .catch(error => {
            console.error('There was an error registering!', error);
        });
    };

    return (
        <div className={"myBackground"}>
            <form onSubmit={handleSubmit(submission)}>
                <Box className={"whiteBox"}>
                    <Box className={"itemBox"}>
                        <Box className={"title"}>
                            User registration
                        </Box>
                    </Box>

                    <Box className={"itemBox"}>
                        <MyTextField
                            label={"Email"}
                            name={'email'}
                            control={control}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <MyPassField
                            label={"Password"}
                            name={"password"}
                            control={control}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <MyPassField
                            label={"Confirm password"}
                            name={"password2"}
                            control={control}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <MyButton
                            type={"submit"}
                            label={"Register"}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <Link to="/login">
                            Already registered? Please login!
                        </Link>
                    </Box>
                </Box>
            </form>
        </div>
    );
};

export default Register;

