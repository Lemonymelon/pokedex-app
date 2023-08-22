import React from 'react';

import caretUp from '../assets/caret-up-solid.svg';

import { ParentComponentProps } from '../utils/interfaces/ParentComponent';

const PokemonDisplayNavBorder: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <div className='PokemonDisplayNavBorder'>
            <div className='nav-button nav-button-predecessor'>
                <div className='inner'>
                    <div className="arrow arrow-up">
                    </div>
                </div>
            </div>
            <div className='nav-button nav-button-sibling-left'>
                <div className='inner'>
                    <div className="arrow arrow-left">
                    </div>
                </div>
            </div>
            <div className='nav-button nav-button-sibling-right'>
                <div className='inner'>
                    <div className="arrow arrow-right">
                    </div>
                </div>
            </div>
            <div className='nav-button nav-button-descendant'>
                <div className='inner'>
                    <div className="arrow arrow-down">
                    </div>
                </div>
            </div>
            <div className='nav-contents'>
                {children}
            </div>
        </div>)
};

export default PokemonDisplayNavBorder;