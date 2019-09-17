import React from 'react';
import Featured  from '../Home/Featured'
import Matches from '../Home/matches'
import MeetPlayers from '../Home/meetPlayers'

const Home = () => {
  return (
    <div className='bck_blue'>
      <Featured/>
      <Matches/>      
      <MeetPlayers/>
    </div>
  );
};

export default Home;