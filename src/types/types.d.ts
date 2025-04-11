type productType = {
	id: number
	name: string
	description: string
	price: number
	image: string
}

type productCartItem = { quantity: number } & productType
