import { Fragment } from "react";

//css파일 경로 링크
import './css/App.css';     
import styled from './css/App.module.css';

const App = () => {
    //p.261 -Css스타일링

    //css문법중 -는 카멜표기법으로 변한다.
    const myStyle = {
        color : "red",
        textAlign : "center",
    }

    return (

        <Fragment>
            <header style={{backgroundColor : "black"}} className="app_header">
                <p style={myStyle}>헤더입니다(직접스타일링)</p>
            </header>
            <article className="app_article">
                CSS파일로 디자인하기
            </article>
            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>Css디자인</p>
                    <input type="text" className="input_control" />
                    <input type="password" className="input_control" />
                </div>
            </section>

        </Fragment>
    )
}
export default App;