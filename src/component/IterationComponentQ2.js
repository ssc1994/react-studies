import { useState } from "react";





const IterationComponentQ2 = () => {
    //1. select태그는 컴포넌트 반복으로 option태그를 생성
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

    const arr = select.map((item,index) => <option key={index}>{item}</option>);

    //2. data는 state로 관리하고 화면에 li태그로 반복을 한다.
    const data = [
        { id: 1, type: 'Java', teacher: '이순신' },
        { id: 2, type: 'Java', teacher: '홍길자' },
        { id: 3, type: 'Javascript', teacher: '홍길동' },
        { id: 4, type: 'Oracle', teacher: '이순신' },
        { id: 5, type: 'Mysql', teacher: '이순신' },
        { id: 6, type: 'CSS', teacher: '박찬호' },
        { id: 7, type: 'HTML', teacher: 'coding404' },
    ];

    const [list, setList] = useState(data);
    const newList = list.map(item=> <li key={item.id} >{item.type}-{item.teacher}</li>  );
    
    //3. selectbox가 change가 되면 , 이벤트 객체를 활용해서 선택된 값만 필터링 해서 보여준다.
    // const [filList, setFilList] = useState(list);
    const filterList = (e) => {
        //원본데이터에서 filter를 수행(data)
        let filtList = data.filter( item => item.type === e.target.value )
        setList(filtList);
    }

    //4. 검색 기능 만들기

    const [search,setSearch] = useState('');

    const searchInput = e =>{
        setSearch(e.target.value.toLowerCase());
     
    }

    const searchBtn = (e) =>{
        let filtList = data.filter( item => item.type.toLowerCase() === search || item.teacher.toLowerCase() === search )
        setList(filtList);
    }
    
    return (
        <>
            <h3>컴포넌트 반복 실습</h3>
            Search : <input type="text" onChange={searchInput} value={search}/> <button onClick={searchBtn}>검색</button>
            <br/>
            <select onChange={filterList}>
                {arr}
            </select>
            <ul>
                {newList}
            </ul>

        </>
    )
}

export default IterationComponentQ2;