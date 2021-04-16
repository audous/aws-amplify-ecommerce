// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
// import { Container, Header } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

import signUpConfig from './config/signUpConfig'

// import InitState from './pages/InitState'
// import TopMenu from './components/TopMenu'
// import Carousel from './components/Carousel'
// import ItemTable from './components/ItemTable'

import './App.css'

function App() {
    return (
        <div style={styles}>
            App JS Wrapper
        </div>
    );
}

export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}