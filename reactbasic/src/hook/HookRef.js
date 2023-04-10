import { useRef, useState } from "react";


const HookRef = () => { 
    const [form, setForm] =  useState({data: '', result: ''});

    const handleChange = (e) => {
        setForm({...form, ["data"]: e.target.value});
    }
    const handleClick = () => {
        setForm({data : '', result : form.data})

        //Ref의 사용
        // console.log(inputTag.current);
        // console.log(inputTag.current.value);
        inputTag.current.focus();
    }


    const inputTag = useRef();
    //특정 태그에 이름달기 useRef()
    //반환된 이름을 사용할 태그에 ref속성에 넣습니다.

    return(
        <>
            내용 : <input type="text" onChange={handleChange} value={form.data} ref={inputTag}/>
            <button onClick={handleClick}> 등록하기</button>
            <br/>
            결과 : {form.result}
        </>

    )
}

export default HookRef;