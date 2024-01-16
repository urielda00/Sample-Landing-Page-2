import 'intersection-observer';
import { useDispatch } from 'react-redux';
import { IsSection } from '../features/Tabs';
import React, { useEffect, useRef } from 'react';

const SectionWrapper = ({ id, children }) => {
	const sectionRef = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.8, // Adjust this value as needed
		};

		const callback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					dispatch(IsSection(id));
				}
			});
		};

		const observer = new IntersectionObserver(callback, options);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [id, dispatch, sectionRef]);

	return <div ref={sectionRef}>{children}</div>;
};

export default SectionWrapper;
