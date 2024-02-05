import { Stack } from '@mui/material';
import { categories } from '../utility/constant';
import { useGlobalContext } from '../utility/context';

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useGlobalContext();
  return (
    <Stack
      direction={'row'}
      sx={{
        overflowY: 'auto',
        scrollbarWidth: 'none',
        height: '2rem',
        mb: 4,
      }}
    >
      {categories.map((category, index) => {
        const checkSlectedCategory =
          selectedCategory.toLowerCase() === category.toLowerCase();
        return (
          <button
            className='categoryButton'
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              marginRight: '10px',
              padding: '2px 10px',
              fontSize: '16px',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textTransform: 'capitalize',
              backgroundColor: `${checkSlectedCategory ? '#000' : '#fff'} `,
              color: `${checkSlectedCategory ? '#fff' : '#000'} `,
            }}
          >
            {category}
          </button>
        );
      })}
    </Stack>
  );
};
export default Categories;
