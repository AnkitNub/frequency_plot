import React, {useState} from "react"
import Histogram from "./Histogram";
import './Data.css'

const Data = () => {
const [wordData, setWordData] = useState({});
const [getData, setGetData] = useState(false);

    const fetchText = async() => {
        try{
            const response = await fetch("https://www.terriblytinytales.com/test.txt")
            const text = await response.text();
            const words = text.split(/[ \n]+/);  
            const frequency = new Map();
            for (const word of words){
                if(frequency.has(word)){
                    frequency.set(word, frequency.get(word)+1)
                }else{
                    frequency.set(word,1);
                }
            }
            const sortedWords = [...frequency].sort((a,b)=> b[1] - a[1]);
            const f20_words = sortedWords.splice(0,20);
            const obj = {
                labels: f20_words.map((data)=>data[0]),
                datasets: [
                    {
                        label: "Frequency",
                        data: f20_words.map((data)=> data[1]),
                        borderWidth: 1,
                        barPercentage: 1,
                        categoryPercentage:1,
                        backgroundColor:  '#9C78B7',
                    },
                ],
            }
             console.log(f20_words)
            // console.log(sortedWords)
            setWordData(obj);
            setGetData(true);
        }catch(e){
            setGetData(false);
          console.error(e);
        }
    }
    return<>
        {!getData && (
        <div className="center">
            <button className="btn1" onClick={fetchText}>Submit</button>
        </div>
        )}
        {getData && (
            <div className='small'>
            <Histogram data={wordData}/>
            </div> )}
            </>
}

export default Data;