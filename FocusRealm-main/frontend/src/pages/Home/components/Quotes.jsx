import { useState, useEffect } from 'react';
import quotelock from '../assets/quote-lock.png';
import cancelquote from '../assets/quote-close.png';
import nextquote from '../assets/quote-next.png';
import prevquote from '../assets/quote-prev.png';
import quotelogo from '../assets/wiredgradient41quotationmarksecond-1-1@2x.png';
import React from 'react';

const QuoteCarousel = () => {
    const [quotes, setQuotes] = useState([
        [`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`, "-Ralph Waldo Emerson"],
        [`"In three words I can sum up everything I've learned about life: it goes on."`, "-Robert Frost"],
        [`"The only way to do great work is to love what you do."`, "-Steve Jobs"],
    ]);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isLocked && isOpen) {
                setCurrentQuoteIndex(currentQuoteIndex => (currentQuoteIndex + 1) % quotes.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isLocked, isOpen, quotes.length]);

    const changeQuote = (direction) => {
        if (!isLocked) {
            if (direction === 'next') {
                setCurrentQuoteIndex((currentQuoteIndex) => (currentQuoteIndex + 1) % quotes.length);
            } else if (direction === 'prev') {
                setCurrentQuoteIndex((currentQuoteIndex) => (currentQuoteIndex - 1 + quotes.length) % quotes.length);
            }
        }
    };

    const toggleQuotes = () => {
        setIsOpen(prevState => !prevState);
    };

    const lockQuotes = () => {
        setIsLocked(prevLocked => !prevLocked);
    };

    return (
        <div id="quoteParent" className="absolute top-[0px] w-[810px] h-[151.5px]">
            <div className={`w-full h-[100%] flex justify-center items-center ${isOpen ? 'hidden' : ''}`}>
                <div id="quoteImg" className={`absolute top-[calc(50% - 55.75px)] left-[calc(50% - 38px)] w-[75px] h-[75px] ${isOpen ? 'hidden' : ''}`} onClick={toggleQuotes}>
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] [background:linear-gradient(270deg,_rgba(1,_7,_17,_0.5),_rgba(5,_37,_84,_0.5))] box-border border-[1px] border-solid border-dark-stroke"></div>
                    <div className="absolute h-[69.33%] w-[53.33%] top-[16%] right-[22.67%] bottom-[14.67%] left-[24%] opacity-[0]">
                        <img className="absolute top-[0px] left-[0px] w-10 h-10 object-cover" alt="" src="/public/wiredgradient41quotationmarksecond-1@2x.png" />
                    </div>
                    <img
                        className="absolute h-[66.67%] w-[66.67%] top-[17.33%] right-[16.67%] bottom-[16%] left-[16.67%] max-w-full overflow-hidden max-h-full object-cover"
                        alt="" src={quotelogo} />
                </div>
            </div>

            <div>
                <div id="quoteCont" className={`rounded-lg shadow-md p-4 ${isOpen ? '' : 'hidden'}`}>
                    <div id="quoteCarousel" className="rounded-lg shadow-md p-4 flex justify-evenly">
                        <button id="prevButton" className={`bg-transparent text-white text-6xl ${isLocked ? 'hidden' : ''}`} onClick={() => changeQuote('prev')} style={{ cursor: 'pointer' }}>
                            <img src={prevquote} alt="" />
                        </button>
                        <div id="quoteDiv" className=" relative w-[80%] text-base md:h-[50px]">
                            <div id="quoteText" className=' text-center'>{quotes[currentQuoteIndex][0]}</div>
                            <div id="quoteAuthor" className=" absolute right-0 w-fit">{quotes[currentQuoteIndex][1]}</div>
                        </div>
                        <button id="nextButton" className={`bg-transparent text-white text-6xl ${isLocked ? 'hidden' : ''}`} onClick={() => changeQuote('next')} style={{ cursor: 'pointer' }}>
                            <img src={nextquote} alt="" />
                        </button>
                    </div>
                </div>

                <div className={`flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
                    <button id="lockButton" className="relative bg-transparent py-2 px-4 rounded text-white" onClick={lockQuotes} style={{ cursor: 'pointer' }}>
                        <img src={quotelock} alt="Lock" />
                        <p id="lockLabel" className="absolute left-0 right-0 -bottom-5 text-center text-gray-500 text-sm hidden">Lock</p>
                    </button>

                    <button id="cancelButton" className={` relative bg-transparent py-2 px-4 rounded text-white ${isLocked ? 'hidden' : ''}`} onClick={toggleQuotes} style={{ cursor: 'pointer' }}>
                        <img src={cancelquote} alt="Cancel" />
                        <p id="cancelLabel" className="absolute left-0 right-0 -bottom-5 text-center text-gray-500 text-sm hidden">Cancel</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteCarousel;
