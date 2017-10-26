import React, { Component } from 'react';
import {openCase, showConsultationExpertsForm, showModal} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import MaskedInput from 'react-maskedinput';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor';

class Staff extends Component{

    constructor(props) {
        super(props);
        /*this.openKnowFormHandler = this.openKnowFormHandler.bind(this);*/
    }

    /*openKnowFormHandler() {
        this.props.showConsultationExpertsForm(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('CONSULTATION_EXPERTS');
    }*/

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed: 5000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }]
        };
        return(

            <section className="staff">
                <div className="container">
                    <h2 className="staff__title">КТО БУДЕТ РАБОТАТЬ НАД ВАШИМ ПРОЕКТОМ</h2>
                    <ScrollableAnchor id={'our-staff'}>
                        <Slider {...settings}>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image1" src="images/MP2-min.jpg" alt="Павел Манзадей" title="Павел Манзадей"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Павел Манзадей</h2>
                                                <p>Руководитель отдела</p>
                                                <ul>
                                                    <li>
                                                        координирует работу отдела
                                                    </li>
                                                    <li>
                                                        определяет и согласовывает маркетинговую стратегию
                                                    </li>
                                                    <li>
                                                        контролирует движение целей по продвижению сайта
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image2" src="images/CHA2-min.jpg" alt="Чуфистов Андрей" title="Чуфистов Андрей"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Андрей Чуфистов</h2>
                                                <p>Интернет-маркетолог</p>
                                                <ul>
                                                    <li>
                                                        разрабатывает план развития ресурса
                                                    </li>
                                                    <li>
                                                        разрабатывает цели и фиксирует этапы достижения
                                                    </li>
                                                    <li>
                                                        анализирует конкурентов и внедряет идеи для развития сайтов
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image3" src="images/SA2-min.jpg" alt="Скорняков Антон" title="Скорняков Антон"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Антон Скорняков</h2>
                                                <p>Веб-аналитик</p>
                                                <ul>
                                                    <li>
                                                        настраивает веб-аналитику на сайте
                                                    </li>
                                                    <li>
                                                        анализирует статистику посещаемости сайтов
                                                    </li>
                                                    <li>
                                                        исследует поведение пользователей на сайте
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image4" src="images/DP.jpg" alt="Демьянов Павел" title="Демьянов Павел"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Павел Демьянов</h2>
                                                <p>Программист</p>
                                                <ul>
                                                    <li>
                                                        администрирует и оптимизирует работу сайтов
                                                    </li>
                                                    <li>
                                                        разрабатывает сайты, актуальные для поисковых систем
                                                    </li>
                                                    <li>
                                                        занимается внутренней оптимизацией структуры сайта
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image5" src="images/KU.jpg" alt="Карнаушкина Юлия" title="Карнаушкина Юлия"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Юлия Карнаушкина</h2>
                                                <p>Верстальщик</p>
                                                <ul>
                                                    <li>
                                                        занимается версткой контента сайта, посадочных страниц
                                                    </li>
                                                    <li>
                                                        адаптирует верстку сайтов под различные устройства
                                                    </li>
                                                    <li>
                                                        вносит изменения на сайты согласно задачам
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image6" src="images/SD.jpg" alt="Свистунов Дмитрий" title="Свистунов Дмитрий"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Дмитрий Свистунов</h2>
                                                <p>Контент-менеджер</p>
                                                <ul>
                                                    <li>
                                                        осуществляет регулярное обновление контента на сайте
                                                    </li>
                                                    <li>
                                                        вносит предложения по доработке концепции и содержанию сайта
                                                    </li>
                                                    <li>
                                                        исследует потребности и запросы посетителей сайта
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="staff-info__row">
                                    <div className="staff-info__column">
                                        <div className="staff-info__column__item">
                                            <div className="staff__img">
                                                <img ref="image7" src="images/ZE2-min.jpg" alt="Золотова Елена" title="Золотова Елена"/>
                                            </div>
                                            <div className="staff__description">
                                                <h2>Елена Золотова</h2>
                                                <p>Редактор</p>
                                                <ul>
                                                    <li>
                                                        отвечает за совершенную грамотность текстов
                                                    </li>
                                                    <li>
                                                        следит за соблюдением тех. задания по написанию СЕО-статей
                                                    </li>
                                                    <li>
                                                        отвечает за корректную структуру и содержание материалов
                                                    </li>
                                                </ul>
                                                {/*<button className="btn" onClick={this.openKnowFormHandler}>Получить консультацию экспертов</button>*/}
                                                <button className="btn b24-web-form-popup-btn-33">Получить консультацию экспертов</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </ScrollableAnchor>
                </div>
            </section>
        );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openCase, showConsultationExpertsForm, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);