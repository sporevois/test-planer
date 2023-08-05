import { useState } from 'react';
import { Search } from 'react-swm-icon-pack';
import { SearchBtn, SearchInput, Form } from './SearchBox.styled';

const SearchBox = ({ value, onSubmit }) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = event => {
    event.preventDefault();

    query.trim() === ''
      ? alert('Please enter something to searh querry')
      : onSubmit(query);
  };

  const handleInput = event => {
    setQuery(event.target.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBtn type="submit">
        <Search color="rgba(123, 97, 255, 1)" />
      </SearchBtn>
      <SearchInput
        type="text"
        autoComplete="off"
        placeholder="Search by keywords"
        name="query"
        value={query}
        onInput={handleInput}
      />
    </Form>
  );
};

export default SearchBox;
