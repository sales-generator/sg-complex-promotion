import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks, contractShow, workPlanShow, reportShow, showKnowDefaultForm, showKnowResultForm, showConsultationExpertsForm} from '../actions/index';
import { bindActionCreators } from 'redux';
import Iframe from 'react-iframe';


class ModalForm extends Component{

    isShow() {
        if (this.props.formState.modalShow) {
            return {
                display: 'block',
                animation: 'popupAnimOpen 0.4s 1 linear'
            };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }

    closeModalHandler(e) {
        e.stopPropagation();
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.contractShow(false);
        this.props.workPlanShow(false);
        this.props.reportShow(false);
        this.props.showKnowDefaultForm(false);
        this.props.showKnowResultForm(false);
        this.props.showConsultationExpertsForm(false);

    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showModal(true);
    }
    targetBtnSend (e) {
        yaCounter44418460.reachGoal('ALL_BTN_SEND');
        return true;
    }
    formVariants() {
        if (this.props.formState.contract) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=23&widget_user_lang=ru&sec=he0k37&r=1507901318537#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dv0lfpmk08iabumnm6i320rjvja%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } else if (this.props.formState.workPlan) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=25&widget_user_lang=ru&sec=2i3jjh&r=1507901318542#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dv0lfpmk08iabumnm6i320rjvja%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } else if (this.props.formState.report) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=27&widget_user_lang=ru&sec=uycit0&r=1507901318544#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dv0lfpmk08iabumnm6i320rjvja%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } if (this.props.formState.knowDefault){
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=21&widget_user_lang=ru&sec=dqipwd&r=1507900158120#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A8080%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A8080%2F%23professional-audit%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } if (this.props.formState.knowResult){
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=23&widget_user_lang=ru&sec=he0k37&r=1507901318537#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dv0lfpmk08iabumnm6i320rjvja%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } if (this.props.formState.consultationExperts){
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=33&widget_user_lang=ru&sec=sxj6a8&r=1507901318553#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dv0lfpmk08iabumnm6i320rjvja%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        } else {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=19&widget_user_lang=ru&sec=x7c4tv&r=1507900055000#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A8080%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A8080%2F%23professional-audit%22%7D"
                            width="100%"
                            height="539px"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            )
        }
    }
    render() {
        return(
            <div className="popup-overlay" style={this.isShow()} onClick={this.closeModalHandler.bind(this)}>
                {this.formVariants()}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, sendCallback, nullCallbacks, contractShow, workPlanShow, reportShow, showKnowDefaultForm, showKnowResultForm, showConsultationExpertsForm}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);