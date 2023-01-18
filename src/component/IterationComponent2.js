import { useState } from "react";


const IterationComponent2 = () => {
    //1. 반복할 데이터(state로 관리)
    const arr = [
        { id: 1, topic: 'hello' },
        { id: 2, topic: 'bye' },
        { id: 3, topic: 'seeyou' }
    ];
    const [list, setList] = useState(arr);
    
    //2. map함수를 이용해서 li태그로 생성
    //e=>e.target.remove()
    const newArr = list.map(item =>
        <li key={item.id} onDoubleClick={()=>handleRemove(item.id)}>
            {item.topic}
        </li>);

    //3. 인풋데이터 추가하기
    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가

    const handleClick = (e) => {
        let obj = { id: list[list.length - 1].id + 1, topic: data }            //리스트의[마지막 요소]의 id+1 , 인풋데이터
        // list.push(obj);                  // state를 직접변경이라 x
        let newList = list.concat(obj);     //원본리스트 수정 x
        setList(newList);                   //state변경
        setData('');                        //input값 초기화
    }

    //5. 삭제
    //5-1 화살표함수는 익명함수라 호이스팅이 불가능하다.
    const handleRemove = (a) => {
        console.log(a);        //키
        //filter - 콜백의 리턴에 true인 값을 가지고 새로운 배열 생성
        // const ex = [1,2,3,4,5].filter( (item) => item!=3);
        const newList = list.filter( (item) => item.id !== a)
        setList(newList)
    }   
    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data} />
            <button type="button" onClick={handleClick}>추가하기</button>
            <ul>
                {newArr}
            </ul>
        </>
    )
}

export default IterationComponent2;