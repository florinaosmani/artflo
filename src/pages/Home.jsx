import ArtPiece from "../components/ArtPiece";
import classes from '../resources/css/home.module.css';
import { artData } from "../resources/artData";
import { useContext } from "react";
import { LanguageContext } from "../pages/Root";

function Home () {
    const lang = useContext(LanguageContext);

    return (
        <>
            <div className={classes.artContainer}>
            {artData.map((piece, index) => {
                return (
                    <ArtPiece 
                    piece={piece}
                    key={`artpiece_${index}`}
                    index={index}/>
                )
            })}
            </div>
        </>
    )
}

export default Home;