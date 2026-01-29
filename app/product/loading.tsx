import {SkeletonCard} from "../../Components/skeleton";
import React from "react";

export default function ProductLoading() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <main className="container mx-auto ">
           <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-3 m-2">
               {array.map((index) => <SkeletonCard key={index} />)}

           </section>



        </main>

    )
}
