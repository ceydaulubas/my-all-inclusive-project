import React, { useEffect, useState } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

// Import the Api
import { fetchRandomQuoteApi } from '../../api/fetchRandomQuoteApi';

// Import the styled components
import {
    QuoteDisplayContainer,
    QuoteHeader,
    QuoteText,
    QuoteContent,
    QuoteAuthor,
    StyledLoadingOutlined,
} from './QuoteDisplay.styles';

// Import the interfaces
import { Quote } from '../../helper/interfaces';
import imagesData from '../../data/imagesData.json';

import { BackgroundQuteImage } from '../../helper/interfaces';

const QuoteDisplay: React.FC = () => {
    const quote = useSelector<RootState, Quote | null>(
        (state) => state.quote.quote
    );
    const error = useSelector((state: RootState) => state.quote.error);
    const dispatch = useDispatch();

    // Local State
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        const imageArray: BackgroundQuteImage[] = imagesData.images;
        const randomImage =
            imageArray[Math.floor(Math.random() * imageArray.length)].url;

        setBackgroundImage(randomImage);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await fetchRandomQuoteApi(dispatch);
        };

        fetchData();
    }, [dispatch]);

    return (
        <QuoteDisplayContainer backgroundImage={backgroundImage}>
            <QuoteHeader>Random Quote</QuoteHeader>
            {error ? (
                <QuoteText>
                    <QuoteContent>
                        "Whoever is happy will make others happy too."
                    </QuoteContent>
                    <QuoteAuthor>Anne Frank</QuoteAuthor>
                </QuoteText>
            ) : quote ? (
                <QuoteText>
                    <QuoteContent>"{quote.quote}"</QuoteContent>
                    <QuoteAuthor>{quote.author}</QuoteAuthor>
                </QuoteText>
            ) : (
                <StyledLoadingOutlined spin />
            )}
        </QuoteDisplayContainer>
    );
};

export default QuoteDisplay;
