import React, { Component } from 'react';
import ButtonToTop from './ButtonToTop';
import CTAButton from './call-to-action-button/CTAButton';


const Footer = () => {
    const roistat = () => {
        return ((w, d, s, h, id) => {
        w.roistatProjectId = id; w.roistatHost = h;
        let p = d.location.protocol == "https:" ? "https://" : "http://";
        let u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
        let js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; let js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
    })(window, document, 'script', 'cloud.roistat.com', 'b4fec1a3c9fb3a227d660c8ef97488bb');
    };
    const pixel = () => {
        return !((f,b,e,v,n,t,s) => {
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)})(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    };
    return(

        <footer className="footer">
            {<ButtonToTop/>}
            {<CTAButton/>}
            <div className="separatortop">
                <svg id="triangle" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 H 0 L 50 0 L 100 100 H 100 V 0 Z" ></path></svg>
            </div>
            <div className="container">
              <div className="footer-container">
                <div className="footer__logo"><a href="http://sales-generator.ru"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></a></div>
                <address className="footer__address">
                    <p>info@salesgenerator.pro</p>
                    <p>г. Москва</p>
                    <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf" className="confidential-link" >Политика конфиденциальности</a>
                </address>
                    <div className="footer__phone">
                        <p>Звонок по России бесплатный</p>
                        <a href="tel:88003331293">8 (800) 333 12 93</a>
                    </div>
              </div>
            </div>
            {roistat()}
            {pixel()}
        </footer>
    );
};

export default Footer;