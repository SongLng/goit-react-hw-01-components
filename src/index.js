import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user';
import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
  </React.StrictMode>
);
