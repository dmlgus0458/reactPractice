import React from 'react';
import styled from 'styled-components';

// styled-components 생성
// 스타일이 적용된 하나의 컴포넌트를 변수로 생성한다.
// 사용은 컴포넌트처럼 사용한다.
const Box1 = styled.div`
    width: 32px;
    height: 32px;
    background: red;
`;
const Box2 = styled.div`
    width: 64px;
    height: 64px;
    background: blue;
`;
const Wrapper = styled.div`
    display: flex;
`;

const StyledComponent = () => {
    return (
        <div>
            <Wrapper>
                <Box1></Box1>
                <Box2></Box2>
            </Wrapper>
        </div>
    );
};

export default StyledComponent;
