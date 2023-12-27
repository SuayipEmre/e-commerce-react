import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { AddToCartPropsType, actionType, counterState } from './types'
import { addToCart, fetchProductFromCart, getCartTotal } from '~/redux/features/cart/actions';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classNames from 'classnames';
import { useCart } from '~/redux/features/cart/hooks';




const AddToCart: React.FC<AddToCartPropsType> = ({ product }) => {

    const [isInCart, setIsInCart] = useState<boolean>(false)
    const cart = useCart()

    useEffect(() => {
        fetchProductFromCart()

        const status = cart.some(item => item.id == product.id)
        setIsInCart(status)

    }, [])


    const notify = () => toast.success('Added to Cart', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })


    const quantityFunc = (state: counterState, action: actionType): counterState => {

        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                if (state.count > 0) {
                    return { count: state.count - 1 };
                } else {
                    return state;
                }
            case 'reset':
                return { count: 0 }
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(quantityFunc, { count: 0 })



    const handleAddClick = useCallback(() => {
        if (state.count > 0 && !isInCart) {
            addToCart({
                id: product?.id,
                image: product?.image,
                title: product?.title,
                price: product?.price,
                description: product?.description,
                category: product?.category,
                rating: product?.rating,
                quantity: state.count,
            });
            dispatch({ type: 'reset' });
            getCartTotal();
            notify();
        }
    }, [state.count]);



    return (
        <>
            <div className='flex items-center mb-4' >
                <button onClick={() => dispatch({ type: 'increment' })}>
                    <FaPlus size={23} />
                </button>

                <span className='mx-12 font-bold text-[18px]'>{state?.count}</span>

                <button onClick={() => dispatch({ type: 'decrement' })} className={classNames('', {})} disabled={state?.count == 0}>
                    <FaMinus size={23} />
                </button>
            </div >

            <button
                onClick={handleAddClick}
                className='bg-orange text-black rounded-md px-8 py-2'>Add to Cart
            </button>

            <ToastContainer />

        </>
    )
}

export default AddToCart







