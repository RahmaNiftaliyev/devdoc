// @ts-nocheck
import React from 'react'
import styles from './homehelper.module.css'
import img from './assets/Rectangle.png'
const data = [
    {
        id: 1,
        title:'event',
        content:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        img:img
    },
    {
        id: 2,
        title:'news',
        content:'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        img:img
    },
]

const NewsEvent = () => {
    
    const renderedData = data.map((item) => {
        return (
            <div className={styles.NewsEvent__item} key={item.id}>
                <div className={styles.NewsEvent__item__img}>
                    
            </div>
        )
    })

    return (
    <div className={styles.NewsEvent}>
        
    </div>
  )
}

export default NewsEvent