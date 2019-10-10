import * as React from 'react';
import { User } from 'shared/UserTypes';
import { getUser, createNewUser } from './Users';

export interface IUserProp {
  user: User;
}

export function WithUser<T>(
  Component: React.ComponentType<T & IUserProp>
): React.ComponentType<T> {
  const Bound: React.FunctionComponent<T> = props => {
    const [user, setUser] = React.useState<User | null>(null);
    React.useEffect(() => {
      getUser().then(user => {
        if (user) {
          console.log('user: ' + user);
          setUser(user);
        } else {
          console.log('creating user');
          createNewUser().then(() => {
            getUser().then(setUser);
          });
        }
      });
    }, []);
    if (user) {
      return <Component {...props} user={user} />;
    } else {
      return null;
    }
  };
  return Bound;
}
