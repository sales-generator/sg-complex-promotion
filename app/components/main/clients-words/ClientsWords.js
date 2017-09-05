import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ClientsWords = () =>{
        return(
            <ScrollableAnchor id={'clients-words'}>
                <section className="cl-words">
                    <div className="container">
                        <h2 className="cl-words__title">ЧТО О НАС ГОВОРЯТ</h2>
                        <div className="cl-words-info">
                            <figure className="cl-words-info__director">
                                <img src="images/ab.png" alt="Алексей бояркин" title="Алексей бояркин"/>
                            </figure>
                            <div className="cl-words-info__desc">
                                <p>У меня было понимание, куда нужно идти и что делать, но в компании не хватало компетенций, чтобы понять, как это делать.</p>
                                <p>Больше всего в контент-маркетинге пугает, что ощутимые результаты можно увидеть через 6-9 месяцев. И конечно возникает вопрос – «А вдруг они не смогут?».</p>
                                <p>Вдобавок на рынке хватает недобросовестных игроков, которые вначале обещают манну небесную, а потом кроме красивых отчетов ничего не получаешь.</p>
                                <p>Обещанные через 9 месяцев результаты мы получили уже на 6-й месяц. А сейчас, спустя год, могу открыть маленькую тайну: мы выросли в ежемесячных продажах с сайта со 100 000 рублей до нескольких миллионов и продолжаем расти.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
};


export default ClientsWords;