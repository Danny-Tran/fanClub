import React from 'react';
import Featured  from '../Home/Featured'
import Matches from '../Home/matches'
import MeetPlayers from '../Home/meetPlayers'
import Promotion from './promotion';

const Home = () => {
  return (
    <div className='bck_blue'>
      <Featured/>
      <Matches/>      
      <MeetPlayers/>
      <Promotion/>
    </div>
  );
};

export default Home;