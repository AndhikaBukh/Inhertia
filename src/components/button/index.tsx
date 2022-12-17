import React, { FC, useEffect } from 'react';
import styles from './index.module.scss';

interface ButtonProps {
	show?: boolean;
	children?: any;
	variant?: 'primary' | 'bold' | 'optional';
	type?: 'button' | 'submit' | 'reset';
	onClick?: (e?: any) => void;
	className?: string;
}

const ButtonComponent: FC<ButtonProps> = props => {
	const {
		show = true,
		children,
		variant = 'primary',
		type = 'button',
		onClick,
		className,
	} = props;

	const refElement = React.useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (type === 'submit') {
			refElement.current?.addEventListener('keyup', e => {
				e.preventDefault();

				e.stopPropagation();

				if (e.key === 'Enter') {
					onClick?.(e);
				}
			});
		}
	}, []);

	return show && show ? (
		<button
			// prettier-ignore
			className={`${styles.button} ${styles[`button--${variant}`]} ${className ? styles[`${className}`] : '' }`}
			onClick={(e: any) => (onClick !== undefined ? onClick(e) : null)}
			type={type}
			ref={refElement}
		>
			{children}
		</button>
	) : null;
};

export default ButtonComponent;
