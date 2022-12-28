import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { isVerification } from "../../index";
import { logout } from "../../util/setting";

function HandleClickSignInOrJoin() {
  const navigate = useNavigate();
  return (
    <>
      <Dropdown className="d-inline">
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className="bg-white border-0 d-flex p-0"
        >
          <div className="dropdown d-flex justify-content-between align-items-center">
            <div
              className="btn-singin-singout btn dropdown-toggle rounded-pill d-flex justify-content-between align-items-center"
              style={{
                border: "1px solid rgba(204, 204, 204, 0.5)",
                outline: "none",
              }}
            >
              <span className="d-flex justify-content-between align-items-center">
                <i className="hidden-under-576px fa-solid fa-bars pe-3 text-dark"></i>
                <i
                  className="fa-solid fa-circle-user text-dark"
                  style={{
                    width: 30,
                    height: 30,
                    lineHeight: "30px",
                    fontSize: 30,
                  }}
                ></i>
              </span>
            </div>
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            className={isVerification()? 'd-none' : "text-decoration-none"}
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </Dropdown.Item>
          <Dropdown.Item
            className={isVerification()? 'd-none' : "text-decoration-none"}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Join
          </Dropdown.Item>
          <Dropdown.Item
            className={isVerification()? "text-decoration-none" : 'd-none'}
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Item
            className={isVerification()? "text-decoration-none" : 'd-none'}
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
