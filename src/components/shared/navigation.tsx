'use client'

import { navigation } from '@/db/db'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation: React.FC = () => {
	const pathName = usePathname()
	const active = '/' + pathName.split('/')[1]

	return (
		<nav className='header__menu'>
			<ul className='header__menu-list'>
				{navigation &&
					navigation.map(navItem => (
						<li key={navItem.name} className='header__menu-list'>
							<Link
								href={navItem.link}
								className={`header__menu-link ${active === navItem.link ? 'active' : ''}`}
							>
								{navItem.name}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	)
}
