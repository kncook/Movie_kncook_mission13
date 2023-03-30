import React from 'react';

function Podcast(props: any) {
  return (
    //can only return one thing and when you put it in a div is in only 1 thing
    //these React.Fragments can also be empty on the inside <> </> and it means the same thing
    <React.Fragment>
      <div className="row">
        <h2 style={{ fontFamily: 'fantasy' }}>
          Joel Hilton's Favorite Podcast!
        </h2>
        <a href="https://baconsale.com" className="btn btn-primary mb-2">
          Let's go to Baconsale!
        </a>
      </div>
    </React.Fragment>
  );
}

export default Podcast;
