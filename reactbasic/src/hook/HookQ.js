import { useEffect, useRef, useState } from "react";




const HookQ = () => {
    /* 
    1. 컴포넌트가 마운트된 이후 한번만 id에 포커스를 줍니다.
    
    2. id, pw는 state로 관리합니다.
    로그인 버튼 클릭시 공백이라면 공백인 태그에 포커스를 주세요.
        로그인 버튼 클릭시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요
        
        */
       const [data, setData] = useState({id:'', pw:''});
       const idTag = useRef(null); 
       const pwTag = useRef(null); 
       
       useEffect(()=>{
           //id에 포커스
           idTag.current.focus();
        },[]);
        
        
        const handleData = e => {
            setData({...data, [e.target.name] : e.target.value})
        }
        
        const loginBtn = () => {
            console.log(idTag);
            console.log(data)
            
            if(idTag.current.value===''){
                idTag.current.focus();
                
            }else if(pwTag.current.value===''){
                pwTag.current.focus();
                
            }else{
                alert(`id : ${data.id} \npw : ${data.pw}`)
            }
        }

        return (
            <>
            <div>
                <h3>Hook 실습</h3>
                <input type="text" name="id" placeholder="아이디" onChange={handleData} ref={idTag}/>
                <input type="password" name="pw" placeholder="비밀번호" onChange={handleData} ref={pwTag}/>
                <button onClick={loginBtn}>로그인</button>


            </div>


        </>
    )
}

export default HookQ;