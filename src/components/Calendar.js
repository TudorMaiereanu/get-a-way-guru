"use strict";

import { withRouter } from 'react-router-dom';

import React, {Component} from 'react'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)
import moment from "moment";

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dates : null,
        };

        this.onSelect = this.onSelect.bind(this);
    }
    
    onSelect(dates) {
        this.setState({dates});
        console.log(dates);
    }

    render() {
        return (
            <DateRangePicker
                onSelect={this.onSelect}
                value={this.state.dates}
                minimumDate={moment()}
            />
        )
    }
}

export default withRouter(Calendar);
