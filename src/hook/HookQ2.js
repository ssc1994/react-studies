import { useRef, useState } from "react";



const HookQ2 = () => {

    /* 
    실습 ( 할일목록 만들기 )
    1. state는 {todo:'', list:[] } 로 관리한다.
    2. 할일목록을 작성하고 클릭시, list에 인풋에 입력값을 추가하고 map을 통해서 화면을 그린다.
    3. 등록된 이후에는 ref를 활용해서 input태그에 focus를 준다.
    
    */
    const [todoList, setTodoList] = useState({ todo: '', list: [] });
    // const showList = todoList.map((item)=><li>{item.list}</li>)
    const inputTag = useRef(null);

    const handleTodo = (e) => {
        setTodoList({ ...todoList, todo: e.target.value })
    }
    const enterClick = (e) =>{
        if(e.keyCode ==13&&e.target.value!==''){
            addList();
        }
    }
    const addList = () => {
        setTodoList({ todo:'', ["list"]: todoList.list.concat(todoList.todo) })
        inputTag.current.focus();
    }
    const delList = (e) => {
        e.target.parentElement.remove();
    }
    const showList = todoList.list.map((item,index) =>
        <li key={index}>{item} <button onClick={delList}>x</button></li>
    );
    return (

        <>
            <h3>useRef()로 할일목록 만들기</h3>
            <input type="text" name="todo" placeholder="할일목록" ref={inputTag} onChange={handleTodo} onKeyDown={enterClick} value={todoList.todo} />
            <button onClick={addList}>등록하기</button>
            <ul>
                {showList}
            </ul>
        </>
    )
}

export default HookQ2;