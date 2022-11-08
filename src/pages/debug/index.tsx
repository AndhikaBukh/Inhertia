import { useEffect, useRef } from 'react';
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
			_children: undefined,
		});
	}, []);

	const navigateInput = useRef<HTMLInputElement>(null);

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
			</div>
		</div>
	);
};

export default DebugPage;
