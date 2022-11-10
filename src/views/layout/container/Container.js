import React from "react"
import styles from "./Container.module.css"

export class Container extends React.Component {
    render() {
        return <main className={styles.container}>{this.props.children}</main>
    }
}