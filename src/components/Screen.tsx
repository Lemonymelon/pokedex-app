import React from 'react';

import { ParentComponentProps } from '../utils/interfaces/ParentComponent';

const Screen: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <div className='Screen'>
            {children}
        </div>)
};

export default Screen;