import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Register from "../features/Register";
import LoginForm from "../features/LoginForm";



const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
}
const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('');

  const handleClickOpenLogin = () => {
    setOpen(true);
    setMode(MODE.LOGIN);
  };

  const handleClickOpenRegister = () => {
    setOpen(true);
    setMode(MODE.REGISTER);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

 

  // const handleBackdropClick = () => {
  //   //these fail to keep the modal open
  //   event.stopPropagation();
  //   return false;
  // };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            PL COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <Button  className="btn btn-outlined" onClick={handleClickOpenLogin}>
                    <i className="fa fa-sign-in me-1" ></i>Login</Button>
                <Button className="btn btn-outlined ms-2" onClick={handleClickOpenRegister}>
                    <i className="fa fa-user-plus me-1"  ></i>Register</Button>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
                    <i className="fa fa-shopping-cart me-1" ></i>cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Dialog
        onBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mode === MODE.LOGIN && (
              <>
                <LoginForm/>
              </>
            )}
               {mode === MODE.REGISTER && (
              <>
                <Register/>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Navbar;
