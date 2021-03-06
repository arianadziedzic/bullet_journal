import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import Active from './active/Active.jsx';
import Snooze from './snoozed/Snooze.jsx';
import Archive from './archive/Archive.jsx';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      active: true,
      snooze: false,
      archive: false,
    };
    this.activeHandler = this.activeHandler.bind(this);
    this.snoozeHandler = this.snoozeHandler.bind(this);
    this.archiveHandler = this.archiveHandler.bind(this);
  }
  activeHandler() {
    this.setState({
      active: true,
      snooze: false,
      archive: false,
    });
  }
  snoozeHandler() {
    this.setState({
      snooze: true,
      active: false,
      archive: false,
    });
  }
  archiveHandler() {
    this.setState({
      archive: true,
      snooze: false,
      active: false,
    });
  }
  render() {
    return (
      <div id="menu-icons">
        <div
          to="/:active"
          id="home-icon"
          className="icons"
          onClick={this.activeHandler}
        >
          <Link to="/:active"/>
        </div>
        <div
          to="/:snooze"
          id="snooze-icon"
          className="icons"
          onClick={this.snoozeHandler}
        >
          <Link to="/:snooze" />
        </div>
        <div
          to="/:archive"
          id="archive-icon"
          className="icons"
          onClick={this.archiveHandler}
        >
          <Link to="/:archive" />
        </div>
        {this.state.active ? <Active activeHandler={this.activeHandler} /> : false }
        {this.state.snooze ? <Snooze snoozeHandler={this.snoozeHandler} /> : false }
        {this.state.archive ? <Archive archiveHandler={this.archiveHandler} /> : false }
      </div>
    );
  }
}

export default withRouter(Menu);
