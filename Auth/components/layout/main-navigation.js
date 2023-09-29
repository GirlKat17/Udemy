import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status} = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/'>
       
          <div className={classes.logo}>Next Auth</div>
        
      </Link>
      <nav>
        <ul>
          {/* when we dont have a session  */}
          {!session && status !== 'loading'  && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {/* only when we have session meaning when we login  */}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
