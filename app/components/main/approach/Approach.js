import React from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setApproachItem} from '../../../actions'

class Approach extends React.Component{
    constructor(props) {
        super(props);
        this.nextHandler = this.nextHandler.bind(this);
        this.previousHandler = this.previousHandler.bind(this);
        this.hoverPaginHandler = this.hoverPaginHandler.bind(this);

    }
    

    nextHandler() {
        this.refs.slider.slickGoTo(this.props.approachesState + 1);
        this.props.setApproachItem(this.props.approachesState + 1);
        this.props.approachesState === 6 ? this.props.setApproachItem(0) : null;
    }

    previousHandler() {
        this.refs.slider.slickGoTo(this.props.approachesState - 1);
        this.props.setApproachItem(this.props.approachesState - 1);
        this.props.approachesState === 0 ? this.props.setApproachItem(6) : null;
    }

    hoverPaginHandler(event) {
        this.props.setApproachItem(parseInt(event.target.getAttribute('value')));
        this.refs.slider.slickGoTo(parseInt(event.target.getAttribute('value')));
    }

    approachItems() {
        const items = [0, 1, 2, 3, 4, 5, 6],
            text = ['Окупаемость вложений', 'Конкретный результат', 'Мы берем не всех', 'Масштабирование вашего бизнеса', 'Сущность потребностей ЦА', 'Уникальная методика', 'Погружение в бизнес клиента'],
            images = ['bag', 'aim', 'phone', 'planet', 'quest', 'wood', 'search'];
        return items.map((item, i) => {
            return (<div key={item} className={`approach-types__item ${this.props.approachesState === item ? ' approach-types__item--active': ''}`}  ref={`paginator${item}`} >
                <img value={item} onMouseEnter={this.hoverPaginHandler} src={`images/${images[i]}${this.props.approachesState === item ? '-green' : "-blue"}.svg`} alt="" title="" />
                <p value={item} onMouseEnter={this.hoverPaginHandler}>{text[i]}</p>
            </div>);
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed: 5000,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: false,
            swipeToSlide: false,
            pauseOnHover: false,
            arrows: false,
            fade: true,
            touchMove: false,
            swipe: false,
            swipeToSlide: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    draggable: false,
                    swipeToSlide: false,
                    infinite: true,
                    touchMove: false,
                    swipe: false
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    draggable: false,
                    swipeToSlide: false,
                    arrows: false,
                    touchMove: false,
                    swipe: false
                }
            }]
        };


        return(
            <section className="approach">
                <div className="container">
                    <h2 className="approach__title">Ключевые принципы нашего подхода</h2>
                    <div className="approach-types">
                      <div className="approach-types-wrapper">
                          {this.approachItems()}
                      </div>
                    </div>
                    <div className="approach-slider">
                        <div className="approach-slider__nav" onClick={this.previousHandler}><img src="images/arrow-prev.svg"/></div>
                        <div className="approach-slider__block">
                    <Slider ref='slider' {...settings}>
                        <div className="approach-slider__item">
                            <p><strong>Окупаемость вложений</strong> клиента для нас святое. Именно с расчета окупаемости для клиента мы начинаем любой проект.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Конкретный результат</strong> мы прописываем в договоре и несём за это финансовую ответственность. Проще говоря, мы вернём Вам все деньги, если результат не будет достигнут.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>50% наших потенциальных клиентов получают отказ</strong>, потому что у нас нет 95%-ой уверенности в том, что вложения этих клиентов отобьются. Да, это больно по нам бьёт, но так - правильно.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Масштабирование Вашего бизнеса,</strong> а не трафик или лиды - цель нашей деятельности.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Сущность потребностей ЦА,</strong> а не список запросов для продвижения позволяют обеспечивать рост не только Вашего сайта, но и бизнеса.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Уникальная методика</strong> работы с контентом и сайтом позволяет нам делать средний рост органического трафика в 763 %. Да, мы готовы это подтвердить.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Погружение в бизнес клиента</strong> позволяет нам предлагать наиболее оптимальные решения. Это требует большой вовлечённости и работы как с нашей стороны, так и со стороны клиента. Не все к этому готовы, но оно того стоит.</p>
                        </div>
                    </Slider>
                        </div>
                        <div className="approach-slider__nav" onClick={this.nextHandler}><img src="images/arrow-next.svg" /></div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        approachesState: store.approachReducer.approachItem
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setApproachItem}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Approach);