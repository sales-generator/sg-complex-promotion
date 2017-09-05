import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Facts = () => {
        return(
            <ScrollableAnchor id={'facts'}>
                <section className="facts">
                    <div className="container">
                        <h2 className="facts__title">МЫ ИСПОЛЬЗУЕМ ТОЛЬКО ЛУЧШИЕ <br/> ОТРАСЛЕВЫЕ SEO-ИНСТРУМЕНТЫ</h2>
                        <div className="facts-info">
                            <div className="facts-info__item">
                                <img src="images/similar-web.jpg" alt="SimilarWeb" title="SimilarWeb"/>
                                <p>Сервис для анализа интернет трафика в разрезе регионов и тематик</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/spy-work.jpg" alt="Spy Words" title="Spy Words"/>
                                <p>Уникальный сервис для анализа поисковых запросов сайтов конкурентов</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/keys.jpg" alt="Keys.co.ru" title="Keys.co.ru" />
                                <p>Сервис для создания семантического ядра путем анализа сайтов прямых конкурентов</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/serpstat.jpg" alt="SERPSTAT" title="SERPSTAT"  />
                                <p>Онлайн сервис для подробного анализа конкурентов, поиска и экспорта ключевых слов</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/key-collector.jpg" alt="KEY Collector" title="KEY Collector"  />
                                <p>Программный комплекс для оказания помощи в создании семантического ядра сайта</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
};



export default Facts;