"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import ItemsCarousel from 'react-items-carousel';

const mockData = require('./constants/mockData');
const routeIndex = "3";

import Page from './Page';

class RouteSelectionPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItemIndex: 0,
            routeStopNames: [],
            routeStops: [],
            routeIndex: '',
            weatherMockDict: {
                1: "fas fa-sun",
                2:  "fas fa-sun",
                3:  "fas fa-cloud-sun",
                4:  "fas fa-cloud-sun",
                5:  "fas fa-cloud-sun-rain",
                6:  "fas fa-cloud-sun-rain",
                7:  "fas fa-cloud",
                8:  "fas fa-cloud",
                9:  "fas fa-cloud"
            }
        };
    }

    getObjectByCityName(cityName, routeObjectsList) {
        return routeObjectsList.find(obj => obj.locationName === cityName);
    }

    componentWillMount() {
        const url = String(window.location.href);
        var idx = url.match(/route=(.*)/)[1];
        const numericalIndex = Number(idx[0])
        const route = mockData.routes[numericalIndex];
        this.setState({
            routeIndex: numericalIndex,
        })

        const routeObjectsList = mockData.cities.filter(obj => mockData.routes[numericalIndex].stopsList.includes(obj.locationName));

        route['stopsList'].forEach((object => {
            this.state.routeStops.push(this.getObjectByCityName(object, routeObjectsList))
        }))
    }


    render() {
        return (
            <Page>
                <div className="w-100" style={{position: "absolute", minHeight: "100%"}}>
                    <div className="row pt-3 text-white" style={{backgroundColor: "#3D5C57"}}>
                        {this.state.routeStops.map((item, i) => <div className="col">
                            <p className="text-center h5 text-white">{item.locationName}</p>
                            <p className="text-center text-white">Days: {mockData.routes[this.state.routeIndex].dayslist[i]}</p>
                        </div>)}
                    </div>
                    <div className="container-fluid" style={{maxWidth:"90%"}}>
                    <ItemsCarousel
                        placeholderItem={<div style={{ height: 600, background: '#EEE' }} />}
                        enablePlaceholder={true}
                        numberOfPlaceholderItems={1}
                        numberOfCards={1}
                        slidesToScroll={1}
                        chevronWidth={100}
                        outsideChevron={true}
                        showSlider={true}
                        alwaysShowChevrons={true}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={(value) => {
                            this.setState({ activeItemIndex: value })
                            this.forceUpdate();
                        }}
                        rightChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Next'}</button>}
                        leftChevron={<button className="btn btn-primary mt-5" style={{backgroundColor: "#19393B"}}>{'Prev'}</button>}
                    >
                        {this.state.routeStops.map((item, i) =>
                            <div className="col-100">
                                <div className="row mt-5 mb-3 ml-3">
                                    <h1 className="mt-3">{item.locationName}</h1>
                                </div>
                                <div className="row mb-5 mx-3">
                                    <p className="h4">{item.locationDescription}</p>
                                </div>
                                <div className="row mb-2">
                                    <div class="col-5 mt-3" style={{maxWidth: "1000px"}}>
                                        <div class="card m-3" style={{borderRadius: "20px"}}>
                                            <div id={`carouselExampleIndicators${item.locationName}`} class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`}  data-slide-to="0" class="active"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`} data-slide-to="1"></li>
                                                    <li data-target={`#carouselExampleIndicators${item.locationName}`}  data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner" style={{maxHeight: "700px"}}>
                                                    <div class="carousel-item active">
                                                        <img class="d-block w-100" src={item.image} height="400px" width="400px" alt="First slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src={item.image}height="400px" width="400px" alt="Second slide"/>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img class="d-block w-100" src={item.image} height="400px" width="400px" alt="Third slide"/>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href={`#carouselExampleIndicators${item.locationName}`} role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href={`#carouselExampleIndicators${item.locationName}`} role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <div class="card-body text-center" style={{overflowX: "auto"}}>
                                                <h5>{item.locationName}</h5>
                                                <p>Days: {mockData.routes[this.state.routeIndex].dayslist[i]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-7 mt-3">
                                        <div className="m-3">
                                            <h2>Corona restrictions in {item.locationCountryName}</h2>
                                            <div className="mt-4" style={{height: "400px", overflowY: "auto"}}>
                                                <p className="h3">May I freely move within this country?</p>
                                                <p className="h4 mb-4">{item.locationRegulations.first}</p>
                                                <p className="h3">May I transit this country?</p>
                                                <p className="h4 mb-4">{item.locationRegulations.second}</p>
                                                <p className="h3">Is a mask required in public? </p>
                                                <p className="h4" >{item.locationRegulations.second}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">14-day Corona cases forecast in {item.locationName}</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col mx-5">
                                        <img src={`https://github.com/TudorMaiereanu/get-a-way-backend/blob/master/src/data/${item.locationName}.png?raw=true`} width="100%" style={{borderRadius: "20px"}}/>
                                        <p className="h5">Total population: {item.population} people</p>
                                    </div>
                                </div>
                                <div className="row mt-5" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">Weather forecast in {item.locationName}</p>
                                    </div>
                                </div>
                                <div className="row my-3" style={{maxHeight: "200px"}}>
                                        {this.state.routeStops[this.state.activeItemIndex].weatherList.map((iconValue, i) => 
                                        <div className="col">
                                            <button type="button" className="btn btn-default btn-lg">
                                                <i className={this.state.weatherMockDict[iconValue]}></i>
                                                <p className="text-center h4">{25- iconValue}° C</p>
                                            </button>
                                        </div>
                                        )}
                                </div>
                                <div className="row mt-3" style={{maxHeight: "400px"}}>
                                    <div className="col">
                                        <p className="h3">City level data</p>
                                    </div>
                                </div>
                                <div className="row my-3" style={{maxHeight: "200px"}}>
                                    <div className="col">
                                        <p className="h5">City cost level: {item.costValue}</p>
                                    </div>
                                </div>
                                <div className="row my-3" style={{maxHeight: "200px"}}>
                                    <div className="col">
                                        <p className="h5 mb-3">Activities:</p>
                                        {item.hasSurf === "1"
                                        ? <button className="mr-5" style={{backgroundColor: "#889895", borderColor: "#19393B", borderWidth: "thin"}}>
                                            <img className="m-3" src="https://icon-library.net/images/surfer-icon/surfer-icon-13.jpg" width="100px" height="100px"/>
                                        </button>
                                        : <button className="mr-5" style={{backgroundColor: "#889895", borderColor: "#19393B", borderWidth: "thin"}}>
                                            <img className="m-3" src="https://png2.kisspng.com/sh/b2f7c83826af3e528e1200336beaf2ef/L0KzQYm3VsE1N6NAjJH0aYP2gLBuTf12e5Z6hZ94Zj31hcT6ifFvNZpoh9D8LYXxecfskwNqfKoyh9g2bXHngrL6TfNwdaF6Rd9Ac3X4fX7wgB9vNWZnSqQ5Y3LodIe5VMA4Nmg5T6c5MEmzQYa5WMk2QGI5SqoCN0GxgLBu/kisspng-museum-of-russian-icons-university-of-madras-compu-museum-icon-5b220cbed62407.7475009015289581428771.png" width="100px" height="100px"/>
                                        </button>
                                        }
                                        {item.hasHike === "1"
                                        ? <button style={{backgroundColor: "#889895", borderColor: "#19393B", borderWidth: "thin"}}>
                                            <img className="m-3" src="https://icon-library.net/images/hiking-icon-png/hiking-icon-png-24.jpg" width="100px" height="100px"/>
                                        </button>
                                        : null
                                        }
                                    </div>
                                </div>
                                <div className="row mb-5" style={{maxHeight: "200px"}}>
                                    <div className="col">
                                        <button className="btn btn-primary mt-5 mr-4" style={{backgroundColor: "#FF585D", borderColor: "white", borderRadius:"20px"}}>
                                            <h4 className="text-white my-auto p-3">Find housing in {item.locationName}</h4>
                                        </button>
                                        <button className="btn btn-primary mt-5" style={{backgroundColor: "#23387E", borderColor: "white", borderRadius:"20px"}}>
                                            <h4 className="text-white my-auto p-3">Find hotels in {item.locationName}</h4>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </ItemsCarousel>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(RouteSelectionPage);
