import React, { useEffect } from 'react'
import { useProductDetails } from '~/redux/features/productDetails/hooks'
import Rating from '../../productRating'
import { fetchProductByCategory } from '~/redux/features/products/actions'





const ProductDetailItem: React.FC = () => {
    const productDetail: any = useProductDetails()
    useEffect(() => {
        fetchProductByCategory(productDetail.category)
    }, [])



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
                    <div className='mt-3 md:mt-12 mb-4'>
                        <button className='bg-orange text-black rounded-md px-8 py-2'>Add to Cart</button>
                    </div>
                </div>


            </div>
            
            

        </div>
    )
}

export default ProductDetailItem