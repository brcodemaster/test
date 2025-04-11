import Image from 'next/image'
import Link from 'next/link'

type Props = {
	id: number
	imgUrl: string
	imgAlt: string
	name: string
	price: number
}

export const ProductCard: React.FC<Props> = ({ id, imgUrl, imgAlt, name, price }) => {
	return (
		<Link href={`/products/${id}`} className='card-item'>
			<Image src={imgUrl} alt={imgAlt} className='card-item__img' width={200} height={200} />
			<div className='card-item__info'>
				<p className='card-item__info-name'>{name}</p>
				<p className='card-item__info-price'>{price}$</p>
			</div>
		</Link>
	)
}
