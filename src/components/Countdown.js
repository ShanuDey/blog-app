import { useEffect, useRef, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [timer, setTimer] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const dateTimeRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInterval(intervalID);
    setTimer(dateTimeRef.current.value);
  };

  const handleButtonClick = (e) => {
    if (showForm) handleSubmit(e);
    setShowForm(!showForm);
  };

  const countdown = () => {
    if (timer.length !== 0) {
      const countdownIntervalId = setInterval(() => {
        const now = new Date().getTime();
        const countDownTime = new Date(timer).getTime();
        const timeRemaining = countDownTime - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        if (timeRemaining < 0) {
          clearInterval(countdownIntervalId);
          setTimeLeft('');
        } else {
          setTimeLeft(
            `${days} Day ${hours} Hour ${minutes} Min ${seconds} Sec`
          );
        }
      }, 1000);
      setIntervalID(countdownIntervalId);
    }
  };

  useEffect(() => {
    countdown();
  }, [timer]);

  return (
    <Card className='text-center' border='primary'>
      <Card.Header>Countdown Timer</Card.Header>
      <Card.Body>
        <Card.Title>{timeLeft.length === 0 ? 'Expired' : timeLeft}</Card.Title>
        <Card.Text>
          {showForm ? (
            <Form.Control
              type='datetime-local'
              name='date_of_birth'
              ref={dateTimeRef}
              step='1'
            />
          ) : (
            ''
          )}
        </Card.Text>
        <Button
          type={showForm ? 'submit' : 'button'}
          constiant='outline-success'
          onClick={handleButtonClick}
        >
          {showForm ? 'Submit' : 'Set Timer'}
        </Button>
      </Card.Body>
      <Card.Footer className='text-muted'>
        {timer.length === 0
          ? 'Timer has not set yet'
          : `Timer set for ${timer}`}
      </Card.Footer>
    </Card>
  );
};

export default Countdown;
