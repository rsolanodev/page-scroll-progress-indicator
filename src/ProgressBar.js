import React, {Component} from 'react';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            width: this.props.width
        }
    }

    render() {

        const ProgressBarStyle = {
            position: 'fixed',
            height: '.25em',
            backgroundColor: this.state.color,
            top: '63px',
            width: this.props.width + '%',
            zIndex: 2
        };

        return(
            <div style={ProgressBarStyle} />
        );
    }
};

export default ProgressBar;
