import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './styles/colours.scss';
import AppProvider from './pages/App';

const root = ReactDOM.createRoot(document.querySelector('.root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppProvider />
		</BrowserRouter>
	</React.StrictMode>
);
