import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {constant, linear, quadratic, animateValue} from '../../../utils/AnimateNumbers';


class KeyDigits extends React.Component{

    constructor(props) {
        super(props);
        this.flag = 0;
    }

    render() {
        window.addEventListener('scroll', (e) =>{
            if (this.props.store.windowPosition > 2400 && this.props.store.windowPosition < 2550) {
                this.flag += 1;

                if (this.flag === 1) {
                    animateValue('traffic', 0, 3000, linear);
                    animateValue('leaving', 0, 3000, linear);
                    animateValue('requests', 0, 3000, linear);
                    animateValue('requests2', 0, 3000, linear);
                    animateValue('deep-view', 0, 3000, linear);
                }
            }
        });
    return(

        <section className="key-digits">
            <div className="container">
                <h2 className="key-digits__title">КЛЮЧЕВЫЕ ЦИФРЫ НАШИХ КЛИЕНТОВ</h2>
                <div className="digits" ref={'digits'}>
                    <div className="digits__item">
                        <h3 className="digits__title"><span id="leaving">116</span>%</h3>
                        <p className="digits__text">Увеличение <br/> продолжительности посещения</p>
                    </div>
                    <div className="digits__item">
                        <h3 className="digits__title"><span id="requests">81</span> <span id="requests2">600</span></h3>
                        <p className="digits__text">Запросов наших клиентов в <br/> ТОП 10</p>
                    </div>
                    <div className="digits__item">
                        <h3 className="digits__title"><span id="traffic">763</span>%</h3>
                        <p className="digits__text">Увеличение трафика <br/> на сайтах клиентов</p>
                    </div>
                    <div className="digits__item">
                        <h3 className="digits__title"><span id="deep-view">26</span>%</h3>
                        <p className="digits__text">Увеличение глубины просмотра <br/> на сайтах клиентов</p>
                    </div>
                </div>
            </div>
        </section>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        store: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyDigits);