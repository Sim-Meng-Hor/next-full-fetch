
import {CardImage} from "../../Components/i-tech-cards/product-card";
import {load} from "next/dist/compiled/@edge-runtime/primitives/load";
import {ProductResponse} from "../../lib/type/Product";


// create function to get data from api
const BASE_URL = process.env.NEXT_PUBLIC_API;
// async function loadProduct(){
//     const response = await fetch(`${BASE_URL}/api/v1/products`, {
//         method: "GET",
//     })
//     const products = await response.json();
//     return products;
// }
export  default async function Productpage() {
    const response = await fetch(`${BASE_URL}/api/v1/products`)
    const products :ProductResponse[] = await  response.json();
    console.log(products);
  return (

          <main className="container mx-auto pt-10">
             <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-3">
                 {
                     products.map((product, index) => (
                         <CardImage
                             key = {index}
                             images = {product.images}
                             title = {product.title}
                             description = {product.description}
                         />

                     ))
                 }
             </section>
          </main>

  )
}