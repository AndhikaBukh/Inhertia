import { DefaultDeserializer } from 'v8';

/**
 * This is a custom hook that allows you to drag certain elements on the screen.
 *
 * @example
 * const drag = useDrag();
 *
 * <div
 * 	onMouseDown={e => drag.mouse(refDrag, refWrap, setShow, e)}
 * ></div>
 */
const useDrag = () => {
	const mouseDrag = (
		_elementDrag: React.MutableRefObject<any>,
		_elementWrap: React.MutableRefObject<any>,
		_elementSetState: React.Dispatch<React.SetStateAction<boolean>>,
		events: React.MouseEvent<any, any>
	) => {
		let position = 0;
		events.preventDefault();

		document.onmousemove = e => {
			e = e || window.event;

			position = e.clientY;

			if (position > 14) {
				if (_elementWrap.current) {
					_elementWrap.current.style.top = `${position}px`;
				}
			}
		};

		document.onmouseup = () => {
			document.onmouseup = null;
			document.onmousemove = null;

			if (position >= window.innerHeight / 12) {
				_elementSetState(false);

				if (_elementWrap.current) {
					_elementWrap.current.style.top = `${position}px`;
				}
			} else {
				if (_elementWrap.current) {
					_elementWrap.current.style.top = '2vh';
				}
			}
		};
	};

	const touchDrag = (
		_elementDrag: React.MutableRefObject<any>,
		_elementWrap: React.MutableRefObject<any>,
		_elementSetState: React.Dispatch<React.SetStateAction<boolean>>,
		events: React.TouchEvent<any>
	) => {
		let position = 0;
		events.preventDefault();
		document.body.style.overscrollBehavior = 'contain';

		document.ontouchmove = e => {
			e = e || window.event;

			position = e.touches[0].clientY;

			if (position > 14) {
				if (_elementWrap.current) {
					_elementWrap.current.style.top = `${position}px`;
				}
			}
		};

		document.ontouchend = () => {
			document.ontouchend = null;
			document.ontouchmove = null;
			document.body.style.overscrollBehavior = 'auto';

			if (position >= window.innerHeight / 12) {
				_elementSetState(false);

				if (_elementWrap.current) {
					_elementWrap.current.style.top = `${position}px`;
				}
			} else {
				if (_elementWrap.current) {
					_elementWrap.current.style.top = '2vh';
				}
			}
		};
	};

	return {
		/**
		 * This function is used to drag an element on the screen using the mouse.
		 * Currently it only supports dragging elements vertically.
		 *
		 * @param {React.RefObject<any>} _elementDrag - The ref of the element that you want to drag.
		 * @param {React.RefObject<any>} _elementWrap - The ref of the container element.
		 * @param {React.Dispatch<React.SetStateAction<boolean>>} _elementSetState - The state setter for the show state.
		 * @param {React.MouseEvent<any, any>} _event - The event that triggers the drag.
		 */
		mouse(
			_elementDrag: React.MutableRefObject<any>,
			_elementWrap: React.MutableRefObject<any>,
			_elementSetState: React.Dispatch<React.SetStateAction<boolean>>,
			events: React.MouseEvent<any, any>
		) {
			mouseDrag(_elementDrag, _elementWrap, _elementSetState, events);
		},
		touch(
			_elementDrag: React.MutableRefObject<any>,
			_elementWrap: React.MutableRefObject<any>,
			_elementSetState: React.Dispatch<React.SetStateAction<boolean>>,
			events: React.TouchEvent<any>
		) {
			touchDrag(_elementDrag, _elementWrap, _elementSetState, events);
		},
	};
};

export default useDrag;
