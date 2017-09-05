import React, { Component } from 'react';
import {openCase, showKnowDefaultForm, showModal} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import MaskedInput from 'react-maskedinput';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor';

class Result extends Component{

    constructor(props) {
        super(props);
        this.openKnowFormHandler = this.openKnowFormHandler.bind(this);
    }

    openKnowFormHandler() {
        this.props.showKnowDefaultForm(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('SKOLKO_KLIENTOV2');
    }

    caseClickHandler(event){
        let array = [];
        let highQualityImages = [];

        for (let image in this.refs) {
            if (this.refs.hasOwnProperty(image)) {
                let source = this.refs[image].src;
                array.push(source);
            }
        }

        for (let i = 0; i < array.length; i+=1) {
            if (array[i] === event.target.src) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1);
                array.unshift(event.target.src);
                break;
            }
        }

        array.map(uri => highQualityImages.push(uri.replace('/images/', '/images/high-quality-cases/')));

        this.props.openCase(highQualityImages, true);
    }


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

        <section className="results">
                <div className="container">
                    <h2 className="results__title">РЕЗУЛЬТАТЫ НАШЕЙ РАБОТЫ</h2>
                    <p className="results__subtitle">МЫ ЗНАЕМ, КАК СДЕЛАТЬ ИЗ МАЛОГО БИЗНЕСА КРУПНЫЙ</p>
                    <ScrollableAnchor id={'results'}>
                    <Slider {...settings}>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image1" src="images/gd.jpg" alt="График роста сайта Генеральный дирекктор" title="График роста сайта Генеральный дирекктор" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image6" src="images/bussines-resuourse.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image4" src="images/dejure.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image5" src="images/santech.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image7" src="images/word-deal.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image8" src="images/veronica.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                    <div>
                        <div className="results-info__row">
                            <div className="results-info__column">
                                <div className="results-info__column__item"><img ref="image2" src="images/icc.jpg" alt="График роста сайта Междунаротной торговой палаты" title="График роста сайта Междунаротной торговой палаты" onClick={this.caseClickHandler.bind(this)}/></div>
                            </div>
                        </div>
                    </div>
                    <div>
                      <div className="results-info__row">
                        <div className="results-info__column">
                            <div className="results-info__column__item"><img ref="image3" src="images/pansionat.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                        </div>
                      </div>
                    </div>
                    </Slider>
                </ScrollableAnchor>
                    <button className="btn" onClick={this.openKnowFormHandler}>Узнать, сколько клиентов я получу</button>
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
    return bindActionCreators({openCase, showKnowDefaultForm, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);