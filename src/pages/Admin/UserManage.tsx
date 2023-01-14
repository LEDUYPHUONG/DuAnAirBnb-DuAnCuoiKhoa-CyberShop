import React, { ChangeEvent, MouseEvent, useEffect, useRef } from "react";
import ModalAddAdmin from "../../component/Modal/ModalAdmin/ModalAddAdmin";
import ModalInfoAdmin from "../../component/Modal/ModalAdmin/ModalInfoAdmin";
import { useAppDispatch, useAppSelector } from "../../redux/example/hooks";
import {
  AdmintUserModel,
  changeRoleUserToAdmin,
  deleteAccount,
  getArrAdminUserApi,
  setArrAdminUserApi,
  setNumberPage,
} from "../../redux/reducer/adminReducer";
import { useSearchParams } from "react-router-dom";
import { http } from "../../util/setting";

export default function UserManage() {
  const { arrAdminUser, numberPage } = useAppSelector(
    (state) => state.adminReducer
  );
  const dispatch = useAppDispatch();

  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() => {
    dispatch(getArrAdminUserApi(numberPage));
    getAccountByKeyword();
    console.log(arrAdminUser);
    // eslint-disable-next-line
  }, [numberPage, keywordRef.current]);

  const getAccountByKeyword = async () => {
    if (searchParams) {
      let keyword: string | null = searchParams.get("keyword");
      try {
        if (keyword && keyword.trim() !== "") {
          let response = await http.get(`/users/search/${keyword}`);
          console.log(response.data.content);
          dispatch(setArrAdminUserApi(response.data.content));
          // clearTimeout(timeoutRef.current);
        } else {
          dispatch(setNumberPage(numberPage)); //set number page = 1, call 5 account firstly
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    keywordRef.current = event.target.value;
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ keyword: keywordRef.current });
    }, 1000);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // đưa dữ liệu keyword người dùng nhập lên url
    setSearchParams({ keyword: keywordRef.current });
  };

  const handleClickSetUserRole = (item: AdmintUserModel) => {
    const { id } = item;
    const { role } = item;
    let newValueRole: string = "ADMIN";
    if (role === "USER") {
      newValueRole = "ADMIN";
    } else {
      newValueRole = "USER";
    }
    const newInfo = { ...item, role: newValueRole };
    dispatch(changeRoleUserToAdmin(id, newInfo));
  };

  const handleClickDeleteAccount = (item: AdmintUserModel) => {
    const { id } = item;
    dispatch(deleteAccount(id));
  };

  const handelClickBtnPrevSetArrAdminUser = () => {
    if (numberPage === 1) {
      return null;
    } else {
      dispatch(setNumberPage(numberPage - 1));
    }
  };

  const handelClickBtnNextSetArrAdminUser = () => {
    if (arrAdminUser.length === 0) {
      return null;
    } else {
      dispatch(setNumberPage(numberPage + 1));
    }
  };

  const renderAdminUserAccount = () => {
    return arrAdminUser.map((item, index) => {
      return (
        <tr key={index}>
          <td> {item.id} </td>
          <td>{item.name}</td>
          <td>
            <div
              className="shadow rounded-circle overflow-hidden m-auto"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                className="w-100"
                src={
                  item.avatar === ""
                    ? "/img/avatar/existing-user-default-avatar.png"
                    : item.avatar
                }
                alt="..."
              />
            </div>
          </td>
          <td>{item.role}</td>
          <td>
            <ModalInfoAdmin item={item} />
            <button
              className="btn btn-warning mx-1 text-dark"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                let text = "Press a button!\nEither OK or Cancel.";
                if (window.confirm(text) === true) {
                  text = "You pressed OK!";
                  handleClickSetUserRole(item);
                } else {
                  text = "You canceled!";
                }
              }}
            >
              Edit Role
            </button>
            <button
              className="btn btn-danger"
              onClick={(event: MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                let text = "Press a button!\nEither OK or Cancel.";
                if (window.confirm(text) === true) {
                  text = "You pressed OK!";
                  handleClickDeleteAccount(item);
                } else {
                  text = "You canceled!";
                }
              }}
            >
              x
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div
      className="px-5 paddingX1rem-under-576px widthfull-under-991px"
    >
      <ModalAddAdmin />
      <form
        className="pb-3"
        style={{ width: "100%" }}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          className="border-bottom"
          style={{ border: "none", outline: "none", width: "200px" }}
          type="text"
          placeholder="Enter name of account"
          id="keywordRef"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleChange(event);
          }}
        />
        <button type="submit" className="btn btn-primary me-5 ms-2 my-2">
          Find
        </button>
      </form>
      <div className="container table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th style={{minWidth: "50px"}}>ID</th>
              <th style={{minWidth: "150px"}}>Name</th>
              <th style={{minWidth: "50px"}}>Image</th>
              <th style={{minWidth: "100px"}}>Role</th>
              <th style={{minWidth: "250px"}}></th>
            </tr>
          </thead>
          <tbody>{renderAdminUserAccount()}</tbody>
        </table>
      </div>
      <div>
        <div
          className=""
          style={{ position: "fixed", zIndex: 10, bottom: 50, left: "50%", transform: 'translateX(-50%)' }}
        >
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              handelClickBtnPrevSetArrAdminUser();
            }}
          >
            <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
            <span className="d-none-under-991px">prev</span>
          </button>
          <button className="btn btn-primary mx-2"> {numberPage} </button>
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              handelClickBtnNextSetArrAdminUser();
            }}
          >
            <span className="d-none-under-991px">next</span>
            <i className="fa-solid fa-arrow-right ms-2 bg-transparent"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
