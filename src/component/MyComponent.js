/* 
    p.87p
    컴포넌트 선언방법은 크게 2가지 (합수형, 클래스)

    모듈 내보내기 export default
    모듈 가져오기 import ~ from 경로

    p.96p
    1. 상위 컴포넌트에서 하위 컴포넌트 로 전달하는 매개변수
    2. 객체형태로 전달되기 때문에 {}로 값을 받습니다.
    3. props는 읽기 전용 입니다.(값은 부모에서 바꿔서 전달함)
*/

import { Fragment } from "react";
import PropTypes from 'prop-types';


const MyComponent = (/* props */ {name, age, email, addr})=>{
    /* const a = props.name;
    const b = props.age;
    const c = props.email; */
    // const{name, age, email} = props;

    return(
        <Fragment>
        <div>나의 첫번째 컴포넌트</div>
        <div>props 값 : {name}</div>
        <div>props 값 : {age}</div>
        <div>props 값 : {email}</div>
        <div>props 값 : {addr}</div>
        </Fragment>
   )
}
/* props의 기본값 설정하기  컴포넌트명.defaultProps={} */
MyComponent.defaultProps ={
    name : "이름없음",
    age : 0,
    email : "지정안됨",
    addr : "서울시" //addr은 전달되지 않지만 기본값
}
/* props의 타입검증 컴포넌트명.propsTypes={} */
MyComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    email : PropTypes.string.isRequired,        //문자열 타입이고 반드시 전달
    addr : PropTypes.string
}




export default MyComponent;