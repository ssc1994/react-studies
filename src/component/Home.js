import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>홈화면..</h3>

            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to='/user?id=aa123&age=1'>회원페이지(쿼리파람)</Link></li>

                <li><Link to="/info/1">정보페이지1</Link></li>
                <li><Link to="/info/2">정보페이지2</Link></li>
                <li><Link to="/info/3">정보페이지3</Link></li>

                {/*  중첩라우터 */}
                <li><Link to="/board"> Board페이지</Link></li>

                {/*  Navigate컴포넌트 */}
                <li><Link to="/mypage">MyPage</Link></li>
            </ul>
        </div>
    )
}
export default Home;