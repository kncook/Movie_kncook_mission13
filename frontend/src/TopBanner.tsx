import React from 'react';
//importing css
import styles from './firstPage.module.css';

//can also put inside { saying }: any and then when calling it in h1 tag just put {saying}
//you can also put (props: any) and then at then end in h1 tag after {styles.h1}> put {props.saying}
function TopBanner() {
  return (
    //can only return one thing and when you put it in a div is in only 1 thing
    //these React.Fragments can also be empty on the inside <> </> and it means the same thing
    <React.Fragment>
      <div className="row">
        <div className="col-2">
          <img src="./joelHilton.jpg" alt="joelHilton" width="150" />
          {/* <img src="./logo192.png" alt="companyLogo" /> */}
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Hilton's Movie Site</h1>
        </div>
        <div>
          <h2>
            This website is an accumulation of the famous Joel Hilton's movie
            collection and podcasts. He is pictured here (in his much younger
            days).
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
