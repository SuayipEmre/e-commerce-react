import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';
import { cartItemType } from '~/common/productsType'
import { deleteFromCart, editCart } from '~/redux/features/cart/actions';
import { CartEditPropsType } from '../../productCard/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartEdit: React.FC<CartEditPropsType> = ({ productItem }) => {


    const notify = () => toast.success(`${productItem.title} was removed from Shopping Cart.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const quantity = (productItem as cartItemType).quantity

    const [count, setCount] = useState(quantity)


    const handleDeleteCLick = async () => {
        await deleteFromCart(productItem.id)
        notify()
    }

    useEffect(() => {
        const updateCart = async () => {
            await editCart({
                id: productItem.id,
                quantity: count,
                totalPrice: productItem.price * count
            })
            window.location.reload()

        }

        if (count !== undefined && count !== quantity) updateCart()
        else if (count == 0) deleteFromCart(productItem.id)



    }, [count, quantity, productItem.id])




    const modifyCount = (type: 'inc' | 'dec') => {
        if (type === 'inc') setCount(current => current + 1)
        type == 'dec' ? count == 0 ? setCount(0) : setCount(current => current - 1) : null
    }


    return (
        <div className='flex items-center gap-8 justify-end me-8'>

            <FaPlus className='cursor-pointer' onClick={() => modifyCount('inc')} />
            <span>{count}</span>
            <FaMinus className='cursor-pointer' onClick={() => modifyCount('dec')} />

            <FiTrash onClick={handleDeleteCLick} className='cursor-pointer' />

            <ToastContainer />
        </div>
    )
}

export default CartEdit