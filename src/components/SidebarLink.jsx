import { Link, useNavigate } from 'react-router-dom';

const SidebarLink = ({ selected, name, href, icon, setSelectedCategory }) => {
  const navigate = useNavigate();
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <button
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: 10,
          textTransform: 'capitalize',
          cursor: 'pointer',
          backgroundColor: `${
            selected === name || (name === 'home' && selected === 'all')
              ? '#eee'
              : 'white'
          }`,
        }}
        onClick={() => {
          setSelectedCategory(name);
          navigate('/');
        }}
      >
        <span
          style={{
            display: 'grid',
            placeItems: 'center',
            marginRight: '24px',
          }}
        >
          {icon}
        </span>{' '}
        <span style={{ width: '100%', textAlign: 'start', fontSize: '12px' }}>
          {name}
        </span>
      </button>
    </Link>
  );
};
export default SidebarLink;
