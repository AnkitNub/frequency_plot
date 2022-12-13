import React from "react"

const Data = () => {
    const fetchText = async() => {
        try{
            const response = await fetch("https://www.terriblytinytales.com/test.txt")
            const text = await response.text();
            const words = text.split(/[\n]+/);  
            const frequency = new Map();
            for (const word of words){
                if(frequency.has(word)){
                    frequency.set(word, frequency.get(word)+1)
                }else{
                    frequency.set(word,1);
                }
            }

        }catch(e){
          console.error(e);
        }
    }
    return(
        <div> d </div>
    )
}

export default Data;