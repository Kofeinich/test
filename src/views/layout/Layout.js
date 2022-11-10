import React from "react"
import {Container} from "./container/Container";

export class Layout extends React.Component {
    render() {
        return <React.Fragment>
            <Container>{this.props.children}</Container>
        </React.Fragment>
    }
}