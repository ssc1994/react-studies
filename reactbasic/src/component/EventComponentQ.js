import { useState } from "react";


const EventComponentQ = () => {

    const [choice, setChoice] = useState('메뉴를 선택하세요');

    //셀렉트 태그에서는 option태그가 기본 value가 됩니다.
    const handleChoice = (e) => {
        setChoice(e.target.value);
        e.target.firstElementChild.disabled=true

    }

    return (
        <>
            <hr/>
            <h3>셀렉트 태그 핸들링( 실습 )</h3>
            <p>셀렉트 태그가 체인지 될때 선택한 결과를 아래에 출력</p>
            <select onChange={handleChoice}>
                <option>선택</option>
                <option>피자</option>
                <option>치킨</option>
                <option>햄버거</option>
            </select>
            <h3>선택한 결과</h3>
            <div value ={choice}>{choice}</div>

        </>
    )
}

export default EventComponentQ;