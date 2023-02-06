import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeFilter} />
    </Label>
  );
};

export default Filter;
