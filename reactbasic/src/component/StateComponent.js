import { useState } from "react";


const StateComponent = () => {
    /* 
        state란 컴포넌트에서 변화하는 값으 ㄹ의미합니다.
        state가 변경된면 컴포넌트를 리렌더링 시킵니다.
        
    */

    //함수형컴포넌트에서는 useState()를 사용합니다.
    //1st
    // let data  = useState('초기값');
    // console.log(data)
    // let a  = data[0];
    // let b  = data[1];

    //2nd
    let [data, setData] = useState('초기값');
    // console.log(data)       //state값
    //console.log(setData)    //state setter함수

    let func = () => setData('변경');
    let enter = () => setData('입장');
    let exit = () => setData('퇴장');

    //State는 여러개 일수 있다.
    let [color, setColor] = useState("black");
    // let red = () => setColor('red');
    let green =() => setColor('green');
    let yellow =() => setColor('yellow')
    // console.log(color)

    return (
        <>
            <h3 style={{'color': color}}>state값 : {data}</h3>
            <button onClick={func}>값 변경하기</button>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <hr/>
            <h3 style={{'color' : color}}>colorState값 : {color}</h3>
            <button onClick={()=>setColor('red')}>붉은색</button>
            <button onClick={green}>푸른색</button>
            <button onClick={yellow}>그 사이 3초 그 짧은색</button>
        </>

    )

}
export default StateComponent;