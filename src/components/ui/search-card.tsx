import Image from 'next/image'
import Link from 'next/link'

type Props = {
	imgUrl: string
	id: number
	name: string
}

export const SearchCard: React.FC<Props> = ({ id, imgUrl, name }) => {
	return (
		<Link href={`products/${id}`} className='search__box-product-item'>
			<Image
				src={imgUrl}
				alt={'model' + name}
				width={100}
				height={100}
				className='search__box-product__img'
			/>
			<div className='search__box-product__info'>
				<h3 className='search__box-product__name'>{name}</h3>
			</div>
		</Link>
	)
}
