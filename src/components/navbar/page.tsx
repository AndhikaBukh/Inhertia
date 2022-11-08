import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useHistory from '../../hooks/useHistory';
import { ArrowLeftIcon } from '../icons';
import styles from './page.module.scss';

interface PageNavbarProps {
	show?: boolean;
	pageTitle?: string;
	pageIconLeft?: JSX.Element;
	handlePageIconLeft?: () => void;
	pageIconRight?: JSX.Element;
	handlePageIconRight?: () => void;
}

const NavbarPage: FC<PageNavbarProps> = ({
	pageTitle,
	pageIconLeft = undefined,
	handlePageIconLeft = () => history.goBack(true, '/login'),
	pageIconRight = undefined,
	handlePageIconRight,
}) => {
	const history = useHistory();

	return (
		<div className={styles.navbar_page}>
			<div className={styles.navbar_page__container}>
				<button className={styles.navbar_page__icon_wrapper} onClick={handlePageIconLeft}>
					{pageIconLeft === undefined ? <ArrowLeftIcon color="#000" /> : pageIconLeft}
				</button>

				<div className={styles.navbar_page__header}>{pageTitle}</div>

				<button className={styles.navbar_page__icon_wrapper} onClick={handlePageIconRight}>
					{pageIconRight}
				</button>
			</div>
		</div>
	);
};

export default NavbarPage;
