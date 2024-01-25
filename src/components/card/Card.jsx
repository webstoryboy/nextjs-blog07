import Link from 'next/link'
import React from 'react'

export default function Card({ item }) {
    return (
        <div className="blog">
            <Link href={`blogDetail/${item.slug}`}>
                <h4 className="title">{item.title}</h4>
                <p className="desc">{item.desc}</p>
                <div className="info">
                    <span className="author"></span>
                    <span className="view">{item.views}</span>
                    <span className="like">2</span>
                </div>
            </Link>
        </div>
    )
}
