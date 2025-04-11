'use client'

import { useAppContext } from '@/lib/providers'
import productsJSON from '../db/db.json'
import { ProductCard } from '@/components/shared'

export default function Page() {
	const products = productsJSON.products

	const { limit, setLimit } = useAppContext()

	const limitedProducts = products.filter((product, ind) => ind + 1 <= limit)

	return (
		<div className='hero'>
			<div className='hero__cards'>
				{limitedProducts &&
					limitedProducts.map(product => (
						<ProductCard
							key={product.id}
							id={product.id}
							imgAlt={'model' + product.name}
							imgUrl={product.image}
							price={product.price}
							name={product.name}
						/>
					))}
			</div>
			{limit !== products.length && (
				<button className='hero__button' onClick={() => setLimit(prev => (prev += 3))}>
					Показать больше
				</button>
			)}
		</div>
	)
}
