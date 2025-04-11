'use client'

import { useAppContext } from '@/lib/providers'
import { Trash } from 'lucide-react'
import Image from 'next/image'

export const Sheet: React.FC = () => {
	const { isOpen, setIsOpen, cart, setCart } = useAppContext()

	const handleClick = () => {
		setIsOpen(false)
	}

	const handleDelete = (id: number) => {
		const deletedItem = cart
			.map(item => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity - 1 }
				} else {
					return item
				}
			})
			.filter(item => item.quantity > 0)

		setCart(deletedItem)
	}

	return (
		<>
			<div
				className='aside'
				style={{
					visibility: isOpen ? 'visible' : 'hidden',
					opacity: isOpen ? '100%' : 0,
				}}
				onClick={handleClick}
			></div>

			<div
				className='sheet'
				style={{
					right: isOpen ? '0' : '-100%',
				}}
			>
				<div className='sheet__inner'>
					<div className='sheet__header'>
						Корзинка товаров
						<div className='sheet__header-X' onClick={handleClick}>
							X
						</div>
					</div>

					<div className='sheet__content'>
						{cart.length > 0 ? (
							cart.map((cartItem, ind) => (
								<div key={cartItem.name + ind} className='sheet__product'>
									<Image
										src={cartItem.image}
										alt={'model' + cartItem.name}
										width={50}
										height={50}
									/>
									{cartItem.name}{' '}
									<span className='sheet__quantity'>
										{cartItem.quantity}{' '}
										<Trash className='sheet__trash' onClick={() => handleDelete(cartItem.id)} />
									</span>
								</div>
							))
						) : (
							<div>нет товаров</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
