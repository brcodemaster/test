'use client'

import { Container } from '@/components/ui'
import { SearchCard } from '@/components/ui/search-card'
import { KeyboardEvent, useState } from 'react'
import productsJSON from '../../db/db.json'

export default function Page() {
	const [query, setQuery] = useState('')
	const [products, setProducts] = useState<typeof productsJSON.products>([])

	const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSubmit()
		}
	}

	const handleSubmit = () => {
		if (!query) return

		const product = productsJSON.products

		const result = product.filter(productCard => productCard.name.includes(query))
		setProducts(result)
	}

	return (
		<Container className='search'>
			<div className='search__box'>
				<input
					className='search__box-input'
					name='search'
					placeholder='Search product'
					value={query}
					onChange={e => setQuery(e.target.value)}
					onKeyDown={handleKey}
				/>
				<div
					className='search__box-product'
					style={{
						opacity: products.length > 0 ? '100%' : 0,
						visibility: products.length > 0 ? 'visible' : 'hidden',
						top: products.length > 0 ? '60px' : '500px',
					}}
				>
					{products.length > 0 &&
						products.map(productCard => (
							<SearchCard
								key={productCard.id}
								id={productCard.id}
								imgUrl={productCard.image}
								name={productCard.name}
							/>
						))}
				</div>
			</div>
		</Container>
	)
}
