import React from 'react'
import './Sidebar.css'

import { ReactComponent as HomeIcon } from '../assets/HomeIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg';
import { ReactComponent as LibraryIcon } from '../assets/LibraryIcon.svg';

const myPlaylist = [
  {
    id: 1,
    name: 'The Duke',
  },
  {
    id: 2,
    name: 'The Duchess',
  },
  {
    id: 3,
    name: 'Peace',
  },
  {
    id: 4,
    name: 'Take me to sleep',
  },
  {
    id: 5,
    name: 'Bolly Magic',
  },
  {
    id: 6,
    name: 'Tranquil',
  },
  {
    id: 7,
    name: 'My Favs',
  }
]

export default function Sidebar() {
  return (
    <div className='side-bar-container'>
      <div className='side-bar-items'>
        <HomeIcon width={'18px'} strokewidth = {'2px'}/> Home
      </div>

      <div className='side-bar-items'>
        <SearchIcon width={'18px'} strokewidth = {'2px'}/> Search
      </div>

      <div className='side-bar-items'>
        <LibraryIcon width={'18px'} strokewidth = {'2px'}/> Library
      </div>

      <div className='side-options'>
        {
          myPlaylist.map(item => {
            return (
              <div className='side-bar-items' key={item.id}>
                {item.name}
              </div>
            )
          }) 
           
          
        }

      </div>
    </div>
  )
}
