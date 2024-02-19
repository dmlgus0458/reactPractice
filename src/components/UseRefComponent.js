import React, { useRef, useState } from 'react';

const UseRefComponent = () => {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    // ref값 생성
    // 유일한 값을 만들어 주는 것이라 ref속성뿐만 아니라 key속성으로도 지정 가능하다.

    const idRef = useRef();
    const pwRef = useRef();
    const listRef = useRef(0);

    const fnClick = () => {
        //선택자 없이 ref 값으로 DOM 객체 접근
        if (idRef.current.value === '') {
            alert('Please enter ID');
            return;
        }

        if (pwRef.current.value === '') {
            alert('Please enter password');
            return;
        }

        return (
            <div>
                <label>
                    <input type="text" ref={idRef} />
                </label>
                <label>
                    <input type="password" ref={pwRef} />
                </label>

                <button onClick={fnClick}>click</button>
                <ul>{list && list.map((ele) => <li key={listRef.current++}>{ele}</li>)}</ul>
            </div>
        );
    };
};

export default UseRefComponent;
