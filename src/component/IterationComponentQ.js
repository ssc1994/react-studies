
/* 
이미지를 가져오는 방법
1. 외부서버에서 경로를 참조받는 방법 (가장 일반적인 방법)

2. 간단한 이미지라면 src폭더 밑에 img파일 (선호되지는 않음)
//import img1 from '../img/img1.png'; 

3. public폴더 밑에 넣는경우 이미지를 바로 참조가능
//public폴더에 폴더가 들어가면 경로는 절대경로로 localhostL:3000 뒤에 붙는다.
//<img src="/img/img1.png" />

*/

import { useState } from "react";


const IterationComponentQ = () => {

    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 }
    ];

    //1. state로 arr를 관리
    const [list, setList] = useState(arr);
    setList(arr);
    //2. 반복처리
    const newArr = list.map(item =>
        <div /* onClick={() => popImg(item.src)} */ key={item.src}>
            <img src={item.src} alt={item.title} width="100" onClick={() => handleContent(item.src)}/>
            <p>상품 : {item.title}</p>
            <p>가격 : {item.price}원</p>
        </div>
    );

    //3. 클릭시 화면에 그려질 내용을 state로 관리
    const [content, setContent] = useState({src:'/img/img1.png'});
    const handleContent = (i)=> {
        setContent({src : i});
    }

    // const [newImg, setNewImg] = useState('');
    // //사진 추가
    // const popImg = (i) => {
    //     setNewImg(<img src={i} alt="제목" />);
    // }

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/* 
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100" />
            <img src={img1} alt="제목" width="100" />
            <img src="/img/img1.png" />
            */}
            <div>
                <img src={content.src} width="200" />
                {/* {newImg} */}
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                {newArr}
            </div>
        </>
    )
}

export default IterationComponentQ;