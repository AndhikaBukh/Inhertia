import { FC } from 'react';
import styles from './index.module.scss';
import { GridIcon } from '../emojiMicrosoft';
import categoryData from '../../data/fullCategory';

interface CategoriesProps {
	title: string;
}

const Categories: FC<CategoriesProps> = ({ title }) => {
	let color, icon;

	categoryData.map(category => {
		if (title.includes(category.title)) {
			color = category.color;
			icon = category.icon;
		}
	});

	return title !== 'others' ? (
		<div className={styles.category}>
			<div
				className={styles.category__background}
				style={{
					backgroundColor: color,
				}}
			></div>

			<div className={styles.category__foreground}>{icon}</div>
		</div>
	) : (
		<div className={styles.category}>
			<div
				// prettier-ignore
				className={`${styles.category__background} ${styles['category__background--others']}`}
			></div>

			<div
				// prettier-ignore
				className={`${styles.category__foreground} ${styles['category__foreground--others']}`}
			>
				<GridIcon />
			</div>
		</div>
	);
};

export default Categories;
