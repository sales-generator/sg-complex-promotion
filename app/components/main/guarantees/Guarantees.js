import React from 'react';
import {showModal, contractShow} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Guarantees extends React.Component{
    constructor(props) {
        super(props);
        this.callPopupHandler = this.callPopupHandler.bind(this);
        this.orderAnContractHandler = this.orderAnContractHandler.bind(this);
    }

    orderAnContractHandler() {
        this.props.contractShow(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('SKACHAT_PRIMER');
    }

    callPopupHandler() {
        this.props.showModal(true);
    }
    render() {
        return(
            <ScrollableAnchor id={'guarantees'}>
            <section className="guarantees">
                <div className="container">
                    <h2 className="guarantees__title">МЫ ДАЕМ ГАРАНТИИ, КОТОРЫЕ НЕ МОГУТ СЕБЕ ПОЗВОЛИТЬ 97% КОМПАНИЙ</h2>
                    <div className="guarantees-info">
                        <div className="guarantees-info__item">
                            <img src="images/balance.svg" alt="ЮРИДИЧЕСКИЕ ГАРАНТИИ" title="ЮРИДИЧЕСКИЕ ГАРАНТИИ"  onClick={this.callPopupHandler}/>
                            <h4>ЮРИДИЧЕСКИЕ ГАРАНТИИ</h4>
                            <p>Весь объем выполняемых работ и результаты зафиксированы в договоре</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/process.svg" alt="ПРОЗРАЧНОСТЬ ПРОЦЕССА" title="ПРОЗРАЧНОСТЬ ПРОЦЕССА" onClick={this.callPopupHandler}/>
                            <h4>ПРОЗРАЧНОСТЬ ПРОЦЕССА</h4>
                            <p>Мы фиксируем контрольные точки <br/>и даем на них гарантию</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/financial-guarantees.svg" alt="ФИНАНСОВЫЕ ГАРАНТИИ" title="ФИНАНСОВЫЕ ГАРАНТИИ"   onClick={this.callPopupHandler}/>
                            <h4>ФИНАНСОВЫЕ ГАРАНТИИ</h4>
                            <p>Мы вернем Вам все Ваши деньги, если не достигнем результатов в срок</p>
                        </div>
                    </div>
                    <div className="btn-block">
                        <button className="btn btn--download" onClick={this.orderAnContractHandler}>Скачать пример договора <span>PDF, 2.15 МБ.</span></button>
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
    return bindActionCreators({showModal, contractShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Guarantees);