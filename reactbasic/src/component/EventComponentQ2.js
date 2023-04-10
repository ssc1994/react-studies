import { useState } from "react"


const EventComponentQ2 = () => {

    const [data, setData] = useState({ write: '', result: '' });

    const handleData = (e) => {
        let copy;
        if (e.target.name === "write") {
            copy = { ...data, [e.target.name]: e.target.value };
            setData(copy);
        }else{
            setData({write:'', [e.target.name] : data.write});
            // copy={...data,[e.target.name] : data.write, write : ''}; 
        }
    }
    return (
        <>
            <hr />
            <h3>인풋데이터 핸들링 ( 실습 )</h3>
            <p>클릭시 데이터는 공백으로 결과는 입풋이 입력한 값으로 처리</p>
            <p>힌트 ? 아마도 state는 두개가 필요할듯</p>
            <input type="text" name="write" onChange={handleData} value={data.write}/> 
            <button onClick={handleData} name ="result">추가하기</button>

            <h3>결과 : </h3>
            <p>{data.result}</p>
        </>

    )

}

export default EventComponentQ2