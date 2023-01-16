

const IterationComponent = () => {

    /* 
        p.180 컴포넌트 반복하기
        map ( 콜백 ( item, index, arr ) )
    */

    const arr = [1, 2, 3, 4, 5];
   /*  const newArr = arr.map(function(item,index,arr) { 
        return item*10;
    }) 
    */
    const newArr = arr.map((item, index, arr) => item * 10);
    console.log(newArr);

    //2. 


    return (
        <>
            ...
        </>
    )
}

export default IterationComponent;