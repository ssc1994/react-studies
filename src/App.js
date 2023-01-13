import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";


const App = () => {

    return (
        <Fragment>
            <h3> App.JS</h3>
           <MyComponent name={"홍길동"} age={20} email={"aa@naver.com"}/>
           <MyComponent2/>
           <MyComponent3/>
        </Fragment>

    )
}

export default App;