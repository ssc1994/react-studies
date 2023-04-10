import { useParams } from "react-router-dom";





const BoardContent = () => {

    let num = useParams();

    return(
        <div>
            <h3>글 상세페이지</h3>
        {num.num} 번글 내용
        </div>
    )
}

export default BoardContent;