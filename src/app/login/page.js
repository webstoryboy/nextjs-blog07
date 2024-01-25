"use client"
import Menu from '@/components/menu/Menu'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function page() {
    return (
        <main id='main'>
            <div className="main__header">
                <h2>#login</h2>
                <Menu />
            </div>
            <div className='main__conts'>
                <h3>로그인</h3>
                <div className="join__inner">
                    <div className="join__form">
                        <form action="/" method="post">
                            <fieldset>
                                <legend className="blind">회원가입 영역</legend>
                                <div>
                                    <label htmlFor="youEmail">이메일</label>
                                    <input type="text" id="youEmail" name="youEmail" placeholder="이메일을 입력해주세요!" />
                                </div>
                                <div>
                                    <label htmlFor="youPass">비밀번호</label>
                                    <input type="text" id="youPass" name="youPass" placeholder="비밀번호를 입력해주세요!" />
                                </div>
                                <div className="join__btn">
                                    <button>로그인</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="join__add">
                        <ul>
                            <li className="google" onClick={() => signIn("google")}><span className='ir'>google</span> </li>
                            <li className="github"><span className='ir'>Github</span></li>
                            <li className="naver"><span className='ir'>naver</span></li>
                            <li className="kakao"><span className='ir'>kakao</span></li>
                            <li className="facebook"><span className='ir'>Facebook</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
