import React from "react";
import NoMatches from "../search/noMatches";
import MatchesFound from "../search/matchesFound";
import { useProducts, useProductsStatus, } from "~/redux/features/products/hooks";
import { useSortValue } from "~/redux/features/sorting/hooks";
import { filterProducts } from "~/helpers/filterProducts";
import ProductCard from "../productCard";
import Error from "../errorAndLoading/error";
import Loading from "../errorAndLoading/loading";

const Products: React.FC = () => {
  const { isLoading, isError } = useProductsStatus();
  const products = useProducts();
  const filteredProducts = filterProducts(products);
  const numberOfProducts = filteredProducts.length;
  const sort = useSortValue();


  const renderItems = () => {

    if (isError) return <Error />
    else if (isLoading) return <Loading />



    return (

      numberOfProducts == 0 ? <NoMatches /> : (
        <>
          <MatchesFound amount={numberOfProducts} />

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-12 gap-4 w-[90%]">
              {
                filteredProducts
                  .slice()
                  .sort((a, b): any =>
                    sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null
                  )
                  .map((item) => (
                    <ProductCard productItem={item} key={item.id} />
                  ))
              }
            </div>
          </div>
        </>
      )
    )


  }


  return (
    <div >
      {
        renderItems()
      }
    </div>
  )
}

export default Products;
