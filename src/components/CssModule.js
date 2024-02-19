import React from 'react';
// module.css import
import styles from '../cssmodule/CssModule.module.css';

const CssModule = () => {
    return (
        <div>
            <div className={`${styles.wrapper} ${styles.inverted}`}>
                CssModule
                {/**전역 스타일(:global) 적용 */}
                <span className="text">SASS</span>
            </div>
        </div>
    );
};

export default CssModule;
