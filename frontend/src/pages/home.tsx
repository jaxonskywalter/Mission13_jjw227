import styles from '../home.module.css';

// This is the home page of the website. It is the first page that the user sees when they visit the website.
function Home() {
  return (
    <>
      <div className="row">
        <div className="text-center">
          <h1 className={styles.h1}>The Joel Hilton Film Collection</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton" />
        </div>
      </div>
    </>
  );
}

export default Home;
