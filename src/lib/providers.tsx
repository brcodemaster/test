'use client'

import { createContext, PropsWithChildren, useContext, useState } from 'react'

type StoreType = {
	limit: number
	setLimit: React.Dispatch<React.SetStateAction<number>>

	cart: productCartItem[]
	setCart: React.Dispatch<React.SetStateAction<productCartItem[]>>

	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext<StoreType>({
	limit: 3,
	setLimit: () => {},

	cart: [],
	setCart: () => {},

	isOpen: false,
	setIsOpen: () => {},
})

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
	const [limit, setLimit] = useState(3)
	const [cart, setCart] = useState<productCartItem[]>([])
	const [isOpen, setIsOpen] = useState(false)

	return (
		<AppContext.Provider value={{ limit, setLimit, cart, setCart, isOpen, setIsOpen }}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => useContext(AppContext)
