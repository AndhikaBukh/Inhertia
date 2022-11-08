import { ChangeEventHandler, FC, RefObject, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface InputProps {
	show?: boolean;
	placeholder?: string;
	type?: string;
	style?: React.CSSProperties;
	icon?: JSX.Element;
	eventIcon?: JSX.Element;
	handleEventIcon?: (event: any) => void;
	handleElement?: ChangeEventHandler<HTMLInputElement> | ((element: any) => void);
	refElement?: RefObject<HTMLInputElement>;
	onChange?: (event: any) => void;
	isHighlighted?: boolean;
	value?: string;
	disabled?: boolean;
	autoFocus?: boolean;
	autoComplete?: string;
	maxLength?: number;
	className?: string;
}

const InputComponent: FC<InputProps> = ({
	show = true,
	placeholder,
	type = 'text',
	style,
	icon = undefined,
	eventIcon,
	handleEventIcon = e => e,
	refElement = useRef<HTMLInputElement>(null),
	onChange = e => e,
	isHighlighted = false,
	value,
	disabled = false,
	autoFocus = false,
	autoComplete = 'yes',
	maxLength,
	className,
}) => {
	// prettier-ignore
	const handleClassName = `${styles.input_container} ${icon === undefined && eventIcon === undefined ? styles['input_container--without-icon'] : ''} ${isHighlighted ? styles['input_container--highlighted'] : ''} ${className ? styles.className : ''}`;

	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return show && type !== 'textarea' ? (
		<div
			className={handleClassName}
			onClick={() => refElement.current?.focus()}
			style={{
				cursor: disabled ? 'not-allowed' : 'text',
			}}
		>
			{icon !== undefined ? (
				<div
					className={styles.input_container__icon_wrapper}
					onClick={() => refElement.current?.focus()}
				>
					{icon}
				</div>
			) : null}

			<input
				className={styles.input_container__element}
				type={type}
				style={style}
				placeholder={placeholder}
				ref={refElement}
				defaultValue={value}
				onChange={e => {
					onChange(e);
				}}
				disabled={disabled}
				autoFocus={autoFocus}
				autoComplete={autoComplete}
				maxLength={maxLength}
			/>

			{eventIcon !== undefined ? (
				<button
					className={`
					${styles.input_container__icon_wrapper} ${styles['input_container__icon_wrapper--event']}`}
					onClick={handleEventIcon}
				>
					{eventIcon}
				</button>
			) : null}
		</div>
	) : show && type === 'textarea' ? (
		<textarea
			className={`${styles.input_container__element} ${styles['input_container__element--textarea']} ${className}`}
			placeholder={placeholder}
			value={inputValue}
			onChange={e => {
				setInputValue(e.target.value);
				onChange(e);
			}}
			disabled={disabled}
			autoFocus={autoFocus}
			spellCheck={false}
		/>
	) : null;
};

export default InputComponent;
