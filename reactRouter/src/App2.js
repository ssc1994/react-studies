import { Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Home from "./component/Home";
import Info from "./component/Info";
import MyPage from "./component/MyPage";
import User from "./component/User";
import Header from "./layout/Header";


function App() {

  /* 
  p.403
  
  라우터 적용방법
  1.  index.js 에서 브라우저 라우터로 app을 감싸쭌다
  2. 각각의 컴포넌트를 만든다
  3. route를 이용해서 주소별로 컴포넌트 연결한다.

  link 컴포넌트
  a태그를 대체합니다.
  to속성에 '라우터 주소' 적어서 이동하면 된다.

  쿼리스트링 ?키=값
  -useLocation()
  - useSearchParams()

  URL파라미터
   - 라우터를 설정 /경로:값
   - useParams() 값을 받는다.
  
  */

  return (

    /* 중첩라우터 - 헤더부분처리 (Header파일의 Section에서 outlet컴포넌트 표기하기) */
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/info/:num" element={<Info />} />
      </Route>
      {/* board/뒤에 숫자가 있을때와 없을 때 
            각각 다른 화면이 보인다 */}
      {/* <Route path="/board" element={<Board/>}/>
        <Route path="/board/:num" element={<BoardContent/>} /> */}

      {/* 중첩라우터 - 공통 부분 처리 (Board에 가서 Outlet컴포넌트 표기) */}
      <Route path="/board" element={<Board />}>
        <Route path=":num" element={<BoardContent />} />
      </Route>

        {/* navigate컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>}/>

    </Routes>
  )
}

export default App;
