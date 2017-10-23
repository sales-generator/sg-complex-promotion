import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';
import ScrollableAnchor from 'react-scrollable-anchor';
import Iframe from 'react-iframe';

class BringClients extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'know-bottom'};
        formData.name = this.refs.name.value;
        screen.width > 1024 ? formData.phone = this.refs.phone.mask.getValue() : formData.phone = this.refs.phone.value;

        this.props.sendClientsCallback(formData);
        yaCounter44418460.reachGoal('POLUCHIT_PREDLOJENIE');
        ga('send', 'event', 'get-offer', 'send-get-offer');
    }
    allBtnSend(e) {
        yaCounter44418460.reachGoal('ALL_BTN_SEND');
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="know-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="know-form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <section className="b-clients">
                    <div className="container">
                        <h2 className="b-clients__title">УЗНАЙТЕ, СКОЛЬКО КЛИЕНТОВ МОЖЕТ ПРИНОСИТЬ ВАШ САЙТ:</h2>
                        {this.clientsNotification()}
                        <div className="b-clients__block">
                            <div className="b-clients__text">
                                <p>Нет двух одинаковых сайтов, поэтому для каждого сайта мы делаем индивидуальный расчет!
                                    Получите индивидуальное предложение, <strong>оставив заявку</strong> или позвонив по телефону: <a href="tel:8 800 333 12 93"><strong>8 800 333 12 93</strong></a>
                                </p>
                                <p>Это бесплатно и ни к чему Вас не обязывает</p>
                            </div>

                                <Iframe url="https://gpro.bitrix24.ru/pub/form.php?view=frame&form_id=33&widget_user_lang=ru&sec=sxj6a8&r=1507902041823#%7B%22domain%22%3A%22http%3A%2F%2Flocalhost%3A63342%22%2C%22from%22%3A%22http%3A%2F%2Flocalhost%3A63342%2F13%2F123456.html%3F_ijt%3Dcuq28k4k1nra85ilkelku3hr7r%22%7D"
                                        width="560px"
                                        height="545px"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen/>

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
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BringClients);