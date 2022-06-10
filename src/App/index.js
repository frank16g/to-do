import React from 'react';
import './App.css';
import { AvatarCounter } from '../AvatarCounter';
import { AvatarList } from '../AvatarList';
import { AvatarSearch } from '../AvatarSearch';
import { AvatarItem } from '../AvatarItem';
import { CreateAvatarButton } from '../CreateAvatarButton';
import deafultAvatars from '../assets/img/avatar/avatars';


function App() {
  const [avatars, setAvatars] = React.useState(deafultAvatars);
  const[searchValue, setSearchValue] = React.useState('');
  const selectedAvatars = avatars.filter(avatar => !!avatar.selected).length;
  const totalAvatars = avatars.length;
  let searchedAvatars = [];

  if(!searchValue.length >= 1){
    searchedAvatars = avatars;
  } else {
    searchedAvatars = avatars.filter(avatar => {
      const avatarText = avatar.img.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return avatarText.includes(searchText);
    });
    
  }

  const selectAvatar = (img) => {
    const avatarIndex = avatars.findIndex(avatar => avatar.img === img);
    const newAvatars = [...avatars];
    newAvatars[avatarIndex].selected = true;
    setAvatars(newAvatars);
  };

  const deleteAvatar = (img) => {
    const avatarIndex = avatars.findIndex(avatar => avatar.img === img);
    const newAvatars = [...avatars];
    newAvatars.splice(avatarIndex, 1);
    setAvatars(newAvatars);
  };

  return (
    <React.Fragment>
      <AvatarCounter 
        total = {totalAvatars}
        selected = {selectedAvatars}
      />
      <AvatarSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <AvatarList>
        {searchedAvatars.map(avatar => (
          <AvatarItem 
          key={avatar.img} 
          path={avatar.img}
          selected={avatar.selected}
          onSelect = {()=> selectAvatar(avatar.img)}
          onDelete = {()=> deleteAvatar(avatar.img)}
          />
        ))}
        
      </AvatarList>
    <CreateAvatarButton />
    </React.Fragment>
  );
}

export default App;
