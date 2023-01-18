import { useReducer } from "react";
import { nameReducer } from "./HookReducerComponent";

//reducer
/*
 const nameReducer = (state, action)=>{

    // if(action.name == 'name'){
    //     state = {...state, ["name"]: action.value};
    // }else if( action.name == 'age'){
    //     state = {...state, ["age"]: action.value};
    // }
    state = {...state, [action.name]:action.value };

    console.log(state);


    return state;
} 
*/

const HookReducer2 = () => {
    //[state, 리듀서 제어함수] = useReducer(리듀서명, 초기값);
    const [state, func] = useReducer(nameReducer, {name : '' , age : ''});

    const {name, age} = state ; //스테이트 값 구조분해할당

    
    return (
        <>
            이름 : <input type="text" name="name" onChange={(e)=>func(e.target)}/><br/>
            나이 : <input type="age" name="age" onChange={(e)=>func(e.target)} />
            <br/>
            결과값 name : {name} <br/>
            결과값 age : {age} <br/>
        </>
    )
}


export default HookReducer2;