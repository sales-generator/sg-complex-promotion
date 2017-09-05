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

class Main extends Component{
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
               <Facts/>
               <BringClients/>
           </main>
        )
    };
}

export default Main;

