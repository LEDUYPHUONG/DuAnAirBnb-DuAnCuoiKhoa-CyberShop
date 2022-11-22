import React, {MouseEvent, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/example/hooks'
import { AdmintUserModel, changeRoleUserToAdmin, deleteAccount, getArrAdminUserApi, setNumberPage } from '../../redux/reducer/adminReducer'
import ModalAddAdmin from '../Modal/ModalAdmin/ModalAddAdmin'
import ModalInfoAdmin from '../Modal/ModalAdmin/ModalInfoAdmin'

export default function UserManage() {
    const { arrAdminUser, numberPage } = useAppSelector((state) => state.adminReducer)
    const dispatch = useAppDispatch()
    useEffect(() =>{
        dispatch(getArrAdminUserApi(numberPage))
        console.log(arrAdminUser);
        // eslint-disable-next-line
    },[numberPage]);
    const handleClickSetUserRole = (item : AdmintUserModel) => {
        const {id} = item
        const  {role} = item
        let newValueRole :string = 'ADMIN'
        if (role === 'USER') {
            newValueRole = 'ADMIN'
        } else{
            newValueRole = 'USER'
        }
        const newInfo = {...item, role: newValueRole}
        dispatch(changeRoleUserToAdmin(id, newInfo))
    }

    const handleClickDeleteAccount = (item : AdmintUserModel) => {
        const {id} = item
        dispatch(deleteAccount(id))
    }

    const handleClickShowInfo = (item : AdmintUserModel) => {
        const {id} = item
        dispatch(deleteAccount(id))
    }
    const handelClickBtnPrevSetArrAdminUser = () => {
        if(numberPage === 1){
            return null
        } else {
            dispatch(setNumberPage(numberPage - 1))
        }
    }

    const handelClickBtnNextSetArrAdminUser = () => {
        if(arrAdminUser.length === 0){
            return null
        } else {
            dispatch(setNumberPage(numberPage + 1))
        }
    }

    const renderAdminUserAccount = () => {
        return arrAdminUser.map((item,index) =>{
            return <tr key={index}>
                        <td> {item.id} </td>
                        <td>{item.name}</td>
                        <td>
                            <img style={{width:'50px', height:'50px'}} src={item.avatar} alt="..." />
                        </td>
                        <td>{item.phone}</td>
                        <td>{item.gender? 'Nam' : 'Nữ'}</td>
                        <td>{item.role}</td>
                        <td>
                            <ModalInfoAdmin item={item}/>
                            <button className='btn btn-warning mx-3 text-dark' onClick={(event :MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                handleClickSetUserRole(item)
                            }}>Sửa</button>
                            <button className='btn btn-danger'  onClick={(event :MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                handleClickDeleteAccount(item)
                            }}>x</button>
                        </td>
                    </tr>
            
        })
    }
  return <div className='border-start px-5' style={{height: 'calc(100vh - 50px)'}}>
                    <ModalAddAdmin />
                    <div className='pb-3' style={{width:'100%'}}>
                        <input className='border-bottom' style={{border:'none', outline:'none', width:'400px'}} type="text" placeholder='Enter account or username'/>
                        <button type="button" className="btn btn-primary me-5 ms-2"> Find</button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='w-100'>
                            {renderAdminUserAccount()}
                            
                        </tbody>
                    </table>
                    <div>
                        <div className='' style={{position:'fixed', zIndex:10, bottom:50, right:50}}>
                            <button className='btn btn-primary mx-2'  onClick={() => {
                                handelClickBtnPrevSetArrAdminUser()
                            }}>
                                <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
                                prev
                            </button>
                            <button className='btn btn-primary mx-2'> {numberPage} </button>
                            <button className='btn btn-primary mx-2' onClick={() => {
                                handelClickBtnNextSetArrAdminUser()
                            }}>
                                
                                next
                                <i className="fa-solid fa-arrow-right ms-2 bg-transparent" ></i>
                            </button>
                        </div>
                    </div>
                </div>
}