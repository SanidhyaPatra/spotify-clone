import React from 'react'
import './PlayerPlaylist.css'

const playlist = [
  {
    id: 1,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 3,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 4,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 5,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 6,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 7,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
  {
    id: 8,
    title: 'Sugar',
    artist: 'Maroon 5',
    album: 'V',
    duration: '3:45',
  },
]

export default function PlayerPlaylist() {
  return (
    <div className='player-playlist-container'>
      <div className='player-playlist-header'>
        <div className='playlist-image-card'>

        </div>
        <div className='playlist-body'>
          <p>PLAYLIST</p>
          <h1>The Duke</h1>
        </div>
      </div>

      <div className='playlist-list'>
        <div className='playlist-list-id'>
          #
        </div>
        <div className='playlist-list-title'>
          TITLE
        </div>
        <div className='playlist-list-album'>
          ALBUM
        </div>
        <div className='playlist-list-duration'>
          DURATION
        </div>
      </div>

      <div className='playlist-list-container'>
        {
          playlist.map(item => {
            return(
              <div className='playlist-list'>
                <div className='playlist-list-id'>
                  {item.id}
                </div>
                <div className='playlist-list-title'>
                  {item.title}
                </div>
                <div className='playlist-list-album'>
                  {item.album}
                </div>
                <div className='playlist-list-duration'>
                  {item.duration}
                </div>
            </div>
            )
            
          })
        }
      </div>
    </div>
  )
}
