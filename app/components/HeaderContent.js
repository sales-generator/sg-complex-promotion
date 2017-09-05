import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showKnowDefaultForm, showModal} from '../actions/index';
import { bindActionCreators } from 'redux';

class HeaderContent extends Component{
    constructor(props) {
        super(props);
        this.openKnowFormHandler = this.openKnowFormHandler.bind(this);
    }

    openKnowFormHandler() {
        this.props.showKnowDefaultForm(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('SKOLKO_KLIENTOV');
    }

    render() {
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <div className="container header__content">
                        <h1 className="header__content-title">КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ САЙТА В <span>ТОП-3</span> ЯНДЕКСА И GOOGLE</h1>
                        <h3 className="header__content-subtitle">Гарантированно приведем на Ваш сайт тысячи новых клиентов</h3>
                        <button className="btn" onClick={this.openKnowFormHandler}>Узнать, сколько клиентов я получу</button>
                    </div>
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
