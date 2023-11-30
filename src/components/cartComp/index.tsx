import React, { useEffect } from 'react'
import { useCart, useTotalPrice } from '~/redux/features/cart/hooks'
import ProductCard from '../productCard'
import { getCartTotal } from '~/redux/features/cart/actions'




const CartComp: React.FC = () => {
    const cart = useCart()
    const total = useTotalPrice()



    useEffect(() => {
        getCartTotal()
    }, [cart])

    return (
        <div className='flex items-center flex-col justify-center mt-12'>
            <div className='grid grid-cols-6 w-[80%] md:w-[50%] gap-5 '>
                {
                    cart.length == 0 && <p className='col-span-6 text-end '>Your fake store cart is empty</p>
                }
               
                {
                    cart.map((item, idx) => (
                        <ProductCard onCart productItem={item} key={idx} />
                    ))
                }

                <p className='col-span-6 font-light text-[15px] text-orange text-end'>subTotal : {total}$</p>
            </div>

        </div>
    )
}

export default CartComp