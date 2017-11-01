import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {showCtaBanner} from '../../../actions/index';

class CtaBanner extends React.Component{
    closeModalHandler(event) {
        event.preventDefault();
        this.props.showCtaBanner(false);
    }
    formClickHandler(e){
        e.stopPropagation();
        this.props.showCtaBanner(true);
    }
    render () {
        return(
            <section className="popup-overlay popup-overlay--cta" onClick={this.closeModalHandler.bind(this)}>
            <div className="popup-form popup-form--cta">
                <div className="popup-form__close popup-form__close--cta" >
                    <svg className="btn-close" viewBox="0 0 24 24">
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </div>
                <div className="popup-form__notification">
                    <h2>Менеджер свяжется с Вами в ближайшее время!</h2>
                </div>
                <div className="popup-form__notification--text">
                    <p>А пока, рекомендуем ознакомиться с полезной статьей</p>
                </div>
                <div className="cta-image-block">
                    <div className="cta-image-block__item">
                        <img src="images/link-article2.png" alt="CTA-элемент" title="CTA-элемент"/>
                    </div>
                    <div className="cta-image-block__item">
                        <a href="https://sales-generator.ru/blog/cta-elementy/"><h2>CTA - элементы: правильные призывы к действию</h2></a>
                        <p>
                            В ней мы рассказали, как создать CTA - элементы, которые на 100% привлечёт внимание посетителей и увеличит конверсию сайта.
                        </p>
                    </div>
                </div>
                <div className="cta-image-block__button" onClick={this.formClickHandler.bind(this)}>
                    <a className="btn btn--download" href="https://sales-generator.ru/blog/cta-elementy/">Узнать, как увеличить конверсию</a>
                </div>
            </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showCtaBanner}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CtaBanner)

