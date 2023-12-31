import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

// const Sidebar = (props) => {
//   const { id, name, image } = props;

//   return (
//     <div className={css.name} id={id}>
//       <img src={image} />
//       <span className={css.caption}>{name}</span>
//     </div>
//   );
// };

const Navbar = () => {
  // const state = store.getState().sidebarFriends;

  // const friendsElements = state.friends.map(({ id, name, img }) => (
  //   <Sidebar id={id} name={name} image={img} />
  // ));

  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Users
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          News
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? css.active : css.item)}
        >
          Settings
        </NavLink>
      </div>
      {/* <div className={css.friends}>
        <h3 className={css.head}>Friends</h3>
        {friendsElements}
      </div> */}
    </nav>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     friendsElement: state.sidebarFriends.friends,
//   };
// };

// const mapStateToDispatch = (dispatch) => {
//   return {

//   };
// };

// // connect возвращает новую контейнерную компоненту
// const NavbarContainer = connect(mapStateToProps, mapStateToDispatch)(Navbar);

export default Navbar;
