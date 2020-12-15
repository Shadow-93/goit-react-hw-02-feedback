import React, { Component } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedBackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = (acc, value) => acc + value;
    return Object.values(this.state).reduce(total);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((good / total) * 100);
  };

  increment = (e) => {
    const key = e.target.name;
    this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={this.increment} />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title={"No feedback given"} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
