


import { UserResponse } from "../../lib/type/user";
import { ProductUserCard } from "../../Components/i-tech-cards/ProductUser";

const BASE_URL = process.env.NEXT_PUBLIC_API;

export default async function CardProductUser() {

  const response = await fetch(`${BASE_URL}/api/v1/users?limit=100&offset=0`)
    const products: UserResponse[] = await response.json();

    return (
      <main className="container mx-auto pt-10">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((product, index) => (
            <ProductUserCard
              key={index}
              id={product.id}
              avatar={product.avatar}
              name={product.name}
              roles={product.roles}
            />
          ))}
        </section>
      </main>
    );
  } 
  