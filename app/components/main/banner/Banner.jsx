import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {showBanner, sendCallback, nullCallbacks} from '../../../actions/index';
import {daysInMonth, findClosestDay, closestValue, monthNames} from '../../../utils/time.date';
import MaskedInput from 'react-maskedinput';
import { Link } from 'react-router-dom';
import routeCodes from '../../../utils/route.path';

class Banner extends React.Component{

    closeBannerPopup() {
        this.props.showBanner(false);
        let date = new Date();
        window.localStorage.setItem('banner', date.getTime());
    }



    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'gift-audit'};
        formData['name'] = this.refs['name'].value;
        formData['phone'] = this.refs['phone'].mask.getValue();
        this.props.sendCallback(formData);
        roistatGoal.reach({name: formData.name, phone: formData.phone, email: '', leadName: 'Лендинг_Комплексное _Предложение', text: 'Лендинг КП - Акция "Бесплатный аудит"'});
        fbq('init', '1492479437472764');
        fbq('track', 'PageView');
        this.refs['name'].value = '';
        this.refs['phone'].mask.setValue('');
        this.props.nullCallbacks(null, null);
        this.props.history.push(routeCodes.THANKS);

    }

    targetBtnSend (e) {
        yaCounter44418460.reachGoal('ALL_BTN_SEND');
        return true;
    }

    render() {
        let currentDate = new Date();
        let daysCount = daysInMonth(currentDate.getYear(), currentDate.getMonth());
        let fiveDaysArray = findClosestDay(daysCount), actionDay = closestValue(fiveDaysArray, currentDate.getDate()),
            currentMonthName = monthNames();
        return(
            <div className="popup-overlay popup-overlay--banner">
                <div className="popup-form popup-form--banner">
                    <div className="popup-form__close" onClick={this.closeBannerPopup.bind(this)}>
                        <svg className="btn-close" viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </div>
                    <p className="banner-text">Оставьте заявку до <span>{actionDay} {currentMonthName}</span></p>
                    <p className="banner-text">и получите аудит вашего сайта</p>
                    <p className="banner-text"><span>в подарок</span><img src="images/gift.png"/></p>
                    <form className="form-group banner-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                        <input className="form-control banner-form__field" type="text" ref="name" name="name" placeholder="Имя*" required={true}/>
                        <MaskedInput  mask="+7(111) 111 11 11" type="text" ref="phone" name="phone" required="true" className="form-control banner-form__field"/>
                        <input type="submit" value='Отправить заявку' className="btn banner-form__btn" onClick={this.targetBtnSend.bind(this)}/>
                    </form>
                </div>
                {/*<Link to={routeCodes.THANKS}>спасибо</Link>*/}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        windowPosition: store.salesReducer.windowPosition,
        bannerState: store.salesReducer.showBanner,
        reponseJson: store.salesReducer.responseJson
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showBanner, sendCallback, nullCallbacks}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);