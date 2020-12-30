import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    rederList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </div>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="ui divided list">{this.rederList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {songs: state.songs};
};

export default connect(mapStateToProps, {selectSong})(SongList);
