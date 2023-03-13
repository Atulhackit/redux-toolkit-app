import { Fragment, useState, useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MultiDropDown from "./multiDropDown/MultiDropDown";
// import { AiFillCaretDown } from "react-icons/ai";
import menuList from "./menuList.json";
// menuList
const links = menuList;
const MenuList = () => {
  console.log(menuList);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  const handleClick = (e, subMenu) => {
    if (subMenu) {
      setIsMenuOpen(!isMenuOpen);
      e.stopPropagation();
      e.preventDefault();
    }
  };
  //   useEffect(() => {
  //     const checkIfClickedOutside = (e) => {
  //       if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
  //         setIsMenuOpen(false);
  //       }
  //     };
  //     document.addEventListener("click", checkIfClickedOutside);
  //     return () => {
  //       document.removeEventListener("click", checkIfClickedOutside);
  //     };
  //   }, [isMenuOpen]);
  //   const location = useLocation();
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const handleLogout = () => {
  //     sessionStorage.removeItem("loggedIn");
  //     sessionStorage.clear();
  //     // dispatch({ type: "REDUX_STORE_RESET" });
  //     // dispatch(loginActions.setLoginState(false));
  //     // navigate("/login", { replace: true });
  //   };
  //   const handleProfile = () => {
  //     navigate("/profile");
  //   };

  return (
    <Fragment>
      <ul ref={ref} className={"NavLinkList"}>
        {links?.map((item, i) => {
          return (
            <li
              onClick={(e) => {
                {
                  handleClick(e, item?.isSubMenu);
                }
              }}
              className={item?.isSubMenu ? "dropdownSubmenu" : ""}
              key={i}
            >
              <p
                // className={
                //   location.pathname === item?.pathname
                //     ? "ActiveLink NavLinkListItem"
                //     : "NavLinkListItem"
                // }
                className="ActiveLink NavLinkListItem"
                // to={item?.to}
              >
                {item?.name}
              </p>
              {item?.isSubMenu && (
                <>
                  {/* <AiFillCaretDown /> */}
                  {isMenuOpen && <MultiDropDown subMenu={item?.subMenu} />}
                </>
              )}
            </li>
          );
        })}
      </ul>
      {/* <div className={"NavLinkListItem logout"} onClick={handleProfile}>
        Profile
      </div>
      <div className={"NavLinkListItem logout"} onClick={handleLogout}>
        Logout
      </div> */}
    </Fragment>
  );
};

export default MenuList;
