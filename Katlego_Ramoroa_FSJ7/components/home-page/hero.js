import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Katlego.jpg'
          alt='Katlego'
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, My name is Katlego Ramoroa</h1>
      <p>
        I am going to blog about Javascript- especially frontend frameworks like
        React and looking that the benefits of Nextjs for large apps. We will also going to touch on Database that a cloud base like Snowflake and MongoDd.

        Hope you enjoy 
      </p>
    </section>
  );
}

export default Hero;
