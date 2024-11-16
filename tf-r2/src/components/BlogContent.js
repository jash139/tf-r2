import React, { useState } from 'react'

import styles from "./blogContent.module.css";
import ImageBlock from './ImageBlock';

const contentType = {
    text: "text",
    image: "image"
}

const BlogContent = () => {
    const [blocks, setBlocks] = useState([
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            contentType: contentType.text
        },
        {
            content: "fs Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            contentType: contentType.text
        },
        {
            content: "dsf Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            contentType: contentType.text
        },
        {
            content: "/favicon.ico",
            contentType: contentType.image
        }
    ]);
    const [activeBlockIdx, setActiveBlockIdx] = useState(blocks.length - 1);

    const updateBlockContent = (e, idx) => {
        const updatedContent = [...blocks];
        updatedContent[idx].content = e.target.value;
        setBlocks(updatedContent);
    }

    const addBlock = (contentType) => {
        let updatedContent = [...blocks];
        updatedContent.push({
            content: "",
            contentType
        })
        setBlocks(updatedContent)
        setActiveBlockIdx(blocks.length);
    }

    return (
        <>
            <div className={styles.blogContent}>
                <div className={styles.actionBtns}>
                    <button onClick={() => addBlock(contentType.text)}>Add text</button>
                    <button onClick={() => addBlock(contentType.image)}>Add image</button>
                </div>
                {
                    blocks.map((block, idx) => {
                        if (block.contentType === contentType.image) {
                            if (activeBlockIdx === idx) {
                                return <input value={block.content} onChange={(e) => updateBlockContent(e, idx)} />
                            } else {
                                return <div onClick={() => setActiveBlockIdx(idx)}>
                                    <ImageBlock src={block.content} />
                                </div>

                            }
                        } else if (block.contentType === contentType.text) {
                            if (activeBlockIdx === idx)
                                return <textarea value={block.content} onChange={(e) => updateBlockContent(e, idx)} />
                            else
                                return <p onClick={() => setActiveBlockIdx(idx)}>{block.content}</p>
                        }
                    })
                }
            </div>
        </>
    )
}

export default BlogContent
