"use strict";

import React from 'react';

import TilesPage from '../components/TilesPage'


export class TilesPageView extends React.Component {

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

        // MovieService.getMovies().then((data) => {
        //     this.setState({
        //         data: [...data],
        //         loading: false
        //     });
        // }).catch((e) => {
        //     console.error(e);
        // });
    }

    render() {
        return (
            <TilesPage/>
        );
    }
}
