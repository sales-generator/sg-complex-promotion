import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeCode from '../../../../utils/route.path';


class Conversion extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={routeCode.HOME} className="stages-links__item"><p>Подготовка сайта к продвижению</p></Link>
                    <Link to={routeCode.OPTIMIZATION} className="stages-links__item"><p>Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={routeCode.SEMANTIC_CORE} className="stages-links__item"><p>Составление семантического ядра</p></Link>
                    <Link to={routeCode.EXPERT_CONTENT} className="stages-links__item"><p>Создание экспертного контента</p></Link>
                    <Link to={routeCode.CONVERSION} className="stages-links__item stages-links__item--active"><p>Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                    <div className="stages__description-wrapper">
                        <ul>
                            <li>Увеличение количества обращений в Вашу компанию за счет различных элементов</li>
                            <li>Аналитика поведения посетителей сайта</li>
                            <li>Проработка структуры сайта</li>
                            <li>Исправление заголовков и текстов на страницах</li>
                            <li>Создание и оптимизация продающих триггеров (отзывы, гарантии, рекламные акции)</li>
                            <li>Улучшение юзабилити сайта</li>
                            <li>Проверка корректности отображения сайта в разных браузерах</li>
                            <li>Оптимизация шапки сайта (расположение логотипа, телефона, оффера)</li>
                            <li>Оптимизация формы заявки с сайта</li>
                            <li>Оптимизация страницы «Контакты»</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Conversion;