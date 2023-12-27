import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { addToFavorites, removeFavoriteProduct } from '~/redux/features/favoriteProducts/actions';
import { useFavoriteProducts } from '~/redux/features/favoriteProducts/hooks';
import { IoHeartSharp } from "react-icons/io5";
import { FavoritePropsType } from './type';


const Favorite: React.FC<FavoritePropsType> = ({ product }) => {
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
        <div className='absolute top-2 right-10'>
            <div onClick={handleFavoriteClick} className='border  rounded-full p-1 group '>
                {
                    isFavorite ? <IoHeartSharp size={22} className='text-red-700 cursor-pointer ' /> : <AiOutlineHeart className='cursor-pointer   group-hover:text-orange' size={22} />
                }
            </div>
        </div>
    )
}

export default Favorite

