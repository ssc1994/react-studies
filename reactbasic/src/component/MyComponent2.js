import { Fragment } from "react";


const MyComponent2 = ({ name }) => {
    return (
        <Fragment>
            <div>헬로우hello</div>
            props값 : {name}
            <hr/>
        </Fragment>
    )
}

export default MyComponent2;