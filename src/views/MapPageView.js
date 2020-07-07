"use strict";

import React from 'react';

import MapPage from '../components/MapPage'

export class MapPageView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
    }

    componentWillMount(){
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <MapPage/>
        );
    }
}
