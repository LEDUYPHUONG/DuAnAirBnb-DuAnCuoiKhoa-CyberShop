import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function HandleClickSignInOrJoin() {
  const navigate = useNavigate()
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true" className='bg-white border-0 d-flex p-0'>
        <div className="dropdown d-flex justify-content-between align-items-center">
                <button
                  className="btn-singin-singout btn dropdown-toggle rounded-pill d-flex justify-content-between align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{border: "1px solid rgba(204, 204, 204, 0.5)", outline:"none"}}
                >
                    <span className="d-flex justify-content-between align-items-center">
                      <i className="fa-solid fa-bars pe-3 text-dark"></i>
                      <i className="fa-solid fa-circle-user text-dark" style={{width:30, height:30,lineHeight:"30px", fontSize:30}} ></i>
                    </span>
                </button>
              </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item className='text-decoration-none' onClick={() =>{
              navigate('/signin')
            }}>Sign In</Dropdown.Item>
            <Dropdown.Item className='text-decoration-none' onClick={() =>{
              navigate('/signup')
            }}>Join</Dropdown.Item>
            <Dropdown.Item className='text-decoration-none' onClick={() =>{
              navigate('/profile')
            }}>Profile</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HandleClickSignInOrJoin;