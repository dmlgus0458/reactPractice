import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Modal from './components/Modal';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from './components/UseReducerComponent';
import UseCallbackComponent from './components/UseCallbackComponent';
import UseRefComponent from './components/UseRefComponent';
import SassComponent from './components/SassComponent';
import CssModule from './components/CssModule';
import StyledComponent from './components/StyledComponent';
function App() {
    let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [like, likechange] = useState([0, 1, 0]);
    let [input, inputChange] = useState('');
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {글제목.map(function (a, i) {
                return (
                    <div className="list">
                        <h4
                            onClick={() => {
                                setTitle(i);
                                if (modal === false) {
                                    setModal(true);
                                } else {
                                    setModal(false);
                                }
                            }}
                        >
                            {a}
                        </h4>
                        <p>2월 {i + 1}일 발행</p>
                        <span
                            onClick={() => {
                                let copylike = [...like];
                                switch (copylike[i]) {
                                    case 0:
                                        copylike[i] += 1;
                                        break;
                                    case 1:
                                        copylike[i] -= 1;
                                        break;
                                    default:
                                        break;
                                }
                                likechange(copylike);
                            }}
                        >
                            <div>{like[i] == 1 ? <span>❤️{like[i]}</span> : <span>🤍{like[i]}</span>}</div>
                        </span>

                        <br></br>
                        <button
                            onClick={() => {
                                let copy = [...글제목];
                                copy.splice(i, 1);
                                글제목변경(copy);
                            }}
                        >
                            글삭제
                        </button>
                        <Button variant="contained">create</Button>
                    </div>
                );
            })}
            <input
                onInput={(e) => {
                    inputChange(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    글제목변경(글제목.concat(input));
                    inputChange('');
                }}
            >
                글쓰기
            </button>
            {modal == true ? <Modal titleName={글제목} titleNum={title} /> : null}
            <UseEffectComponent />
            <UseReducerComponent />
            <UseCallbackComponent />
            <UseRefComponent />
            <SassComponent />
            <CssModule />
            <StyledComponent />
        </div>
    );
}

export default App;
