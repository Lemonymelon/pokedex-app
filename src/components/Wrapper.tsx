import React from 'react';
import { ParentComponentProps } from '../utils/interfaces/ParentComponent';

const Wrapper: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <div className='Wrapper'>
            <div className='Wrapper__inset'>
                {children}
            </div>
        </div>)
};

export default Wrapper;