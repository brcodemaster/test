import { PropsWithChildren } from 'react'

type Props = {
	className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
	return <div className={`container ${className || ''}`}>{children}</div>
}
