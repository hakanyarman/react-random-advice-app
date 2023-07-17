import React from 'react'

function Message(props) {
    return (
        <div className='bg-warning'>
            <h4>You have read <strong>{props.count}</strong> pieces of advice.</h4>
        </div>
    )
}

export default Message