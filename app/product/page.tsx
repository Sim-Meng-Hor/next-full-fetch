import {Suspense} from "react";
import ProductList from "./product-list";
import ProductLoading from "./loading";

export default  function ProductPage(){
    return (
        <Suspense fallback={<ProductLoading/>}>
            <ProductList/>
        </Suspense>
    )
}