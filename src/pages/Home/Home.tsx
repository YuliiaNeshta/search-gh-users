import axios from 'axios';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import LoadingDots from '../../components/LoadingDots';
import styles from './Home.module.scss';
import UserCard from '../../components/UserCard';

interface User {
  id: number;
  login: string;
  bio: string;
  html_url: string;
  avatar_url: string;
}

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    const currentSearchValue = searchValue;
    setIsLoading(true);
    setUsers([]);
    setErrorText('');
    axios(`https://api.github.com/search/users?q=${currentSearchValue}`)
      .then(response => {
        console.log(response);
        setUsers(response.data.items);
      })
      .catch(error => {
        console.log(error);
        setErrorText('An error occurred while fetching data.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="content">
      <h1 className={styles.heading}>Search for a GitHub user</h1>
      <div className="flex-center">
        <Input placeholder="Write username..." value={searchValue} onKeyDown={handleKeyDown} onChange={onInputChange} />
        <Button onClick={onSearch}>Search</Button>
      </div>
      <div className={styles.result}>
        {isLoading ? (
          <LoadingDots />
        ) : errorText ? (
          <p className={styles.error}>{errorText}</p>
        ) : users.length > 0 ? (
          users.map(user => (
            <UserCard key={user.id} name={user.login} bio={user.bio} link={user.html_url} src={user.avatar_url} />
          ))
        ) : (
          <p className={styles.noResult}>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
