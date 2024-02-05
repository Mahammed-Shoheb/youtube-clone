import { Paper, IconButton, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utility/context';

const SearchBar = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const naviagte = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== '') naviagte(`/results?search_query=${searchTerm}`);
  };
  return (
    <Paper
      component='form'
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        width: '90%',
      }}
      onSubmit={handleSubmit}
    >
      <Stack
        direction={'row'}
        sx={{
          width: '90%',
          border: `1px solid ${showSearchIcon ? 'blue' : 'gray'}`,
          borderRadius: 20,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          marginLeft: `${showSearchIcon ? '1rem' : '2rem'}`,
          paddingLeft: `${showSearchIcon ? '0' : '1.5rem'}`,
        }}
      >
        <div
          style={{
            display: `${showSearchIcon ? 'flex' : 'none'}`,
            alignItems: 'center',
            borderRadius: 20,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            padding: '0.5rem',
          }}
        >
          <SearchIcon />
        </div>

        <input
          type='search'
          name='searchTerm'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search'
          onFocus={() => setShowSearchIcon(true)}
          onBlur={() => setShowSearchIcon(false)}
          style={{
            width: '100%',
            lineHeight: '24px',
            padding: '8px 12px',
            paddingLeft: `${showSearchIcon ? '0' : '0'}`,
            fontSize: '16px',
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        />
      </Stack>
      <IconButton
        type='submit'
        sx={{
          p: 1,
          width: '10%',
          background: '#eeeeee',
          border: '1px solid gray',
          borderLeft: ' none',
          borderRadius: 20,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
