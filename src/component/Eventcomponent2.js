import { useState } from "react";


const EventComponent2 = () => {

    //state를 객체로 관리
    const [data, setData] = useState({name : '', topic : ''});

    const handleChange = (e) => {
        const copy = {...data, [e.target.name] : e.target.value};       //데이터 복사
        setData(copy);      //state변경
    }

    const handleClick = (e) => {
        alert(`${data.name}님의 할일은${data.topic} 입니다.`)
        setData({name:'', topic:''});
    }

    return (
        <>
        <hr/>
            <h3>리액트 이벤트 핸들링 ( 객체 )</h3>
            
            <input type="text" name ="name" onChange={handleChange} value = {data.name} />
            <h3>결과 : {data.name}</h3>
            <input type="text" name ="topic" onChange={handleChange} value = {data.topic} />
            <h3>결과 : {data.topic}</h3>
            <button type="button" onClick={handleClick}>클릭미</button>


        </>
    )
}

export default EventComponent2;