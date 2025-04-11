'use client'

import { useAppContext } from '@/lib/providers'
import { ShoppingCart } from 'lucide-react'

export const HeaderButton: React.FC = () => {
	const { setIsOpen } = useAppContext()

	const handleClick = () => {
		setIsOpen(true)
	}

	return (
		<button className='header__button' onClick={handleClick}>
			<ShoppingCart />
		</button>
	)
}
