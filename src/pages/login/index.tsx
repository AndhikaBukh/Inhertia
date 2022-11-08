import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import InputComponent from '../../components/input';

import styles from './index.module.scss';
import global from '../../styles/global.module.scss';
import { useForm } from '../../hooks/useForm';
import { LockFilledIcon, UserFilledIcon } from '../../components/icons';
import NavbarPage from '../../components/navbar/page';
import { useApp } from '../App';

const LoginPage = () => {
	const app = useApp();
	const navigate = useNavigate();
	const form = useForm();

	app?.setPageTitle('Login');
	app?.navbarConfig({
		_show: false,
	});

	// Handle user login
	const takeEmailInput = useRef<HTMLInputElement>(null);
	const [highlightEmail, setHighlightEmail] = useState(false);
	const takePasswordInput = useRef<HTMLInputElement>(null);
	const [highlightPassword, setHighlightPassword] = useState(false);

	return (
		<div className={styles.login}>
			<NavbarPage />

			<div className={styles.login__container}>
				<header className={styles.login__container__header}>
					<h1 className={styles.login__container__header_title}>
						Hi There! <br />
						Welcome Back.
					</h1>
				</header>

				<InputComponent
					icon={<UserFilledIcon color="#0e67ed" />}
					placeholder="Email Address"
					type="email"
					refElement={takeEmailInput}
					isHighlighted={highlightEmail}
				/>
				<InputComponent
					icon={<LockFilledIcon color="#0e67ed" />}
					eventIcon={form?.passwordIcon}
					handleEventIcon={form?.showPassword}
					placeholder="Password"
					type={form?.passwordType}
					refElement={takePasswordInput}
					isHighlighted={highlightPassword}
				/>

				<div className={styles.login__container__forget_password}>
					<Link
						className={styles.login__container__forget_password__lin}
						to="/accounts/password/forgot"
					>
						Forgot Your Password?
					</Link>
				</div>
			</div>

			<div className={styles.login__button_container}>
				<Button type="submit" onClick={() => navigate('/')}>
					Log In
				</Button>

				<Link to="/signup" className={global.react_link}>
					<Button variant="optional">Don’t have account? Sign Up</Button>
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
