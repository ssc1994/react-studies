import { useState } from "react";


const StateComponentQ = () => {

    const [num, setNum] = useState(0);

    let incNum = () => setNum(num+1);
    let decNum = () => setNum(num-1);
    let reset = () => setNum(0);
    return (
        <>
            <hr />
            <h3>실습</h3>
            <h3>카운트 : {num}</h3>
            <button onClick={incNum}>증가</button>
            <button onClick={decNum}>감소</button>
            <button onClick={reset}>초기화</button>
        </>
    )
}

export default StateComponentQ;