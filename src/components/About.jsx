import { useEffect, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import LanguagesUsedItem from './LanguagesUsedItem';

const About = () => {
  const [languages, setLanguages] = useState([]);

  const getLanguages = (jsonData) => {
    let total = 0;
    for (let key in jsonData) {
      total += jsonData[key];
    }
    let languages = [];
    for (let key in jsonData) {
      languages.push({
        name: key,
        value: Math.round((jsonData[key] * 100) / total),
      });
    }
    return languages;
  };

  useEffect(() => {
    const fetchLanguageData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/ShanuDey/blog-app/languages'
        );
        const jsonData = await response.json();
        // console.log(getLanguages(jsonData));
        setLanguages(getLanguages(jsonData));
      } catch (err) {
        alert('Unable to fetch data\nPlease try again !!');
        console.log(err);
      }
    };
    fetchLanguageData();
  }, []);

  const handleSourceCodeBtn = () => {
    const newWindow = window.open(
      'https://github.com/ShanuDey/blog-app',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card className='text-center'>
      <Card.Header>About</Card.Header>
      <Card.Body>
        <Card.Title>Languages Used</Card.Title>
        <Card.Text>
          <ListGroup as='ol' numbered>
            {languages.map((language) => (
              <LanguagesUsedItem language={language} />
            ))}
          </ListGroup>
        </Card.Text>
        <Button variant='outline-secondary' onClick={handleSourceCodeBtn}>
          Source Code
        </Button>
      </Card.Body>
      <Card.Footer className='text-muted'>created by Shanu Dey</Card.Footer>
    </Card>
  );
};

export default About;
