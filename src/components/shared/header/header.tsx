import { Container } from '@/components/ui'
import { HeaderButton } from './header-button'
import { Navigation } from './navigation'

export const Header: React.FC = () => {
	return (
		<header className='header'>
			<Container className='header__container'>
				<div className='header__logo'>LOGO</div>

				<Navigation />

				<HeaderButton />
			</Container>
		</header>
	)
}
