// FadeInSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, className = '' }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
