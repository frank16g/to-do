import React from 'react';
import './App.css';
import { AvatarCounter } from './AvatarCounter';
import { AvatarList } from './AvatarList';
import { AvatarSearch } from './AvatarSearch';
import { AvatarItem } from './AvatarItem';
import { CreateAvatarButton } from './CreateAvatarButton';
import avatars from './assets/img/avatar/avatars';


function App() {
  return (
    <React.Fragment>
      <AvatarCounter />
      <AvatarSearch />
      <AvatarList>
        {avatars.map(avatar => (
          <AvatarItem key={avatar.img} path={avatar.img}/>
        ))}
        
      </AvatarList>
    <CreateAvatarButton />
    </React.Fragment>
  );
}

export default App;
