import React, { useEffect, useState } from 'react';

const UseEffectComponent = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        alert(`초기 렌더링`);
        setNum(num + 1);
        console.log(num);
    }, []);

    useEffect(() => {
        console.log(`${num}`);
    }, [num]);

    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={() => setNum(num - 1)}>-</button>
        </div>
    );
};

export default UseEffectComponent;
