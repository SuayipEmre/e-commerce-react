import React, { useEffect } from 'react'
import CartComp from '~/components/cartComp'
import Error from '~/components/errorAndLoading/error'
import Loading from '~/components/errorAndLoading/loading'
import { fetchProductFromCart, getCartTotal } from '~/redux/features/cart/actions'
import { useCart, useCartStatus } from '~/redux/features/cart/hooks'

const Cart: React.FC = () => {

  const { isLoading, isError } = useCartStatus()
  const cart = useCart()

  useEffect(() => {
    fetchProductFromCart()
    getCartTotal()
  }, [])


  return (
    <div>
      {cart.length !== 0 && <h4>Your Basket </h4>}
      {
        isError ? <Error /> : isLoading ? <Loading /> : <CartComp />
      }
    </div>
  )
}

export default Cart