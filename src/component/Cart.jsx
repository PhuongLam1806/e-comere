import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart, addCart } from '../redux/action';

const Cart = () => {

    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()


    const handleClose = (item) => {
        dispatch(delCart(item));
    }

    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const cartItems = (product) => {
        return(
            <>
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={product.id}>
            <div className="container py-4">
                <button className="btn-close float-end" onClick={() => handleClose(product)} aria-label="Close"></button>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className="lead fw-bold">
                            {product.qty} X ${product.price} = ${product.qty * product.price}
                        </p>
                        <button className="btn btn-outline-dark me-4"  onClick={()=>handleDel(product)} >
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }

    const emptyCart = () => {
        return (

        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>

        </div>
        )
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !==0 && state.map(cartItems)}
        </>
    );
}

export default Cart;
