import React, { Component } from "react";

import Section from "./Section/Section";
import FeedbackOptions from "./FeedBackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  keys = Object.keys(this.state);

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
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.keys}
            onLeaveFeedback={this.increment}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
