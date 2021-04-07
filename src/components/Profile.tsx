import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wdmega.png" alt="Weslley Daniel" />
      <div>
        <strong>Weslley Daniel</strong>
        <p>
          <img src="icons/level.svg" alt="Level UP"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}