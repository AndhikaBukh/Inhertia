import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/button';
import { HamburgerEmoji } from '../../components/emojiMicrosoft';
import InputComponent from '../../components/input';
import { useApp } from '../App';
import styles from './index.module.scss';

const DebugPage = () => {
	const app = useApp();
	const navigate = useNavigate();

	useEffect(() => {
		app?.setPageTitle('Developer Tools');
		app?.navbarConfig({
			_show: true,
			_title: 'Developer Tools',
			_back: true,
			_menu: false,
		});
	}, []);

	const navigateInput = useRef<HTMLInputElement>(null);

	const [buttonEvent, setButtonEvent] = useState<any>('No Event');

	return (
		<div className={styles.debug}>
			<div className={styles.debug__container}>
				<InputComponent refElement={navigateInput} />
				<ButtonComponent
					onClick={() => {
						navigate(`/${navigateInput.current?.value}`);
					}}
				>
					Navigate To
				</ButtonComponent>

				<h4>Button Event Listener : {buttonEvent}</h4>

				<ButtonComponent
					onClick={(e: any) => {
						e.preventDefault();

						e.target.addEventListener('touchstart', (e: any) => {
							setButtonEvent(e.type);
							console.log(e.type);
						});

						e.target.addEventListener('mousedown', (e: any) => {
							setButtonEvent(e.type);
							console.log(e.type);
						});
					}}
				>
					Check Button Event Listener
				</ButtonComponent>
			</div>
		</div>
	);
};

export default DebugPage;
