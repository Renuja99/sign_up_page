import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./index.module.css";

const Desktop1: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
        <input className={styles.frameChild} type="text" autoFocus />
        <input className={styles.frameItem} type="text" autoFocus />
        <input className={styles.frameInner} type="text" autoFocus />
        <input className={styles.rectangleInput} type="text" autoFocus />
        <input className={styles.frameChild1} type="text" autoFocus />
        <input className={styles.frameChild2} type="text" autoFocus />
        <input className={styles.frameChild3} type="text" autoFocus />
        <div className={styles.rectangleDiv} />
        <input className={styles.frameChild4} type="text" autoFocus />
        <input className={styles.frameChild5} type="text" autoFocus />
        <div className={styles.fanRegistrationWrapper}>
          <b className={styles.fanRegistration}>Fan Registration</b>
        </div>
        <button className={styles.signUpButton} data-animate-on-scroll>
          <b className={styles.signMeUp}>{`Sign me up ! `}</b>
        </button>
        <div className={styles.transformYourLife}>
          Transform Your Life: Sign Up for Online Coaching Today!
        </div>
        <b className={styles.alreadyHaveAnContainer}>
          <span>{`Already have an account? `}</span>
          <span className={styles.logIn}>Log in</span>
        </b>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.firstName}>First name</b>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.email}>Email</b>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <b className={styles.displayName}>Display name</b>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupInner} />
          <b className={styles.username}>Username</b>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild2} />
          <b className={styles.password}>Password</b>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild3} />
          <b className={styles.password}>Gender</b>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild4} />
          <b className={styles.country}>Country</b>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.groupChild5} />
          <b className={styles.confirmPassword}>Confirm Password</b>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild6} />
          <b className={styles.lastName}>Last name</b>
        </div>
        <div className={styles.frameChild6} />
        <div className={styles.iAgreeToContainer}>
          <span>{`I agree to the `}</span>
          <span className={styles.logIn}>Terms of Service</span>
          <span>{` and `}</span>
          <span className={styles.logIn}>Privacy Notice</span>
        </div>
        <img
          className={styles.outlinebrandsinstagramIcon}
          alt=""
          src="/outlinebrandsinstagram.svg"
        />
        <img
          className={styles.outlinebrandstwitterIcon}
          alt=""
          src="/outlinebrandstwitter.svg"
        />
        <img
          className={styles.outlinebrandsgoogleIcon}
          alt=""
          src="/outlinebrandsgoogle.svg"
        />
      </div>
    </div>
  );
};

export default Desktop1;
