import { useEffect, useRef, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [timer, setTimer] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const dateTimeRef = useRef('');

  const getNow = (offSetMin = 0) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    let yyyy = now.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    now.setMinutes(now.getMinutes() + offSetMin);
    let time = now.toLocaleTimeString('en-US', { hour12: false });
    return `${yyyy}-${mm}-${dd}T${time}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInterval(intervalID);
    // console.log(dateTimeRef.current.value);
    setTimer(dateTimeRef.current.value);
  };

  const handleButtonClick = (e) => {
    if (showForm) handleSubmit(e);
    setShowForm(!showForm);
    // console.log(getNow());
  };

  useEffect(() => {
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
          alert('🎉🎉 Congratulation 🎉🎉');
        } else {
          setTimeLeft(
            `${days} Day ${hours} Hour ${minutes} Min ${seconds} Sec`
          );
        }
      }, 1000);
      setIntervalID(countdownIntervalId);
    }
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
              defaultValue={getNow(45)}
              min={getNow()}
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
          : `Timer set for ${new Date(timer).toLocaleString('en-US')}`}
      </Card.Footer>
    </Card>
  );
};

export default Countdown;
