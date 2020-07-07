"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

import styled from "styled-components";


class PriorityPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coronaPriority: "1",
            weatherPriority: "1",
            costPriority: "1",
            emissionPriority: "1",
            timePriority: "1",
            hasHiking: false,
            hasSurfing: false,
        };

        this.handleChangeCoronaPriority = this.handleChangeCoronaPriority.bind(this);
        this.handleChangeWeatherPriority = this.handleChangeWeatherPriority.bind(this);
        this.handleChangeCostPriority = this.handleChangeCostPriority.bind(this);
        this.handleChangeEmissionPriority = this.handleChangeEmissionPriority.bind(this);
        this.handleChangeTimePriority = this.handleChangeTimePriority.bind(this);
        this.handleChangeHiking = this.handleChangeHiking.bind(this);
        this.handleChangeSurfing = this.handleChangeSurfing.bind(this);
    }

    handleChangeCoronaPriority(event) {
        this.setState({coronaPriority: event.target.value});
    };

    handleChangeWeatherPriority(event) {
        this.setState({weatherPriority: event.target.value});
    };

    handleChangeCostPriority(event) {
        this.setState({costPriority: event.target.value});
    };

    handleChangeEmissionPriority(event) {
        this.setState({emissionPriority: event.target.value});
    };

    handleChangeTimePriority(event) {
        this.setState({timePriority: event.target.value});
    };

    handleChangeHiking(event) {
        this.setState({hasHiking: event.target.checked});
    };

    handleChangeSurfing(event) {
        this.setState({hasSurfing: event.target.checked});
    };

    render() {
        return (
            <Page>
                <div className="w-100 p-3 mb-5" style={{position: "absolute", minHeight: "100%"}}>
                    <p className="h1 text-center" style={{paddingTop: "50px"}}>Choose your priorities.</p>
                    <p className="h3 mt-3 text-center">
                        In order to find the perfect route for you, we would like to know more about what you value in your travels
                    </p>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Reduce COVID-19 exposure</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="2" step="1" value={this.state.coronaPriority} onChange={this.handleChangeCoronaPriority}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Have ideal weather</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="2" step="1" value={this.state.weatherPriority} onChange={this.handleChangeWeatherPriority}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Lower costs</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range"  min="0" max="2" step="1" value={this.state.costPriority} onChange={this.handleChangeCostPriority}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Minimize carbon-footprint</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range" min="0" max="2" step="1" value={this.state.emissionPriority} onChange={this.handleChangeEmissionPriority}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Shorten travel time</p>
                                </div>
                                <div className="col">
                                    <InputRange type="range" min="0" max="2" step="1" value={this.state.timePriority} onChange={this.handleChangeTimePriority}/>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Go surfing</p>
                                </div>
                                <div className="col text-center">
                                    <CheckBox id="checkbox1" type="checkbox" value={this.state.hasSurfing} onChange={this.handleChangeSurfing}/>
                                    <CheckBoxLabel htmlFor="checkbox1" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <p className="h5 text-left ml-5" for="startLocation">Go hiking</p>
                                </div>
                                <div className="col text-center">
                                    <CheckBox id="checkbox2" type="checkbox" value={this.state.hasHiking} onChange={this.handleChangeHiking}/>
                                    <CheckBoxLabel htmlFor="checkbox2" />
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <a 
                                    href={`#routes/coronaPriority=${this.state.coronaPriority}&weatherPriority=${this.state.weatherPriority}&timePriority=${this.state.timePriority}&costPriority=${this.state.costPriority}&emissionPriority=${this.state.emissionPriority}&hasSurfing=${this.state.hasSurfing}&hasHiking=${this.state.hasHiking}&`} 
                                    className="text-white"
                                >
                                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d", borderRadius: "20px", borderColor:"#eb401d"}}>
                                        <p className="h4 p-2 my-auto">Get a way</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

const InputRange = styled.input`
    {
        -webkit-appearance: none;
        background-color: #ddd;
        overflow: hidden;
        width: 300px;
        border-radius: 20px;
    }
  
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 20px;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: white;
    border-radius: 50%;
    box-shadow: -210px 0 0 200px #3D5C57;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
`;

const CheckBoxLabel = styled.label`
    top: 0;
    left: 0;
    width: 100px;
    border-radius: 15px;
    background: #bebebe;
    cursor: pointer;
    &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
`;

const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${CheckBoxLabel} {
    background: #eb401d;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin-left: 82px;
        transition: 0.2s;
    }
`;

export default withRouter(PriorityPage);
