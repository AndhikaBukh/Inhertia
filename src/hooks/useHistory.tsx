import { useNavigate } from 'react-router-dom';

const useHistory = () => {
	const navigate = useNavigate();

	const goBack = (defaultLink?: string) => {
		if (window.history.length > 1) window.history.back();

		navigate(defaultLink || '/');
	};

	return {
		goBack,
	};
};

export default useHistory;
