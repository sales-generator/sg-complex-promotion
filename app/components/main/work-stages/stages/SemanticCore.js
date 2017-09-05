import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeCode from '../../../../utils/route.path';


class SemanticCore extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={routeCode.HOME} className="stages-links__item"><p>Подготовка сайта к продвижению</p></Link>
                    <Link to={routeCode.OPTIMIZATION} className="stages-links__item"><p>Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={routeCode.SEMANTIC_CORE} className="stages-links__item stages-links__item--active"><p>Составление семантического ядра</p></Link>
                    <Link to={routeCode.EXPERT_CONTENT} className="stages-links__item"><p>Создание экспертного контента</p></Link>
                    <Link to={routeCode.CONVERSION} className="stages-links__item"><p>Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                    <div className="stages__description-wrapper">
                        <ul>
                            <li>Анализ специфики бизнеса на основе брифа</li>
                            <li>Подготовка и согласование базовых запросов</li>
                            <li>Оценка Ваших конкурентов</li>
                            <li>Проверка конкурентности запросов</li>
                            <li>Формирование расширенного списка основных запросов</li>
                            <li>Сортирование запросов по частоте</li>
                            <li>Утверждение групп запросов Вашей целевой аудитории</li>
                            <li>Составление финального семантического ядра</li>
                            <li>Анализ количества переходов и % кликов по ключевой фразе</li>
                            <li>Анализ количества символов в текстах самых заметных конкурентов</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default SemanticCore;