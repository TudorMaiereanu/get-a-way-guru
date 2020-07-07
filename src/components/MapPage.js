"use strict";

import { withRouter } from 'react-router-dom';

import Page from './Page';

// map stuff
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const styles = {
  width: "100vw",
  height: "90vh",
};

const mockData = require('./constants/mockData');

const MapboxGLMap = (newRoute) => {
    const [route, setRoute] = useState(newRoute);
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
        "pk.eyJ1IjoidHVkb3JtYWllcmVhbnUiLCJhIjoiY2tiejl6YjF4MDlyODMybXJkNG43ZWJzNiJ9.cTCPTwyMB8GAXB7Cou8ABQ";
        const initializeMap = ({ setMap, mapContainer }) => {
    
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [11.57549, 48.13743],
            zoom: 4,
        });

        map.on("load", () => {
            setMap(map);
            map.resize();
        });

        map.on("click", (event) => {
            console.log(event.lngLat)
        });

        route.newProps.stopsList.forEach(stopName => {
            let lng = parseInt(mockData.cities.find(obj => { return obj["locationName"] === stopName})['locationLong'])
            let lat = parseInt(mockData.cities.find(obj => { return obj["locationName"] === stopName})['locationLat'])

            var popup = new mapboxgl.Popup({ offset: 25, className: 'card' })
                .setHTML(`<div class="card" style={{width: "200px", height: "250px", borderRadius: "20px"}}>
                    <img class="card-img-top" style={{height: "200px", borderRadius: "20px 20px 0 0"}} src=${mockData.cities.find(obj => { return obj["locationName"] === stopName})['image']} alt="Card image cap" />
                    <div class="card-body text-center" style={{overflowX: "auto"}}>
                        <h4>${stopName}</h4>
                        <h5>Days: 2</h5>
                    </div>
                </div>`)
                .setMaxWidth("300px")
                .addTo(map);

            const marker = new mapboxgl.Marker('')
                .setLngLat([lng, lat])
                .setPopup(popup)
                .addTo(map);

        });

        var popup = new mapboxgl.Popup({ offset: 25, className: 'card' })
            .setHTML(`<div class="card" style={{width: "200px", height: "250px", borderRadius: "20px"}}>
                <img class="card-img-top" style={{height: "200px", borderRadius: "20px 20px 0 0"}} src=${mockData.cities.find(obj => { return obj["locationName"] === 'Munich'})['image']} alt="Card image cap" />
                <div class="card-body text-center" style={{overflowX: "auto"}}>
                    <h4>Munich</h4>
                    <h5>Days: 2</h5>
                </div>
            </div>`)
            .setMaxWidth("300px")
            .addTo(map);

        const marker = new mapboxgl.Marker()
            .setLngLat([11.57549, 48.13743])
            .setPopup(popup)
            .addTo(map);
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

class MapPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            map: "map",
            route: null,
            routeIndex: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const url = String(window.location.href);
        var idx = url.match(/route=(.*)/)[1];
        const numericalIndex = Number(idx[0])
        console.log(numericalIndex)
        this.setState({
            route: mockData.routes[numericalIndex],
            routeIndex: numericalIndex,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Page>
                <div className="w-100 mt-5" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="mb-5 mx-5">
                        <div className="row ml-0">
                            <div className="col pl-4 pt-3 text-align" style={{minWidth:"100px", maxWidth:"300px", backgroundColor: "rgba(136, 152, 149, 0.3)", borderRadius: "20px 0 0 20px"}}>
                                        <p className="h3 inline text-center mb-3">Your route</p>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Corona Exposure: {this.state.route.coronaRisk}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Weather: {this.state.route.weatherAverage}/10</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Cost: {this.state.route.cost}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}> Carbon Footprint: {this.state.route.emission} CO2e kg</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Travel Time: {this.state.route.travelTime} h</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Surfing spots: {this.state.route.surfActivitiesNumber}</p>
                                        </div>
                                        <div className="pl-3 row mx-auto">
                                            <p style={{fontSize: "17px"}}>Hiking spots: {this.state.route.hikeActivitiesNumber}</p>
                                        </div>
                                        <div className="row justify-content-center my-3">
                                            <a className="text-white" href={`#tiles/route=${this.state.routeIndex}$`}>
                                                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d", borderRadius: "20px", borderColor:"#eb401d"}}>
                                                    <p className="h5 p-1 my-auto">Details</p>
                                                </button>
                                            </a>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="submit" className="btn btn-primary" style={{backgroundColor: "#19393B", borderRadius: "20px", borderColor:"#19393B"}}>
                                                <p className="h5 p-1 my-auto">Offset CO2 emissions</p>
                                            </button>
                                        </div>
                                    </div>
                            <div className="col mr-4 border" style={{borderRadius: "0 20px 20px 0"}}>
                                <div className="row bg-light my-4 flex-nowrap" style={{overflowX: "scroll"}}>
                                {this.state.route.stopsList.map((item, i) => 
                                <div className="px-4">
                                    <div class="card" style={{width: "300px", height: "400px", borderRadius: "20px"}}>
                                        <img class="card-img-top" style={{height: "250px", borderRadius: "20px 20px 0 0"}} src={mockData.cities.find(obj => { return obj["locationName"] === item})['image']} alt="Card image cap" />
                                        <div class="card-body text-center" style={{overflowX: "auto"}}>
                                            <h4>{item}</h4>
                                            <p>{mockData.cities.find(obj => { return obj["locationName"] === item})['locationCountryName']}</p>
                                            <h5>Days: {this.state.route.dayslist[i]}</h5>
                                        </div>
                                    </div>
                                </div>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 border" style={{height: "700px", overflowX: "hidden", marginBottom: "100px", borderRadius: "20px"}}>
                        <MapboxGLMap newProps={this.state.route}/>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(MapPage);
