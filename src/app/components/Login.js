import React from "react";

export class Login extends React.Component {

    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        return (
            <div>
                <p>You are inside login Component!</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}