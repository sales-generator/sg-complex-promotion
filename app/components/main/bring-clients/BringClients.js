import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';
import ScrollableAnchor from 'react-scrollable-anchor';


class BringClients extends React.Component{

    /*btnSubmitHandler(e) {
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
    }*/

   /* clientsNotification() {
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
    }*/

    showBottomForm() {
      return (() => {
            (function (w, d, u, b) {
                w['Bitrix24FormObject'] = b;
                w[b] = w[b] || function () {
                        arguments[0].ref = u;
                        (w[b].forms = w[b].forms || []).push(arguments[0])
                    };
                if (w[b]['forms']) return;
                let s = d.createElement('script');
                let r = 1 * new Date();
                s.async = 1;
                s.src = u + '?' + r;
                let h = d.getElementsByTagName('script')[0];
                h.parentNode.insertBefore(s, h);
            })(window, document, 'https://gpro.bitrix24.ru/bitrix/js/crm/form_loader.js', 'b24form');

            b24form({"id": "31", "lang": "ru", "sec": "g6bn7q", "type": "inline"});
        })();
    }
    render() {
        return(
            <section className="b-clients">
                    <div className="container">
                        <h2 className="b-clients__title">УЗНАЙТЕ, СКОЛЬКО КЛИЕНТОВ МОЖЕТ ПРИНОСИТЬ ВАШ САЙТ:</h2>
                        {/*{this.clientsNotification()}*/}
                        <div className="b-clients__block">
                            <div className="b-clients__text">
                                <p>Нет двух одинаковых сайтов, поэтому для каждого сайта мы делаем индивидуальный расчет!
                                    Получите индивидуальное предложение, <strong>оставив заявку</strong> или позвонив по телефону: <a href="tel:8 800 333 12 93"><strong>8 800 333 12 93</strong></a>
                                </p>
                                <p>Это бесплатно и ни к чему Вас не обязывает</p>
                            </div>
                            <script id="bx24_form_inline" data-skip-moving="true">
                                {this.showBottomForm()}
                            </script>
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