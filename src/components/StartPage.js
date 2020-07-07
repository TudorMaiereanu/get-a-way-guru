"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';
import Page from './Page';
import Calendar from "./Calendar";

class StartPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startLocation : '',
            endLocation : '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("Set priorities")
    }

    render() {
        return (
            <Page>
                <div className="w-100 p-3 mb-5" style={{position: "absolute", minHeight: "100%"}}>
                    <p className="h1 text-center" style={{paddingTop: "50px"}}>Tailor-made road trips.</p>
                    <p className="h2 mt-3 text-center">Detour Corona. Reduce emissions. Save time.</p>
                    <div className="container">
                            <div className="mt-5" style={{horizontalAlign: "middle"}}>
                                <p className="h4 mb-3 text-center" for="startLocation">From</p>
                                <select className="form-control"
                                    id="startLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            startLocation: event.target.value
                                        })
                                    }}
                                >
                                    <option hidden>Select starting point</option>
                                    <option value="Munich">Amsterdam</option>
                                    <option value="Munich">Barcelona</option>
                                    <option value="Munich">Berlin</option>
                                    <option value="Munich">Bremen</option>
                                    <option value="Munich">Bucharest</option>
                                    <option value="Munich">Budapest</option>
                                    <option value="Munich">Copenhagen</option>
                                    <option value="Munich">Florence</option>
                                    <option value="Munich">Hamburg</option>
                                    <option value="Munich">Krakow</option>
                                    <option value="Munich">Lisbon</option>
                                    <option value="Munich">Madrid</option>
                                    <option value="Munich">Munich</option>
                                    <option value="Munich">Paris</option>
                                    <option value="Munich">Porto</option>
                                    <option value="Munich">Prague</option>
                                    <option value="Munich">Rome</option>
                                    <option value="Munich">Stockholm</option>
                                    <option value="Munich">Vienna</option>
                                    <option value="Munich">Venice</option>
                                    <option value="Munich">Zurich</option>
                                </select>
                            </div>
                            <div className="mt-5">
                                <p className="h4 mb-3 text-center" for="startLocation">To</p>
                                <select className="form-control"
                                    id="endLocation"
                                    onChange={(event) => {
                                        this.setState({
                                            endLocation: event.target.value
                                        })
                                    }}
                                >
                                    <option hidden>Select destination</option>
                                    <option value="Barcelona">Amsterdam</option>
                                    <option value="Barcelona">Barcelona</option>
                                    <option value="Barcelona">Berlin</option>
                                    <option value="Barcelona">Bremen</option>
                                    <option value="Barcelona">Bucharest</option>
                                    <option value="Barcelona">Budapest</option>
                                    <option value="Barcelona">Copenhagen</option>
                                    <option value="Barcelona">Florence</option>
                                    <option value="Barcelona">Hamburg</option>
                                    <option value="Barcelona">Krakow</option>
                                    <option value="Barcelona">Lisbon</option>
                                    <option value="Barcelona">Madrid</option>
                                    <option value="Barcelona">Munich</option>
                                    <option value="Barcelona">Paris</option>
                                    <option value="Barcelona">Porto</option>
                                    <option value="Barcelona">Prague</option>
                                    <option value="Barcelona">Rome</option>
                                    <option value="Barcelona">Stockholm</option>
                                    <option value="Barcelona">Vienna</option>
                                    <option value="Barcelona">Venice</option>
                                    <option value="Barcelona">Zurich</option>
                                </select>
                            </div>
                            
                            <div className="mt-5">
                                <p className="h4 mb-3 text-center" for="date">Choose dates:</p>
                                <div className="text-center" id="date">
                                    <Calendar/>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <a href={`#priority/origin=${this.state.startLocation}&destination=${this.state.endLocation}`} className="text-white">
                                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "#eb401d", borderRadius: "20px", borderColor:"#eb401d"}}>
                                            <p className="h4 p-2 my-auto">Set priorities</p>
                                    </button>
                                </a>
                            </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default withRouter(StartPage);
