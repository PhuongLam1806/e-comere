import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, TextField, Typography } from '@mui/material'
import './styles.css';
import PasswordField from '../../form-control/PasswordField';
import InputField from '../../form-control/InputField';



// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });



RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {

    // const classes = useStyles()

    const schema = yup.object().required()
   
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
            Create Account
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>

          <InputField name="fullName" label="Full Name" form={form} />
          <InputField name="email" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <PasswordField name="retypePassword" label="Retype password" form={form} />

          <Button type="submit" variant="contained" color="primary" className="form__btn" style={{marginTop: 20}}>
            Create account
          </Button>
        </form>
      </div>
    );
}

export default RegisterForm;