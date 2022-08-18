import pattern from "../assets/images/pattern-divider-desktop.svg";
import icon from "../assets/images/icon-dice.svg";
import { useEffect, useState } from "react";
import axios from "axios";
function Quote() {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => setQuotes(res.data.slip));
    }, []);

    function generateQuote(e) {
        axios
        .get("https://api.adviceslip.com/advice")
        .then((res) => setQuotes(res.data.slip));
    }

  return (
    <div className="card-quote">
      <h3 className="advice">Advice # {quotes.id}</h3>
      <p className="quote">
        <q>{quotes.advice}</q> 
      </p>
      <img className="pattern-icon" src={pattern} alt="" />
      <button className="button" onClick={generateQuote} type="button">
        <img src={icon} alt="icon" />
      </button>
    </div>
  );
}

export default Quote;
