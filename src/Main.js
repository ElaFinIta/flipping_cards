import React from 'react';
import './App.css';

const Main = () => {
    return (
        <div className="cards">
            <ul className="panels">
                <li>
                    <div className="front">lakka</div>
                    <div className="back" style={{background: "#e4b639"}}>lampone di palude</div>
                </li>
                <li>
                    <div className="front">mansikka</div>
                    <div className="back" style={{background: "#c3333d"}}>fragola</div>
                </li>
                <li>
                    <div className="front">mustikka</div>
                    <div className="back" style={{background: "#9126f4"}}>mirtillo</div>
                </li>
                <li>
                    <div className="front">omena</div>
                    <div className="back" style={{background: "#21bf3b"}}>mela</div>
                </li>



            </ul>
        </div>
    );
};

export default Main;
