import React from "react"
import ProductCard from "~/components/productCard"
import MatchesFound from "~/components/search/matchesFound"
import NoMatches from "~/components/search/noMatches"
import { filterProducts } from "~/helpers/filterProducts"
import { useFavoriteProducts } from "~/redux/features/favoriteProducts/hooks"
import { useSearchValue } from "~/redux/features/searchProducts/hooks"

const FavoriteProductsComp: React.FC = () => {
  const favoriteProducts = useFavoriteProducts()
  const filteredProducts = filterProducts(favoriteProducts)
  const searchValue = useSearchValue()


  return (
    <div className="">
      <h4 className="mt-12">Your Favorite products.</h4>

      <div className=" flex items-center justify-center ">
        {
          searchValue ? (
            filteredProducts.length == 0 ?   <NoMatches /> : <MatchesFound amount={filteredProducts.length} /> 
          ) : <></>
        }
      </div>
      <div className="grid grid-cols-12 gap-7">
      {
        filteredProducts.map((item, idx) => (
          <ProductCard onFavoritePage productItem={item} key={idx} />
        ))
      }
      </div>
    </div>
  )
}

export default FavoriteProductsComp

