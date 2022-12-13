import React, {useState} from "react"

const Data = () => {
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
                    },
                ],
            }
            console.log(f20_words)
            console.log(sortedWords)
        }catch(e){
          console.error(e);
        }
    }
    return(
        <div>
            <button onClick={fetchText}>Submit</button>
        </div>
    )
}

export default Data;