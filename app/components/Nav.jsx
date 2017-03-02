import React from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import actions from 'actions';

export var Nav = React.createClass({
    onDetailChange: function (newDetailStatus) {
        var {dispatch} = this.props;
        dispatch(actions.changeDetail(newDetailStatus));
    },
    render: function () {
        return (
            <div>
                <div className="title-bar" data-responsive-toggle="top-menu" data-hide-for="medium">
                    <button className="menu-icon" type="button" data-toggle="top-menu"></button>
                    <div className="title-bar-title">Menu</div>
                </div>
                <div className="top-bar" id="top-menu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="link">
                                <IndexLink to="/" activeClassName="active-link">Tutorial App</IndexLink>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-center">
                        <ul>
                            <li>
                                <button className="center-buttons" alt="Get brief overview button" onClick={this.onDetailChange('surface')}>
                                    Surface
                                </button>
                            </li>
                            <li>
                                <button className="center-buttons" alt="Get a more detailed overview button" onClick={this.onDetailChange('shallow')}>
                                    Shallow
                                </button>
                            </li>
                            <li>
                                <button className="center-buttons" alt="Get the most detailed overview button" onClick={this.onDetailChange('depth')}>
                                    In-depth
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect()(Nav);