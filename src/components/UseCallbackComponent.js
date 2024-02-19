import React, { useCallback, useEffect, useState, useMemo } from 'react';

const getAvg = (numList) => {
    if (numList.length === 0) return 0;

    let sum = 0;
    numList.forEach((num) => (sum += num));

    return sum / numList.length;
};

const UseCallbackComponent = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);
    // const [avg, setAvg] = useState(0);

    //렌더링 될 때마다 메소드가 생성
    // const addList = () => {

    // }

    //초기 렌더링 시에만 메소드 생성
    // useCallback은 불필요한 메소드의 생성을 방지하고 메모리 낭비를 최소화
    const changeNum = useCallback((e) => {
        setNum(e.target.value);
    }, []);

    // num, list 값이 모두 변경됐을 때 메소드 생성
    // state를 생성할 때도 값을 변경하기 때문에 초기렌더링시에도 메소드가 한 번 생성된다.
    const addListCallback = useCallback(() => {
        // 불변성
        // 불변성은 원본 데이터를 훼손하지 않는 것

        let newList = [...list];
        newList = newList.concat(parseInt(num));

        setList(newList);
        setNum(0);
    }, [num, list]);

    // useEffect(() => {
    //     setAvg(() => getAvg(list));
    // }, [list]);

    // useMemo를 통한 연산최적화
    const avg = useMemo(() => getAvg(list), [list]);

    return (
        <div>
            <input type="text" value={num} onChange={changeNum} />
            <button onClick={addListCallback}>add</button>
            {/** list에 있는 데이터를 표출할 때는 map 메소드를 주로 이용한다. */}
            {/** list가 비어있을 때를 방지하기 위해서 단축형가를 사용한다. */}
            <ul>{list && list.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
            <div>평균: {avg}</div>
        </div>
    );
};

export default UseCallbackComponent;
