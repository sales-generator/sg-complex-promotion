import React from 'react';
import { Component } from 'react';
import Guarantees from './guarantees/Guarantees';
import WorkStages from './work-stages/WorkStages';
import WhatDoYouGet from './what-do-you-get/WhatDoYouGet';
import Results from '../Results';
import Recomendations from './recomendations/Recomendations';
import ClientsWords from './clients-words/ClientsWords';
import Facts from './facts/Facts';
import BringClients from './bring-clients/BringClients';
import KeyDigits from './key-digits/KeyDigits';
import Approach from './approach/Approach';
import Staff from '../Staff';
import CtaBanner from '../main/banner/CtaBanner';
import ThanksBanner from './banner/ThanksBanner';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Banner from './banner/Banner.jsx';
import {showBanner} from '../../actions/index';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import routeCodes from '../../utils/route.path';

class Main extends Component{

    componentDidMount() {
        console.log(this.props.ctaBanner);
        let that = this, currentDate = new Date(),
            dateDifference = Math.abs(currentDate.getTime() - parseInt(window.localStorage.getItem('banner')));
        dateDifference = (Math.round(dateDifference) / 86400000).toFixed();
        window.addEventListener('scroll', () => {
            if(!this.props.banner && (!window.localStorage.getItem('banner') || parseInt(dateDifference) >= 7)) {
                if(this.props.windowPosition > 1500 && this.props.windowPosition < 1750) {
                    setTimeout(()=> {
                        that.props.showBanner(true);
                    }, 5000);
                }
            }
        });
    }

    closeBannerPopup(e) {
        e.stopPropagation();
        this.props.showBanner(false);
        let date = new Date();
        window.localStorage.setItem('banner', date.getTime());
    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showCtaBanner(true);
    }

    bannerPages() {
        if (this.props.banner){
            return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path={routeCodes.HOME} component={Banner}/>
                        <Route path={routeCodes.THANKS} component={() => {
                            return (
                                <ThanksBanner close={
                                    this.closeBannerPopup.bind(this)
                                } stay={
                                    this.formClickHandler.bind(this)
                                } />)}}/>}/>
                    </Switch>
                </BrowserRouter>);
        } else {
            return false;
        }
    }

    render() {
        return(
           <main className="main">
               <Guarantees/>
               <Approach/>
               <WorkStages/>
               <WhatDoYouGet/>
               <Results/>
               <KeyDigits/>
               <Recomendations/>
               <ClientsWords/>
               <Staff/>
               <Facts/>
               <BringClients/>
               {this.props.ctaBanner ? <CtaBanner/> : null}
               {this.bannerPages()}
           </main>
        )
    };
}

const mapStateToProps = (store) => {
    return {
        windowPosition: store.salesReducer.windowPosition,
        banner: store.salesReducer.showBanner,
        ctaBanner: store.salesReducer.ctaBanner
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showBanner}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

