import React from "react";
import styles from "./Weather.module.css";
import {WeatherCard} from "./weather-card/WeatherCard";


export class Weather extends React.Component {
    //
    // constructor(props) {
    //     super(props);
    //     this.state = [
    //         {
    //             temperature: "16 C",
    //             day: "Monday",
    //             isSunny: true,
    //         },
    //         {
    //             temperature: "12 C",
    //             day: "Tuesday",
    //             isSunny: true,
    //         },
    //         {
    //             temperature: "7 C",
    //             day: "Wednesday",
    //             isSunny: false,
    //         }
    //     ];
    // }


    render() {
        return <div className={styles.weather}>
            {/*{this.state.map((card) => {*/}
            {/*     <WeatherCard temperature={card.temperature} day={card.day}/>*/}
            {/*})}*/}
        </div>
    }
}