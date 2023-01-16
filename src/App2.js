import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";


const App = () => {

    return (
        <Fragment>
            {/* props = 객체 */}
            <h3> App.JS</h3>
            <MyComponent name={"홍길동"} age={20} email={"aa@naver.com"} />

            <MyComponent2 name={"이순신"} />
            <MyComponent2 name={"홍길자"} />

            <MyComponent3 name={"강감찬"} />
        </Fragment>

    )
}

export default App;