import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, TextField, Typography } from '@mui/material'
// import './styles.css';
import PasswordField from '../../form-control/PasswordField';
import InputField from '../../form-control/InputField';



LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {

    // const classes = useStyles()

    const schema = yup
      .object({
        email: yup
          .string()
          .required("please enter your email"),
        password: yup
          .string()
          .required("please enter your password")
      })
      .required();
   
    const form  = useForm({
        defaultValues: {
            fullName:'',
            email:'',
            password:'',
            retypePassword:'',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        console.log('Todo Form: ', values);
        const {onSubmit} = props;
        if(onSubmit) onSubmit(values);

        form.reset()
    }

    return (
      <div className="form">
        <Avatar color="secondary" className="form__avt">
            
        </Avatar>

        <Typography component="h3" variant="h5" className="form__title">
            Login
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>

          <InputField name="email" label="Email" form={form}/>
          {/* <InputField name="email" label="Email" form={form} /> */}
          <PasswordField name="password" label="Password" form={form} />
          {/* <PasswordField name="retypePassword" label="Retype password" form={form} /> */}

          <Button type="submit" variant="contained" color="primary" className="form__btn" style={{marginTop: 20}}>
            Login
          </Button>
        </form>
      </div>
    );
}

export default LoginForm;