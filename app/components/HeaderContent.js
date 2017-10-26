import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showKnowDefaultForm, showModal} from '../actions/index';
import { bindActionCreators } from 'redux';
import LiveRequest from './main/live-request/LiveRequest';

class HeaderContent extends Component{
    constructor(props) {
        super(props);
        this.openKnowFormHandler = this.openKnowFormHandler.bind(this);
    }

    openKnowFormHandler() {
        this.props.showKnowDefaultForm(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('SKOLKO_KLIENTOV');
        ga('send', 'event', 'know-clients-kp', 'send-know-klients-kp');
    }

    render() {
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <div className="container header__content">
                        <h1 className="header__content-title">КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ САЙТА В <span>ТОП-3</span> ЯНДЕКСА И GOOGLE</h1>
                        <h3 className="header__content-subtitle">Гарантированно приведем на Ваш сайт тысячи новых клиентов</h3>
                        {/*<button className="btn" onClick={this.openKnowFormHandler}>Узнать, сколько клиентов я получу</button>*/}
                        <button className="btn b24-web-form-popup-btn-21">Узнать, сколько клиентов я получу</button>
                    </div>
                    <a href="#guarantees" className="scroll_down"></a>
                    <LiveRequest/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showKnowDefaultForm, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
