"use strict";

import React from 'react';

import RouteSelectionPage from '../components/RouteSelectionPage'


export class RouteSelectionPageView extends React.Component {

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

    componentDidMount(){
        this.setState({
            loading: false
        });
    }

    render() {
        return (
            <RouteSelectionPage />
        );
    }
}
