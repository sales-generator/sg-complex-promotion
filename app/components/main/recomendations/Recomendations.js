import React, { Component } from 'react';
import {showModal} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Recomendations extends Component{
    constructor(props) {
        super(props);
        this.callPopupHandler = this.callPopupHandler.bind(this);
    }

    callPopupHandler() {
        this.props.showModal(true);
    }
    render() {
        return(
            <ScrollableAnchor id={'recomendations'}>
                <section className="recomendations">
                    <div className="container">
                        <h2 className="recomendations__title">ПОЧЕМУ 87% КЛИЕНТОВ ПРИХОДЯТ К НАМ ПО РЕКОМЕНДАЦИИ</h2>
                        <div className="recomendations-info">
                            <div className="recomendations-info__item">
                                <img src="images/cash-back.svg" alt="ВОЗВРАТ ИНВЕСТИЦИЙ" title="ВОЗВРАТ ИНВЕСТИЦИЙ" data-audit="ВОЗВРАТ ИНВЕСТИЦИЙ" onClick={this.callPopupHandler}/>
                                <h4>ВОЗВРАТ ИНВЕСТИЦИЙ</h4>
                                <p>Мы рассчитываем окупаемость инвестиций для каждого проекта</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/specific-result.svg" alt="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" title="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" data-audit="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" onClick={this.callPopupHandler}/>
                                <h4>КОНКРЕТНЫЙ РЕЗУЛЬТАТ</h4>
                                <p>Прописываем в договоре <br/> результат по трафику</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/specialists-team.svg" alt="КОМАНДА СПЕЦИАЛИСТОВ" title="КОМАНДА СПЕЦИАЛИСТОВ"  data-audit="КОМАНДА СПЕЦИАЛИСТОВ" onClick={this.callPopupHandler}/>
                                <h4>КОМАНДА СПЕЦИАЛИСТОВ</h4>
                                <p>Над Вашим сайтом будет работать группа от 5 до 9 специалистов</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/aim-auditory.svg" alt="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" title="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ"  data-audit="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" onClick={this.callPopupHandler}/>
                                <h4>ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ</h4>
                                <p>Продвижение только по целевым запросам, согласованным с Вами</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/wallet.svg" alt="ИНДИВИДУАЛЬНЫЙ ПОДХОД" title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"  data-audit="ИНДИВИДУАЛЬНЫЙ ПОДХОД" onClick={this.callPopupHandler}/>
                                <h4>ВОЗМОЖНОСТЬ ДЛЯ МАЛОГО БИЗНЕСА</h4>
                                <p>Мы работаем с проектами <br/> от <strong>35</strong> тыс. рублей</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/key-site.svg" alt="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" title="РАБОТА НАД САЙТОМ ПОД КЛЮЧ"  data-audit="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" onClick={this.callPopupHandler}/>
                                <h4>РАБОТА НАД САЙТОМ ПОД КЛЮЧ</h4>
                                <p>Вы забываете о сайте <br/> и просто получаете заявки</p>
                            </div>
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
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Recomendations);