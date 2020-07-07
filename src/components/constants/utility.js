import topsis from 'topsis';

var linearAlgebra = require('linear-algebra')(),
    Vector = linearAlgebra.Vector,
    Matrix = linearAlgebra.Matrix;

const alt = require('./alt');

const times = [0, 1, 2, 3, 4];

function weights(p_weather=0, p_corona=0, p_cost=0, p_CO2=0, p_time=0, p_act_hike=0, p_act_surf=0) {
    p_act_hike = p_act_hike ? 1 : 0;
    p_act_surf = p_act_surf ? 1 : 0;

    let base = [0.228, 0.251, 0.228, 0, 0, 0, 0.065, 0.228];
    let weightsResult;

    let na_base_per = 0.25
    let na_pref_per = 0.75

    let a_base_per = 0.125
    let a_pref_per = 0.375
    let a_per = 0.5

    let w_act_both
    let w_act_hike
    let w_act_surf
    let w_weather
    let w_corona
    let w_cost
    let w_CO2
    let w_time
    let weight_sum
    
    if(p_weather === 0 && p_corona === 0 && p_cost === 0 && p_CO2 === 0 && p_time === 0){
        if (p_act_hike === 0 && p_act_surf === 0) {
            weightsResult = base
        } else {
            a_base_per = 0.5
            
            w_act_both = 0
            w_act_hike = 0
            w_act_surf = 0

            if (p_act_hike == 1 && p_act_surf == 1){
                w_act_both = a_per
            } else if (p_act_hike == 1) {
                w_act_hike = a_per
            } else if (p_act_surf == 1) {
                w_act_surf = a_per
            }
            
            weightsResult = base.map(item => item * a_base_per)
            weightsResult[3] += w_act_hike
            weightsResult[4] += w_act_surf
            weightsResult[5] += w_act_both
        }
    } else {
        if (p_weather < 2 && p_corona < 2 && p_cost < 2 && p_CO2 < 2 && p_time < 2){
            na_base_per = 0.5
            na_pref_per = 0.5
            a_base_per = 0.25
            a_pref_per = 0.25
        }

        if (p_act_hike == 0 && p_act_surf == 0){
            if(p_weather == 1){
                w_weather = 0.1
            } else if( p_weather == 2){
                w_weather = 0.2
            } else {
                w_weather = 0
            }

            if (p_corona == 1){
                w_corona = 0.1
            } else if( p_corona == 2){
                w_corona = 0.2
            } else {
                w_corona = 0
            }

            if (p_cost == 1){
                w_cost = 0.1
            } else if( p_cost == 2){
                w_cost = 0.2
            } else {
                w_cost = 0
            }
            
            if (p_CO2 == 1){
                w_CO2 = 0.1
            } else if( p_CO2 == 2){
                w_CO2 = 0.2
            } else {
                w_CO2 = 0
            }

            if (p_time == 1){
                w_time = 0.1
            } else if( p_time == 2){
                w_time = 0.2
            } else {
                w_time = 0
            }

            weight_sum = w_weather + w_corona + w_cost + w_CO2 + w_time

            w_weather = (w_weather/weight_sum)*na_pref_per
            w_corona = (w_corona/weight_sum)*na_pref_per
            w_cost = (w_cost/weight_sum)*na_pref_per
            w_CO2 = (w_CO2/weight_sum)*na_pref_per
            w_time = (w_time/weight_sum)*na_pref_per

            weightsResult = base.map(item => item * a_base_per)

            weightsResult[0] += w_weather
            weightsResult[1] += w_corona
            weightsResult[2] += w_cost
            weightsResult[6] += w_CO2
            weightsResult[7] += w_time
        } else {
            w_act_both = 0
            w_act_hike = 0
            w_act_surf = 0

            if (p_act_hike == 1 && p_act_surf == 1){
                w_act_both = a_per
            } else if (p_act_hike == 1){
                w_act_hike = a_per
            } else if (p_act_surf == 1){
                w_act_surf = a_per
            }

            if(p_weather == 1){
                w_weather = 0.1
            } else if( p_weather == 2){
                w_weather = 0.2
            } else {
                w_weather = 0
            }

            if (p_corona == 1){
                w_corona = 0.1
            } else if( p_corona == 2){
                w_corona = 0.2
            } else {
                w_corona = 0
            }

            if (p_cost == 1){
                w_cost = 0.1
            } else if( p_cost == 2){
                w_cost = 0.2
            } else {
                w_cost = 0
            }
            
            if (p_CO2 == 1){
                w_CO2 = 0.1
            } else if( p_CO2 == 2){
                w_CO2 = 0.2
            } else {
                w_CO2 = 0
            }

            if (p_time == 1){
                w_time = 0.1
            } else if( p_time == 2){
                w_time = 0.2
            } else {
                w_time = 0
            }

            weight_sum = w_weather + w_corona + w_cost + w_CO2 + w_time

            w_weather = (w_weather/weight_sum)*a_pref_per
            w_corona = (w_corona/weight_sum)*a_pref_per
            w_cost = (w_cost/weight_sum)*a_pref_per
            w_CO2 = (w_CO2/weight_sum)*a_pref_per
            w_time = (w_time/weight_sum)*a_pref_per

            weightsResult = base.map(item => item * a_base_per)

            weightsResult[0] += w_weather
            weightsResult[1] += w_corona
            weightsResult[2] += w_cost
            weightsResult[3] += w_act_hike
            weightsResult[4] += w_act_surf
            weightsResult[5] += w_act_both
            weightsResult[6] += w_CO2
            weightsResult[7] += w_time
        }
    }

    return weightsResult;
}

// alternative, weights, ia
function getMatrix() {
    let all = []
    times.forEach(time => {
        let alternative = []
        Object.keys(alt).forEach((item) => {
            alternative.push(alt[item][time])
        });
        all.push(alternative)
    })

    return all
}

function getTopRoutes(p_weather=0, p_corona=0, p_cost=0, p_CO2=0, p_time=0, p_act_hike=0, p_act_surf=0) {
    const w = weights(p_weather, p_corona, p_cost, p_CO2, p_time,p_act_hike, p_act_surf);
    const ia = ['max', 'min', 'min', 'max', 'max', 'max', 'min', 'min'];

    const df = getMatrix()
    const m = new Matrix(df);
    const best = topsis.getBest(m, w, ia);

    const dfSecond = df.filter(element => element !== best);
    const mSecond = new Matrix(dfSecond);
    const secondBest = topsis.getBest(mSecond, w, ia);

    const dfThird = dfSecond.filter(element => element !== secondBest);
    const mThird = new Matrix(dfThird);
    const thirdBest = topsis.getBest(mThird, w, ia);

    console.log(df);
    console.log(df.indexOf(best), best)
    console.log(df.indexOf(secondBest), secondBest)
    console.log(df.indexOf(thirdBest), thirdBest)

    return [df.indexOf(best), df.indexOf(secondBest), df.indexOf(thirdBest)]
}

export { weights, getTopRoutes };