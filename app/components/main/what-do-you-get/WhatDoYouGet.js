import React, { Component } from 'react';
import {showModal, reportShow} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class WhatDoYouGet extends Component{
    constructor(props) {
        super(props);
        this.callPopupHandler = this.callPopupHandler.bind(this);
        this.orderReportHandler = this.orderReportHandler.bind(this);
    }

    callPopupHandler() {
        this.props.showModal(true);
    }

    orderReportHandler() {
        this.props.showModal(true);
        this.props.reportShow(true);
        yaCounter44418460.reachGoal('PRIMER_OTCHETA');
    }

    render() {
        return(
            <ScrollableAnchor id={'what-do-you-get'}>
                <section className="wdyg">
                    <div className="container">
                        <h2 className="wdyg__title">ЧТО ВЫ ПОЛУЧИТЕ В РЕЗУЛЬТАТЕ</h2>
                        <div className="wdyg-info">
                            <div className="wdyg-info__item">
                                <img src="images/growing.svg" alt="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" title="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" data-audit="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" onClick={this.callPopupHandler}/>
                                <h4>РОСТ ОРГАНИЧЕСКОГО ТРАФИКА</h4>
                                <p>Увеличиваем количество посетителей сайта <br/> в несколько раз</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/hold-clients.svg" alt="УДЕРЖАНИЕ КЛИЕНТОВ" title="УДЕРЖАНИЕ КЛИЕНТОВ" data-audit="УДЕРЖАНИЕ КЛИЕНТОВ" onClick={this.callPopupHandler}/>
                                <h4>УДЕРЖАНИЕ КЛИЕНТОВ</h4>
                                <p>Ваши клиенты будут возвращаться к Вам <br/> снова и снова</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/rise-sales.svg" alt="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА" title="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА"  data-audit="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА" onClick={this.callPopupHandler}/>
                                <h4>УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА</h4>
                                <p>Повышаем конверсионность, превращая посетителей сайта <br/> в клиентов</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/low-costs.svg" alt="СНИЖЕНИЕ РАСХОДОВ" title="СНИЖЕНИЕ РАСХОДОВ"  data-audit="СНИЖЕНИЕ РАСХОДОВ" onClick={this.callPopupHandler}/>
                                <h4>СНИЖЕНИЕ РАСХОДОВ</h4>
                                <p>Чем дольше мы с Вами работаем, тем дешевле обходятся <br/> Вам клиенты</p>
                            </div>
                        </div>
                        <div className="btn-block">
                            <button className="btn btn--download" onClick={this.orderReportHandler}>Пример нашего отчета <span>PDF, 2.1 МБ.</span></button>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, reportShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WhatDoYouGet);