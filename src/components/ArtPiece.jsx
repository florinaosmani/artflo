import classes from '../resources/css/artPiece.module.css';
import { useState, useContext } from 'react';
import { LanguageContext } from '../pages/Root';
import Form from './Form';

function ArtPiece ( {piece} ) {
    const lang = useContext(LanguageContext);

    const [slide, setSlide] = useState(0);

    const handleForwards = () => {
        setSlide(slide === piece.pictures.length ? 0 : slide + 1);
    }

    const handleBackwards = () => {
        setSlide(slide === 0 ? piece.pictures.length : slide - 1)
    }

    const handleIndicator = (event) => {
        const newSlide = Number(event.target.value);
        setSlide(newSlide);
    }

    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    }

    const handleCloseForm = () => {
        setShowForm(false);
    }
    
    if(piece.forSale) {
        return (
            <div className={`${classes.artPiece} ${classes[piece.className]}`}>
                <h2>{lang ? piece.title.en : piece.title.de}</h2>
                <div className={classes.art}>
                    <button
                    className={`${classes.slideBack} ${classes.slideButton}`}
                    onClick={handleBackwards}>
                        <i className="fa-solid fa-caret-left"></i>
                    </button>
                    <button
                    className={`${classes.slideForward} ${classes.slideButton}`}
                    onClick={handleForwards}>
                        <i className="fa-solid fa-caret-right"></i>
                    </button>
                    {piece.pictures.map((picture, index) => {
                        return (
                            <img
                            src={picture[0]} 
                            alt={lang ? picture[1].en : picture[1].de} 
                            key={`button_${index}`}
                            className={slide === index ? classes.picture : `${classes.picture} ${classes.slideHidden}`}/>
                        )
                    })}
                    <div 
                    className={slide === piece.pictures.length ? classes.info : `${classes.info} ${classes.slideHidden}`}>
                        <p className={classes.text}>
                            {lang? piece.text.en : piece.text.de}
                        </p>
                        <div className={classes.data}>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    {lang ? 'Size: ' : 'Grösse: '}
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? piece.details.en.size : piece.details.de.size}
                                </span>
                            </div>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    Medium:
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? piece.details.en.medium : piece.details.de.medium}
                                </span>
                            </div>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    {lang ? 'Price: ' : 'Preis: '}
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? piece.details.en.price : piece.details.de.price}
                                </span>
                            </div>
                        </div>
                        <button
                        className={classes.offer}
                        onClick={handleShowForm}>
                            {lang ? 'Make an Offer' : 'Mach ein Angebot'}
                        </button>
                    </div>
                    <Form 
                    onClose={handleCloseForm}
                    showForm={showForm}/>
                    <div className={slide === piece.pictures.length ? `${classes.indicators} ${classes.indicatorsDark}` : classes.indicators}>
                        {piece.pictures.map((picture, index) => {
                            return (
                                <button
                                className={slide === index ? `${classes.indicatorActive} ${classes.indicator}` : classes.indicator}
                                key={`button_${index}`}
                                value={`${index}`}
                                onClick={handleIndicator}>
                                </button>
                            )
                        })}
                        <button 
                        className={slide === piece.pictures.length ? `${classes.indicatorActive} ${classes.indicator}` : classes.indicator}
                        value={piece.pictures.length}
                        onClick={handleIndicator}>
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${classes.artPiece} ${classes[piece.className]}`}>
                <h2>{lang ? piece.title.en : piece.title.de}</h2>
                <div className={classes.art}>
                    <button
                    className={`${classes.slideBack} ${classes.slideButton}`}
                    onClick={handleBackwards}>
                        <i className="fa-solid fa-caret-left"></i>
                    </button>
                    <button
                    className={`${classes.slideForward} ${classes.slideButton}`}
                    onClick={handleForwards}>
                        <i className="fa-solid fa-caret-right"></i>
                    </button>
                    {piece.pictures.map((picture, index) => {
                        return (
                            <img
                            src={picture[0]} 
                            alt={lang ? picture[1].en : picture[1].de} 
                            key={`button_${index}`}
                            className={slide === index ? classes.picture : `${classes.picture} ${classes.slideHidden}`}/>
                        )
                    })}
                    <div 
                    className={slide === piece.pictures.length ? `${classes.info} ${classes.notForSale}` : `${classes.info} ${classes.slideHidden}`}>
                        <p className={classes.text}>
                            {lang? piece.text.en : piece.text.de}
                        </p>
                        <div className={classes.data}>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    {lang ? 'Size: ' : 'Grösse: '}
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? piece.details.en.size : piece.details.de.size}
                                </span>
                            </div>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    Medium:
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? piece.details.en.medium : piece.details.de.medium}
                                </span>
                            </div>
                            <div className={classes.dataBit}>
                                <span className={classes.dataBitTitle}>
                                    {lang ? 'Price: ' : 'Preis: '}
                                    <br/>
                                </span>
                                <span className={classes.dataBitData}>
                                    {lang ? 'Not for sale' : 'Nicht zum Verkauf'}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={slide === piece.pictures.length ? `${classes.indicators} ${classes.indicatorsDark}` : classes.indicators}>
                        {piece.pictures.map((picture, index) => {
                            return (
                                <button
                                className={slide === index ? `${classes.indicatorActive} ${classes.indicator}` : classes.indicator}
                                key={`button_${index}`}
                                value={`${index}`}
                                onClick={handleIndicator}>
                                </button>
                            )
                        })}
                        <button 
                        className={slide === piece.pictures.length ? `${classes.indicatorActive} ${classes.indicator}` : classes.indicator}
                        value={piece.pictures.length}
                        onClick={handleIndicator}>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtPiece;