// components/QuoteDisplay.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchRandomQuoteApi } from '../../api/fetchRandomQuoteApi';
import imagesData from '../../data/imagesData.json';
import {
    QuoteDisplayContainer,
    QuoteHeader,
    QuoteText,
    QuoteContent,
    QuoteAuthor,
} from './QuoteDisplay.styles';
import { Quote, BackgroundQuteImage } from '../../helper/interfaces';

// Import the Spinner component
import { Spinner } from '../index';

const QuoteDisplay: React.FC = () => {
    const quote = useSelector<RootState, Quote | null>((state) => state.quote.quote);
    const error = useSelector((state: RootState) => state.quote.error);
    const dispatch = useDispatch();

    const [backgroundImage, setBackgroundImage] = useState<string>('');

    // Set random background image
    useEffect(() => {
        const imageArray: BackgroundQuteImage[] = imagesData.images;
        const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)].url;
        setBackgroundImage(randomImage);
    }, []);

    // Fetch random quote on component mount
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
                    <QuoteContent>"Believe you can and you're halfway there."</QuoteContent>
                    <QuoteAuthor>Theodore Roosevelt</QuoteAuthor>
                </QuoteText>
            ) : quote ? (
                <QuoteText>
                    <QuoteContent>"{quote.quote}"</QuoteContent>
                    <QuoteAuthor>{quote.author}</QuoteAuthor>
                </QuoteText>
            ) : (
                 <Spinner/>
            )}
        </QuoteDisplayContainer>
    );
};

export default QuoteDisplay;
