import React, { useEffect, useReducer } from 'react'
import classNames from 'classnames'
import Rating from '../../productRating'
import { useProductDetails } from '~/redux/features/productDetails/hooks'
import { fetchProductByCategory } from '~/redux/features/products/actions'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { productItemType } from '~/common/productsType'
import { addToCart, getCartTotal } from '~/redux/features/cart/actions';
import { actionType, counterState } from './types'





const ProductDetailItem: React.FC = () => {
    const productDetail: productItemType | any = useProductDetails()

    useEffect(() => {
        fetchProductByCategory(productDetail.category)
    }, [productDetail])



    const handleAddClick = () => {
        if (state.count > 0) {
            addToCart({
                id: productDetail?.id,
                image: productDetail?.image,
                title: productDetail?.title,
                price: productDetail?.price,
                description: productDetail?.description,
                category: productDetail?.category,
                rating: productDetail?.rating,
                quantity: state.count,
            })
            dispatch({ type: 'reset' })
            getCartTotal()
        }
    }


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


    return (
        <div>

            <div className='flex flex-col gap-4   md:flex-row '>
                <div className='flex md:w-[40%]  items-center justify-center md:justify-start  '>
                    <img className='h-48  md:h-72' src={productDetail.image} alt="" />
                </div>

                <div className='mt-4 md:w-[60%]'>
                    <h4> Categorty : {productDetail.category}</h4>
                    <h3 className='font-bold'>{productDetail.title}</h3>
                    <Rating rate={productDetail?.rating?.rate} count={productDetail?.rating?.count} />
                    <div className='mt-4 tracking-tight'>
                        <p>{productDetail?.description}</p>
                    </div>
                    <p>{productDetail.price}</p>
                    <div className='mt-3 md:mt-12 mb-4'>
                        <div className='flex items-center mb-4'>
                            <button onClick={() => dispatch({ type: 'increment' })}>
                                <FaPlus size={23} />
                            </button>

                            <span className='mx-12 font-bold text-[18px]'>{state?.count}</span>

                            <button onClick={() => dispatch({ type: 'decrement' })} className={classNames('', {})} disabled={state?.count == 0}>
                                <FaMinus size={23} />
                            </button>
                        </div>
                        <button
                            onClick={handleAddClick}
                            className='bg-orange text-black rounded-md px-8 py-2'>Add to Cart</button>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default ProductDetailItem