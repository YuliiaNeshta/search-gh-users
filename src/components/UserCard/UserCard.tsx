import { FC } from 'react';
import styles from './UserCard.module.scss';
import { UserCardProps } from './types.ts';

const UserCard: FC<UserCardProps> = ({ name, bio, src, link }) => {
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={src} alt={name} />
      <div className={styles.cardContent}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.bio}>{bio}</p>
        <a className={styles.link} href={link} target="_blank">
          Account Link
        </a>
      </div>
    </div>
  );
};

export default UserCard;
