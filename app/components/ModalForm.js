import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks, contractShow, workPlanShow, reportShow, showKnowDefaultForm} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class ModalForm extends Component{
    personalAgreement() {
        return (
            <div className="personal-data">
                <input type="checkbox" className="form-control" required defaultChecked/><p>Согласен на обработку <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf">персональных данных</a></p>
            </div>
        );
    }

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

    mailNotification() {
        let response = this.props.formState.responseJson;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="popup-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="popup-form__notification popup-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
         return notification(response);
        } else {
            return false;
        }
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'callback'};

        if (this.props.formState.contract) {
            formData['form-name'] = 'contract-order';
            formData.email = this.refs.email.value;
            formData.phone = this.refs.phone.mask.getValue();
            this.props.sendCallback(formData);
        } else if (this.props.formState.workPlan) {
            formData['form-name'] = 'work-plan-order';
            formData.email = this.refs.email.value;
            formData.phone = this.refs.phone.mask.getValue();
            this.props.sendCallback(formData);
        } else if(this.props.formState.report) {
            formData['form-name'] = 'report-order';
            formData.email = this.refs.email.value;
            formData.phone = this.refs.phone.mask.getValue();
            this.props.sendCallback(formData);
        } else if (this.props.formState.knowDefault) {
            formData = {'form-name': 'know-default'};
            formData['name'] = this.refs['name'].value;
            formData['phone'] = this.refs['phone'].mask.getValue();
            formData['comment'] = this.refs['comment'].value;
            this.props.sendCallback(formData);
        } else {
            formData['name'] = this.refs['name'].value;
            formData['phone'] = this.refs['phone'].mask.getValue();
            formData['comment'] = this.refs['comment'].value;
            this.props.sendCallback(formData);
        }
    }

    closeModalHandler(e) {
        e.stopPropagation();

        if (this.props.formState.contract || this.props.formState.workPlan || this.props.formState.report) {
            this.refs.email.value = '';
            this.refs.phone.mask.setValue('');
        } else if (this.props.formState.knowDefault){
            for (let field in this.refs) {
                this.refs[field].value = '';
            }
        } else {
            this.refs['name'].value = '';
            this.refs['phone'].mask.setValue('');
            this.refs['comment'].value = '';
        }
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.contractShow(false);
        this.props.workPlanShow(false);
        this.props.reportShow(false);
        this.props.showKnowDefaultForm(false);

    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showModal(true);
    }
    formVariants() {
        if (this.props.formState.contract) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Чтобы получить пример договора, оставьте,  пожалуйста,  свои контактные данные</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Ваш Email <span>*</span></label>
                        <input type="email" ref="email" name="email" className="form-control" required="true" placeholder="example@mail.ru"/>
                        <label>Телефон <span>*</span></label>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="btn"/>
                    </form>
                </div>
            )
        } else if (this.props.formState.workPlan) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Чтобы получить пример плана работ, оставьте, пожалуйста, свои контактные данные</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Ваш Email <span>*</span></label>
                        <input type="email" ref="email" name="email" className="form-control" required="true" placeholder="example@mail.ru"/>
                        <label>Телефон <span>*</span></label>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="btn"/>
                    </form>
                </div>
            )
        } else if (this.props.formState.report) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Чтобы получить пример нашего отчета,  оставьте,  пожалуйста,  свои контактные данные</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Ваш Email <span>*</span></label>
                        <input type="email" ref="email" name="email" className="form-control" required="true" placeholder="example@mail.ru"/>
                        <label>Телефон <span>*</span></label>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="btn"/>
                    </form>
                </div>
            )
        } if (this.props.formState.knowDefault){
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Узнать сколько клиентов мы можем привести Вам на сайт</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Как к Вам обращаться?<span>*</span></label>
                        <input  type="text" ref="name" name="name" className="form-control" placeholder="Иванов Иван Иванович" required/>
                        <label>Телефон <span>*</span></label>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        <label>Комментарий</label>
                        <textarea className="form-control" name="comment" ref="comment" placeholder="Мой сайт www.mysite.ru. Прошу связаться со мной в 14:30."></textarea>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="btn"/>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Оформление заявки</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Как к Вам обращаться?<span>*</span></label>
                        <input  type="text" ref="name" name="name" className="form-control" placeholder="Иванов Иван Иванович" required/>
                        <label>Телефон <span>*</span></label>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        <label>Комментарий</label>
                        <textarea className="form-control" name="comment" ref="comment" placeholder="Мой сайт www.mysite.ru. Прошу связаться со мной в 14:30."></textarea>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="btn"/>
                    </form>
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
    return bindActionCreators({showModal, sendCallback, nullCallbacks, contractShow, workPlanShow, reportShow, showKnowDefaultForm}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
