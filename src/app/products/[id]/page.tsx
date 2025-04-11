import { ProductButton } from '@/components/shared/product-button'
import { Container } from '@/components/ui'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import productsJSON from '../../../db/db.json'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	const product = productsJSON.products.find(product => product.id === Number(id))

	if (!product) {
		return notFound()
	}

	return (
		<Container className='product'>
			<div className='product__card'>
				<Image
					src={product.image}
					alt={'model' + product.name}
					className='product__img'
					width={256}
					height={287}
				/>
				<div className='product__info'>
					<div className='product__info-title'>
						<h2 className='product__info-title-name'>{product.name}</h2>
						<p className='product__info-title-price'>{product.price}$</p>
					</div>
					<p className='product__info-description'>{product.description}</p>
				</div>
				<ProductButton id={Number(product.id)} />
			</div>
		</Container>
	)
}
