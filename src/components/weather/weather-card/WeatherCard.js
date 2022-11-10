import React from "react";
import styles from './WeatherCard.module.css'


export class WeatherCard extends React.Component {
    render() {
        return <div className={styles.card}>
            <h2 className={styles.heading}>
                {this.props.day}
            </h2>
            <h3 className={styles.headingTemperature}>
                {this.props.temperature}
            </h3>
        </div>
    }
}