import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {showBanner} from '../../../actions/index';
import Iframe from 'react-iframe';
import {daysInMonth, findClosestDay, closestValue, monthNames} from '../../../utils/time.date';

class Banner extends React.Component{

    closeBannerPopup() {
        this.props.showBanner(false);
        let date = new Date();
        window.localStorage.setItem('banner', date.getTime());
    }

    render() {
        let currentDate = new Date();
        let daysCount = daysInMonth(currentDate.getYear(), currentDate.getMonth());
        let fiveDaysArray = findClosestDay(daysCount), actionDay = closestValue(fiveDaysArray, currentDate.getDate()),
            currentMonthName = monthNames();
        return(
            <div className="popup-overlay popup-overlay--banner">
                <div className="popup-form popup-form--banner">
                    <div className="popup-form__close" onClick={this.closeBannerPopup.bind(this)}>&times;</div>
                    <p className="banner-text">Оставьте заявку до <span>{actionDay} {currentMonthName}</span></p>
                    <p className="banner-text">и получите аудит вашего сайта</p>
                    <p className="banner-text"><span>в подарок</span><img src="images/gift.png"/></p>
                    <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=47&widget_user_lang=ru&sec=epk8ee&r=1508763826284#%7B%22domain%22%3A%22file%3A%2F%2F%22%2C%22from%22%3A%22file%3A%2F%2F%2FC%3A%2FUsers%2FPashebor%2FDesktop%2F%25D0%259D%25D0%25BE%25D0%25B2%25D1%258B%25D0%25B9%2520%25D1%2582%25D0%25B5%25D0%25BA%25D1%2581%25D1%2582%25D0%25BE%25D0%25B2%25D1%258B%25D0%25B9%2520%25D0%25B4%25D0%25BE%25D0%25BA%25D1%2583%25D0%25BC%25D0%25B5%25D0%25BD%25D1%2582.html%22%7D"
                            display="initial"
                            position="relative"
                            width="100%"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        windowPosition: store.salesReducer.windowPosition
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showBanner}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);