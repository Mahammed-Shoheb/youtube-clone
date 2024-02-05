import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ChannelPage,
  HomeLayout,
  FeedPage,
  SearchPage,
  VideoPage,
  NotfoundPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotfoundPage />,

    children: [
      {
        index: true,
        element: <FeedPage />,
      },
      {
        path: ':channelId',
        element: <ChannelPage />,
      },
      {
        path: 'results',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: 'watch',
    element: <VideoPage />,
    errorElement: <NotfoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
