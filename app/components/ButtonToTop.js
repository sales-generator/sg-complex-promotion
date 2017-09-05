import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setStyles, setWindowPos} from './../actions/index';

class ButtonToTop extends React.Component{
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.props.setWindowPos(window.pageYOffset);
            if (window.pageYOffset >= 1200) {
                this.props.setStyles('0.8', 'auto', 'pointer');
            } else {
                this.props.setStyles('0', 'none', 'default');
            }
        })
    }

    scrollToTopHandler(e) {
        e.preventDefault();
        let position = window.pageYOffset;
        setInterval(() => {
            if (position > 0) {
                position -= 150;
                window.scrollTo(0,position);
            }
            return false;
        }, 30);
    }
    render() {
        return(
            <aside className="top-button-block" style={{opacity: this.props.styles.opacity, pointerEvents: this.props.styles.pointerEvents, cursor: this.props.styles.cursor}}>
                <div className="top-button" ref="btn" onClick={this.scrollToTopHandler.bind(this)}></div>
            </aside>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        styles: store.salesReducer.styles
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setStyles, setWindowPos}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonToTop);