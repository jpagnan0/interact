import React, { Component } from "react";
import { connect } from "react-redux";
import Interaction from "../components/Interaction";
import { userInteractions } from "../actions/userInteractions";

class InteractionList extends Component {
  componentDidMount() {
    this.props.userInteractions(this.props.loggedInUser.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.interactions.length !== prevProps.interactions.length) {
      this.props.userInteractions(this.props.loggedInUser.id);
    }
  }

  render() {
    return (
      <div>
        {this.props.interactions.length > 0 &&
          this.props.interactions.map((interaction, i) => {
            return <Interaction interaction={interaction} key={i} />;
          })}
      </div>
    );
  }
}

export default connect(
  null,
  { userInteractions: userInteractions }
)(InteractionList);
