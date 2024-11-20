import { useState, useEffect } from 'react';

const useResponsiveSlides = () => {
    const [visibleSlides, setVisibleSlides] = useState<number>(3);

    useEffect(() => {
        const updateSlides = () => {
            const width = window.innerWidth;

            if (width <= 768) {
                setVisibleSlides(1); // Mobile: 1 slide
            } else if (width > 768 && width <= 1024) {
                setVisibleSlides(2); // Tablet: 2 slides
            } else {
                setVisibleSlides(3);  // Desktop: 3 slides
            }
        };

        updateSlides();
        window.addEventListener('resize', updateSlides);
        return () => window.removeEventListener('resize', updateSlides);
    }, []);

    return visibleSlides;
};

export default useResponsiveSlides;
