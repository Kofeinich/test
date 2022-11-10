import React from "react";
import styles from "./Background.module.css"



export class Background extends React.Component {
    render() {
        return <section className={styles.back}>
            {this.props.children}
        </section>
    }
}