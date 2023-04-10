import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import styled from './NewsList.module.css';



const NewsList = () => {

    //1. API가져오기
    //2631922e39d542f3bf47e0ffcf519ede
    
    
    //5. 라우터로 들어오는값처리
    const {category} = useParams();
    
    //category가 없거나 undefineded면 all로 할당 
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;
    console.log(query);

    //2. useEffect에서 화면 로딩시 데이터 처리
    const [data, setData] = useState();
    
    useEffect(() => {
        // useeffect는 내장함수라 async를 걸지 못함
        // await을 사용하려면 즉시실행 함수에 async를 걸어준다
        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2631922e39d542f3bf47e0ffcf519ede`;
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true);       //로딩완료
        })();

    }, [category])

    console.log(data);

    //3. 데이터 로딩처리    (데이터가 오기전에  state는 undefined)
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩중</div>
    }

    //4. Li태그를 컴포넌트로 변경

    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1. url, urlToImage, title, authork, description, publishedAt */
                    data.map((item, index) => <NewsArticle key={index + 1} item={item} />)
                }
            </ul>
            내용....
        </div>

    )
}

export default NewsList;