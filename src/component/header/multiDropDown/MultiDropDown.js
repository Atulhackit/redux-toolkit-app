import "./MultiDropDown.scss";
import { Link } from "react-router-dom";
// import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const MultiDropDown = ({ subMenu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e, subMenu) => {
    if (subMenu) {
      setOpen(!open);
      e.stopPropagation();
      e.preventDefault();
    }
  };
  return (
    <ul className={"dropdownMenu"}>
      {subMenu?.map((item, index) => {
        return (
          <div key={index}>
            <li
              onClick={(e) => handleOpen(e, item?.isSubMenu)}
              className={item?.isSubMenu ? "dropdownSubMenu" : ""}
            >
              <Link to={item?.to}>{item?.name}</Link>
              {item?.isSubMenu && (
                <>
                  {/* <AiFillCaretDown /> */}
                  {open && <MultiDropDown subMenu={item?.subMenu} />}
                </>
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default MultiDropDown;
