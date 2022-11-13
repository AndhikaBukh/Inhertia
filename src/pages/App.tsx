import React, { createContext, useContext, useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';

// Main Components
import NavbarApp from '../components/navbar/main';

// Pages
import LandingPage from './landing';
import LoginPage from './login';
import HomePage from './home';
import DebugPage from './debug';
import SearchPage from './search';

// Hooks
import useHistory from '../hooks/useHistory';

interface NavbarConfig {
	_title?: string | undefined;
	_placeholder?: string | undefined;
	_show?: boolean | undefined;
	_back?: boolean | undefined;
	_backAction?: (() => void) | undefined;
	_menu?: boolean | undefined;
	_children?: React.ReactNode | undefined;
}

interface AppContext {
	setPageTitle: (_title: string) => void;

	navbarConfig: ({ _title, _show, _back, _backAction, _menu }: NavbarConfig) => void;
	showNavbar: (_set: boolean) => void;
}

const AppContext = createContext<AppContext | null>(null);

const AppProvider = () => {
	const history = useHistory();

	const setPageTitle = (_title?: string) => {
		document.title = `Inhertia${_title ? ` - ${_title}` : ''}`;
	};

	// Navbar Config
	const [navbarTitle, setNavbarTitle] = useState<string | undefined>();
	const [navbarPlaceholder, setNavbarPlaceholder] = useState<string | undefined>();
	const [navbarShow, setNavbarShow] = useState<boolean>();
	const [navbarBack, setNavbarBack] = useState<boolean>();
	const setNavbarBackAction = (action: () => void) => {
		action;
	};
	const [navbarMenu, setNavbarMenu] = useState<boolean>();
	const [navbarChildren, setNavbarChildren] = useState<React.ReactNode | undefined>();

	const navbarConfig = ({
		_title = undefined,
		_placeholder = undefined,
		_show = true,
		_back = false,
		_backAction = () => history.goBack(),
		_menu = true,
		_children = undefined,
	}: NavbarConfig) => {
		setNavbarTitle(_title);
		setNavbarPlaceholder(_placeholder);
		setNavbarShow(_show);
		setNavbarBack(_back);
		setNavbarBackAction(_backAction);
		setNavbarMenu(_menu);
		setNavbarChildren(_children);
	};

	const showNavbar = (_set: boolean) => {
		setNavbarShow(_set);
	};

	useEffect(() => {
		return () => {
			setPageTitle();
		};
	});

	return (
		<AppContext.Provider
			value={{
				setPageTitle,

				navbarConfig,
				showNavbar,
			}}
		>
			<div className={styles.app}>
				<div className={styles.app__container}>
					<NavbarApp
						title={navbarTitle}
						placeholder={navbarPlaceholder}
						showNavbar={navbarShow}
						showBackButton={navbarBack}
						showMenuButton={navbarMenu}
					>
						{navbarChildren ? navbarChildren : null}
					</NavbarApp>

					<Routes>
						{/* Public Routes */}

						<Route path="/landing" element={<LandingPage />} />

						<Route path="/login" element={<LoginPage />} />

						{/* Private Routes */}

						<Route path="/" element={<HomePage />} />

						<Route path="/search" element={<SearchPage />} />

						<Route path="/debug" element={<DebugPage />} />
					</Routes>
				</div>
			</div>
		</AppContext.Provider>
	);
};

export const useApp = () => {
	return useContext(AppContext);
};

export default AppProvider;
