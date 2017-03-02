import React from 'react';

export var SideNav = React.createClass({
    getInitialState: function () {
        return {
            time: 0
        }
    },
    componentDidMount: function () {
        this.startTimer();
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({time: this.state.time+1})
        }, 1000);
    },
    render: function () {
        var {time} = this.state;
        return (
            <div className="test">SideNavn {time}</div>
        );
    }
});

export default SideNav;
