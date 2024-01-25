import React from 'react'
import Card from '../card/Card'

// 블로그 글 데이터 불러오기
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blogPost", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json()
}

export default async function CardList() {
    const data = await getData();
    // console.log(data)

    return (
        <section className='blog__list container'>
            {data.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </section>
    )
}
