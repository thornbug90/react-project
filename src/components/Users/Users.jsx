import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/users.png';

class Users extends React.Component {
  constructor(props) {
    super(props);
    // запросы на сервер делаются не в конструкторе
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(({ data }) => {
        this.props.setUsers(data.items);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={css.img}
                />
              </div>
              <div>
                {u.isFollow ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
