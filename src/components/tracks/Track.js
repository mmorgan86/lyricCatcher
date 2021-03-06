import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  console.log(track);
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play text-success"></i> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc text-secondary"></i> Album
            </strong>
            : {track.album_name}
            <br />
            <strong>
              <i className="fas fa-heart text-danger mr-2"></i>
            </strong>
            {track.num_favourite}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right mr-2"></i>View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
