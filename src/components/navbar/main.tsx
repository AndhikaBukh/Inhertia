import { FC } from 'react';
import { Link } from 'react-router-dom';
import useHistory from '../../hooks/useHistory';
import { GridIcon } from '../emojiMicrosoft';
import { ArrowLeftFilledIcon, SearchIcon } from '../icons';
import styles from './main.module.scss';

interface NavbarProps {
	title?: string;
	showNavbar?: boolean;
	showBackButton?: boolean;
	showMenuButton?: boolean;

	children?: React.ReactNode;
}

const NavbarMain: FC<NavbarProps> = ({
	title = undefined,
	showNavbar = true,
	showBackButton = false,
	showMenuButton = true,
	children,
}) => {
	const history = useHistory();

	return showNavbar && showNavbar ? (
		<div className={styles.navbar}>
			<div className={styles.navbar__container}>
				{showBackButton && (
					<button
						className={styles.navbar__button}
						onClick={() => history.goBack(true, '/')}
					>
						<ArrowLeftFilledIcon />
					</button>
				)}

				{title ? (
					<div className={styles.navbar__title}>{title}</div>
				) : (
					<div className={styles.navbar__search}>
						<button
							className={styles.navbar__search__icon}
							onClick={() => console.log('This will be search function ')}
							tabIndex={-1}
						>
							<SearchIcon color="#000" />
						</button>

						<input
							className={styles.navbar__search__field}
							placeholder="Selamat Pagi Andhika!"
						/>
					</div>
				)}

				{showMenuButton && (
					<Link to="/debug" className={styles.navbar__button}>
						<GridIcon />
					</Link>
				)}
			</div>

			{children && children}
		</div>
	) : null;
};

export default NavbarMain;
