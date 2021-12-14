import React, { useState, useEffect } from "react";

const useCounter = (forwards = true) => {  //CCC1: custom hooks are basically like normal functions used to prevent repetition/duplication of code instead the duplicated code is put in them and the hooks are called wherever needed. Unlike normal functions, built-in react hooks like useState, useEffect etc can be used in custom hooks. Custom hooks must have the prefix "use" and are mostly used to outsource a logic common to different components. At the end of the custom hook function, data is returned to the components where the custom hook is to be used(mostly states data) so when the custom hook is called, the data is evoked
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter(latestCounter => latestCounter + 1);
            } else {
                setCounter(latestCounter => latestCounter - 1);
            }
        }, 1000);
        
        return () => clearInterval(interval);
    }, [forwards]);
    
    return counter;
};

export default useCounter;