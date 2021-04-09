import React from 'react';
import TrackList from '../TrackList/Tracklist';

class PlayList extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList/>
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default PlayList;







