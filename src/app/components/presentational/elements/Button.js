import React from 'react'

const Button = (props) => {
    return (
        <div className={'btn' + (props.block == 'block'? ' block' : ' right')}>
            <button
                className={(props.color ? props.color : '')
                    + (props.hide ? ' hide' : '')}
                disabled={props.disabled}
                onClick={props.handleClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button