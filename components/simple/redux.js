import React from 'react';
import Navlink from '../Navlink';
import BuyAcorn from '../../src/containers/BuyAcorn';
import EatAcorn from '../../src/containers/EatAcorn';
import DisplayAcorn from '../../src/containers/DisplayAcorn';
import ArrowHAndlerDiv from '../../src/containers/ArrowHandlerDiv';

const ReduxApp = props => (
  <ArrowHAndlerDiv>
    <Navlink />
    <h1>Golden Acorn Application with redux</h1>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </ArrowHAndlerDiv>
);

export default ReduxApp;
