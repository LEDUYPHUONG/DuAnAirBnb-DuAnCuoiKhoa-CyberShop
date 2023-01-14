import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { logout } from "../../util/setting";

function HandleClickSignInOrJoin() {
  const navigate = useNavigate();
  return (
    <>
      <Dropdown 
      className="d-inline mx-2"
      >
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <i className="fa-solid fa-globe me-2 bg-transparent"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu
        align="end"
        >
          <Dropdown.Item
            className="text-decoration-none"
            style={{lineHeight: '30px'}}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Item
            className="text-decoration-none"
            style={{lineHeight: '30px'}}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HandleClickSignInOrJoin;
