import { useState } from 'react';
import Section from './components/feedback-widget/Section ';
import FeedbackOptions from './components/feedback-widget/FeedbackOptions';
import Statistics from './components/feedback-widget/Statistics ';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = feedback => {
    if (feedback === 0) {
      setGood(prevState => prevState + 1);
    }
    if (feedback === 1) {
      setNeutral(prevState => prevState + 1);
    }
    if (feedback === 2) {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  return (
    <Section title="Please leave a feedback">
      <FeedbackOptions
        options={[good, neutral, bad]}
        onLeaveFeedback={addFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
}
