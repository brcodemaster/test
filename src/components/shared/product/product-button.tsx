'use client'

import { useAppContext } from '@/lib/providers'
import { Loader, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import productsJSON from '../../../db/db.json'

type Props = {
	id: number
}

export const ProductButton: React.FC<Props> = ({ id }) => {
	const products = productsJSON.products
	const { setCart, cart } = useAppContext()
	const [isDisabled, setIsDisabled] = useState(false)

	const handleClick = () => {
		const product = cart.find(item => item.id === id)

		setIsDisabled(true)
		if (product) {
			setCart(prev =>
				prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
			)
		} else {
			const product = products.filter(product => product.id === id)[0]
			setCart(prev => [...prev, { ...product, quantity: 1 }])
		}

		setTimeout(() => setIsDisabled(false), 500)
	}

	return (
		<button className='product__card-label' onClick={handleClick} disabled={isDisabled}>
			{!isDisabled ? <ShoppingCart size={50} /> : <Loader />}
		</button>
	)
}
