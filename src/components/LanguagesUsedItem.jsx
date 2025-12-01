import { ListGroup, Badge } from 'react-bootstrap';

const LanguagesUsedItem = ({ language }) => {
  console.log(language);
  return (
    <ListGroup.Item
      as='li'
      className='d-flex justify-content-between align-items-start'
    >
      <div className='ms-2 me-auto'>{language.name}</div>
      <Badge variant='primary' pill>
        {language.value}%
      </Badge>
    </ListGroup.Item>
  );
};

export default LanguagesUsedItem;
