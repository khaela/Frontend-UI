import React from "react"

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mobile: "09987654321"};
      }
      render() {
    return (
        <footer>
            Contact: {this.props.email} / {this.state.mobile}
        </footer>
    );
      }
}