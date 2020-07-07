"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

const mockData = require('./constants/mockData');
import { weights, getTopRoutes } from './constants/utility';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            indexes: {},
            routes: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentWillMount() {
        const url = String(window.location.href);
        var coronaPriority = url.match(/coronaPriority=(.*?)&/)[1]
        var weatherPriority = url.match(/weatherPriority=(.*?)&/)[1]
        var timePriority = url.match(/timePriority=(.*?)&/)[1]
        var costPriority = url.match(/costPriority=(.*?)&/)[1]
        var emissionPriority = url.match(/emissionPriority=(.*?)&/)[1]
        var hasSurf = url.match(/hasSurfing=(.*?)&/)[1]
        var hasHike = url.match(/hasHiking=(.*?)&/)[1]

        const boolSurf = hasSurf === "true" ? 1 : 0;
        const boolHike = hasHike === "true" ? 1 : 0;

        const routeIndexes = getTopRoutes(Number(weatherPriority), Number(coronaPriority), Number(costPriority), Number(emissionPriority), Number(timePriority), boolSurf, boolHike);
        this.setState({
            routes: {
                "1": mockData.routes[routeIndexes[0]],
                "2": mockData.routes[routeIndexes[1]],
                "3": mockData.routes[routeIndexes[2]],
            }
        })
        this.setState({
            indexes: {
                "1": routeIndexes[0],
                "2": routeIndexes[1],
                "3": routeIndexes[2],
            }
        })
    }

    render() {
        return (
            <Page>
                <div className="w-100 p-3" style={{position: "absolute", minHeight: "100%"}}>
                    <p className="h3 ml-5 my-4 pb-4">Select your route from Munich to Barcelona: </p>
                    <div className="col-100 ml-4 h-75">
                        {Object.keys(this.state.routes).map((routeIndex, i) => 
                            <div className="mb-5">
                                <div className="row ml-0">
                                    <div className="col pl-4 pt-3 text-align" style={{minWidth:"100px", maxWidth:"300px", backgroundColor: "rgba(136, 152, 149, 0.3)", borderRadius: "20px 0 0 20px"}}>
                                        <p className="h3 inline text-center mb-3">Route {routeIndex}</p>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Corona Exposure: {this.state.routes[routeIndex].coronaRisk}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Weather: {this.state.routes[routeIndex].weatherAverage}/10</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Cost: {this.state.routes[routeIndex].cost}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Carbon Footprint: {this.state.routes[routeIndex].emission} CO2e kg</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Travel Time: {this.state.routes[routeIndex].travelTime} h</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Surfing spots: {this.state.routes[routeIndex].surfActivitiesNumber}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Hiking spots: {this.state.routes[routeIndex].hikeActivitiesNumber}</p>
                                        </div>
                                        <div className="row justify-content-center my-4">
                                            <a className="text-white" href={`#map/route=${this.state.indexes[routeIndex]}$`}>
                                                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d", borderRadius: "20px", borderColor:"#eb401d"}}>
                                                    <p className="h5 p-2 my-auto">Pick route</p>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col mr-4 border" style={{borderRadius: "0 20px 20px 0"}}>
                                        <div className="row bg-light my-4 flex-nowrap" style={{overflowX: "scroll"}}>
                                        {this.state.routes[routeIndex].stopsList.map((item, i) => 
                                        <div className="px-4">
                                            <div class="card" style={{width: "300px", height: "350px", borderRadius: "20px"}}>
                                                <img class="card-img-top" style={{height: "200px", borderRadius: "20px 20px 0 0"}} 
                                                    src={mockData.cities.find(obj => { return obj["locationName"] === item})['image']}
                                                    alt="Card image cap"
                                                />
                                                <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                    <h4>{item}</h4>
                                                    <p>{mockData.cities.find(obj => { return obj["locationName"] === item})['locationCountryName']}</p>
                                                    <h5>Days: {this.state.routes[routeIndex].dayslist[i]}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(RouteSelectionPage);
