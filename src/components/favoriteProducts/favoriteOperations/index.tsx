import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { productItemType } from '~/components/products/types';
import { addToFavorites, removeFavoriteProduct } from '~/redux/features/favoriteProducts/actions';
import { useFavoriteProducts } from '~/redux/features/favoriteProducts/hooks';
import { IoHeartSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

type productType = {
    product: productItemType
}
const Favorite: React.FC<productType> = ({ product }) => {
    const favoriteProducts = useFavoriteProducts()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    
    useEffect(() => {
        const status = favoriteProducts.some(item => item.id == product.id)
        setIsFavorite(status)
    }, [])


    const handleFavoriteClick = async (): Promise<void> => {

        if (isFavorite) {
            await removeFavoriteProduct(product.id)
            setIsFavorite(false)
            return
        }
        await addToFavorites(product)
        setIsFavorite(true)
    }
    return (
        <>
            <div onClick={handleFavoriteClick} className={classNames('border  rounded-full p-1 group absolute top-2 right-10', {
                ' ': isFavorite
            })}>
                {
                    isFavorite ? <IoHeartSharp size={22} className='text-red-700 cursor-pointer ' /> : <AiOutlineHeart className='cursor-pointer   group-hover:text-orange' size={22} />
                }

            </div>
           

        </>
    )
}

export default Favorite

