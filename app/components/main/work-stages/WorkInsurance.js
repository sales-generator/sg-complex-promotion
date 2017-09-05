import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {workPlanShow, showModal} from '../../../actions';

class WorkInsurance extends React.Component{

    constructor(props) {
        super(props);
        this.orderWorkPlanHandler = this.orderWorkPlanHandler.bind(this);
    }
    orderWorkPlanHandler() {
        this.props.workPlanShow(true);
        this.props.showModal(true);
        yaCounter44418460.reachGoal('PLAN_RABOT');
    }
    render() {
        return (
            <div className="insurance">
                <div className="insurance__wrapper">
                  <div className="insurance__block">
                    <h2 className="insurance__title">ВЫ БУДЕТЕ УВЕРЕНЫ В РЕЗУЛЬТАТЕ НА 100%</h2>
                    <p className="insurance__text">Посмотрите план работ по сайту одного из наших клиентов на 2 месяца!
                       <br/> Мы вышлем его бесплатно Вам на почту.</p>
                    <div className="btn-block">
                        <button className="btn btn--download" onClick={this.orderWorkPlanHandler}>План работ на 2 месяца <span>PDF, 2.5 МБ.</span></button>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, workPlanShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkInsurance);
