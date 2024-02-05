import { Stack, Typography } from '@mui/material';
import {
  explore,
  settingsLinks,
  sideBarFooterLinks1,
  sideBarFooterLinks2,
  sidebarDetails,
  sidebarDetails1,
} from '../utility/constant';
import SidebarLink from './SidebarLink';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../utility/context';

const FeedSidebar = () => {
  const { selectedCategory, setSelectedCategory } = useGlobalContext();
  return (
    <Stack
      sx={{
        overflowX: 'auto',
        scrollbarWidth: 'thin',
        background: 'white',
        width: '240px',
        position: 'sticky',
        top: '58px',
        height: `calc(100vh - 58px)  `,
      }}
      px={2}
      py={1}
    >
      {sidebarDetails.map((item, index) => {
        return (
          <SidebarLink
            selected={selectedCategory}
            setSelectedCategory
            {...item}
            key={index}
          />
        );
      })}
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid #606060',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      />
      {sidebarDetails1.map((item, index) => {
        return (
          <SidebarLink selected={selectedCategory} {...item} key={index} />
        );
      })}
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid #606060',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      />
      <Typography>Explore</Typography>
      {explore.map((item, index) => {
        return (
          <SidebarLink
            selected={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            {...item}
            key={index}
          />
        );
      })}
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid #606060',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      />
      {settingsLinks.map((item, index) => {
        return (
          <SidebarLink selected={selectedCategory} {...item} key={index} />
        );
      })}
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid #606060',
          marginBottom: '16px',
          marginTop: '16px',
        }}
      />

      <ul
        style={{
          padding: '5px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {sideBarFooterLinks1.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.href}
              style={{
                textDecoration: 'none',
                marginRight: '10px ',
                textTransform: 'capitalize',
                color: '#606060',
                fontSize: '0.9rem',
              }}
            >
              <Typography variant='body2'>{item.name}</Typography>
            </Link>
          );
        })}
      </ul>
      <ul
        style={{
          padding: '5px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {sideBarFooterLinks2.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.href}
              style={{
                textDecoration: 'none',
                marginRight: '10px',
                textTransform: 'capitalize',
                color: '#606060',
                fontSize: '0.9rem',
              }}
            >
              <Typography variant='body2' sx={{ fontWeight: '400' }}>
                {item.name}
              </Typography>
            </Link>
          );
        })}
      </ul>
      <Typography variant='caption'>
        &copy; {new Date().getFullYear()} shoheb
      </Typography>
    </Stack>
  );
};
export default FeedSidebar;
