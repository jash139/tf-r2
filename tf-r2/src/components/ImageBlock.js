import React from 'react'

const ImageBlock = ({ src }) => {
    return (
        <div>
            <img src={src ?? "/favicon.ico"} />
        </div>
    )
}

export default ImageBlock
