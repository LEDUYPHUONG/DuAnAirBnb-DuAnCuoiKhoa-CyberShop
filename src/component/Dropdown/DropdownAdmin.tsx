import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function HandleClickSignInOrJoin() {
  const navigate = useNavigate()
  return (
    <>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <i className="fa-solid fa-globe me-2"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item className='text-decoration-none' onClick={() =>{
              navigate('/signup')
            }}>Sign In</Dropdown.Item>
            <Dropdown.Item className='text-decoration-none' onClick={() =>{
              navigate('/signin')
            }}>Join</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HandleClickSignInOrJoin;