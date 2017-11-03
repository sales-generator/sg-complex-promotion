import React, {Component} from 'react';
import {showModal} from '../../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

class CTAButton extends Component{
    constructor(props) {
        super(props);
        this.style = {transformOrigin: 'center'}
    }

    ctaButtonClickHnadler() {
        this.props.showModal(true);
        yaCounter44418460.reachGoal('ZAKAZAT_ZVONOK');
        ga('send', 'event', 'callback-kp', 'send-calback-kp');
    }

    render() {
        return(
            <div className="popup__toggle" onClick={this.ctaButtonClickHnadler.bind(this)}>
                <div className="circlephone" style={this.style}></div>
                <div className="circle-fill" style={this.style}></div>
                <div className="img-circle" style={this.style}>
                    <div className="img-circleblock" style={this.style}></div>
                </div>
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
    return bindActionCreators({showModal}, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CTAButton);