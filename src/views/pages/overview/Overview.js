import React from "react"
import styles from "./Overview.module.css"
import {Layout} from "../../layout/Layout";
import {Background} from "../../../components/background/Background";
import {Weather} from "../../../components/weather/Weather";
import {Task} from "../../../tasks/tasks";


export class Overview extends React.Component {
    render() {
        return <Layout>
            <Task/>
            <Background>
                <h1 className={styles.heading}>Weather Predictor</h1>
                <Weather/>
            </Background>
        </Layout>
    }
}