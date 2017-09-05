import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeCode from '../../../../utils/route.path';

class PreparePromotion extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={routeCode.HOME} className="stages-links__item stages-links__item--active"><p>Подготовка сайта к продвижению</p></Link>
                    <Link to={routeCode.OPTIMIZATION} className="stages-links__item"><p>Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={routeCode.SEMANTIC_CORE} className="stages-links__item"><p>Составление семантического ядра</p></Link>
                    <Link to={routeCode.EXPERT_CONTENT} className="stages-links__item"><p>Создание экспертного контента</p></Link>
                    <Link to={routeCode.CONVERSION} className="stages-links__item"><p>Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                   <div className="stages__description-wrapper">
                    <ul>
                        <li>Установка и настройка панели вебмастера Яндекс и Google</li>
                        <li>Установка счетчиков (Яндекс. Метрики и Google аналитики)</li>
                        <li>Настройка целей в веб-аналитике</li>
                        <li>Создание и/или настройка файла sitemap.xml</li>
                        <li>Создание и/или настройка файла robots.txt</li>
                        <li>Составление карты метатегов (title, h1, description, h2-h6, keywords, alt)</li>
                        <li>Настройка ЧПУ ссылок (url)</li>
                        <li>Реализация на сайте микроразметки schema.org</li>
                        <li>Создание и/или настройка файла .htaccess</li>
                        <li>Устранение ошибок вебмастера</li>
                    </ul>
                   </div>
                </div>
            </section>
        )
    }
}

export default PreparePromotion;