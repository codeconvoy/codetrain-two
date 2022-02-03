import Logo from '../components/Logo';
import Header from '../components/Header';

import { getAuth, signOut } from 'firebase/auth';
import signIn from '../util/signIn';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  const auth = getAuth();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.page}>
        <div className={styles.center}>
          <div className={styles.title}>
            <Logo />
            <h1>Codetrain</h1>
          </div>
          {
            auth.currentUser ?
            <button
              className="textbutton"
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button> :
            <button
              className="textbutton"
              onClick={signIn}
            >
              Sign In
            </button>
          }
        </div>
      </div>
    </div>
  );
}
