import { useNavigate } from 'react-router-dom';

const useHistory = () => {
	const navigate = useNavigate();

	const goBack = (isDefault = false, defaultLink = '/') => {
		if (isDefault) {
			navigate(defaultLink);
			return;
		}

		if (window.history.length > 1) {
			window.history.back();
			return;
		}

		navigate('/');
	};

	return {
		goBack,
	};
};

export default useHistory;
