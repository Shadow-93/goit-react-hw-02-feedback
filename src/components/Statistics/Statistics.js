import React from "react";
import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <div>
      <ul className={s.list}>
        <li className={s.listItem}>{`Good: ${good}`}</li>
        <li className={s.listItem}>{`Neutral: ${neutral}`}</li>
        <li className={s.listItem}>{`Bad: ${bad}`}</li>
        <li className={s.listItem}>{`Total: ${total}`}</li>
        <li
          className={s.listItem}
        >{`Positive feedback: ${positivePercentage}%`}</li>
      </ul>
    </div>
  ) : (
    <Notification title={"No feedback given"} />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
