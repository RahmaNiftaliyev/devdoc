// @ts-nocheck
import React from 'react'
import styles from './homehelper.module.css'

const data = [
    {
        id: 1,
        title:'event',
        content:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        
    },
    {
        id: 2,
        title:'news',
        content:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
    },
]

const NewsEvent = () => {
    
    const renderedData = data.map((item) => {
    })

    return (
    <div className={styles.NewsEvent}>
        
    </div>
  )
}

export default NewsEvent