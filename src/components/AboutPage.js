"use strict";

import { withRouter } from 'react-router-dom';
import React from 'react';

import Page from './Page';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        event.preventDefault();

        this.props.handleSearch();
    }

    render() {
        return (
            <Page>
                <div class="w-100 p-3 ml-5">
                    <div className="p-xl-3" style={{width: "90%", alignItems: "center", margin: "auto"}}>
                        <h3 className="card-title">About us</h3>
                        <h5 className="card-title">What is Get-a-way?</h5>
                        <hr/>
                        <p>
                            Risin' up, back on the street
                            Did my time, took my chances
                            Went the distance, now I'm back on my feet
                            Just a man and his will to survive
                            So many times, it happens too fast
                            You trade your passion for glory
                            Don't lose your grip on the dreams of the past
                            You must fight just to keep them alive
                            It's the eye of the tiger, it's the thrill of the fight
                            Risin' up to the challenge of our rival
                            And the last known survivor stalks his prey in the night
                            And he's watchin' us all with the eye of the tiger
                            Face to face, out in the heat
                            Hangin' tough, stayin' hungry
                            They stack the odds 'til we take to the street
                            For the kill with the skill to survive
                        </p>
                        <h5 className="card-title">Team AI of the tiger</h5>
                        <hr/>
                        <div className="p-xl-3" style={{alignItems: "center"}}>
                            <div className="table">
                                <tbody>
                                <tr>
                                    <td> 
                                        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg" style={{width: "200px"}}/>
                                    </td>
                                    <td>
                                        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg" style={{width: "200px"}}/>
                                    </td>
                                    <td>
                                        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg" style={{width: "200px"}}/>
                                    </td>
                                    <td>
                                        <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg" style={{width: "200px"}}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "center"}} >Tudor Maiereanu</td>
                                    <td style={{textAlign: "center"}}>Leon Schüchen</td>
                                    <td style={{textAlign: "center"}} >Marius Schulte</td>
                                    <td style={{textAlign: "center"}} >Leon Schulz</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: "center"}} >M.Sc. Informatics</td>
                                    <td style={{textAlign: "center"}}>M.Sc. Innovation & Computer Sciences</td>
                                    <td style={{textAlign: "center"}} >M.Sc. Innovation & Computer Sciences</td>
                                    <td style={{textAlign: "center"}} >M.Sc. Innovation & Computer Sciences</td>
                                </tr>
                                </tbody>
                            </div>
                        </div>

                    </div>
                </div>
            </Page>
        );
    }
}
export default withRouter(LandingPage);
