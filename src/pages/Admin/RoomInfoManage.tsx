import React, { MouseEvent, useEffect} from 'react'
import ModalAddRoom from '../../component/Modal/ModalAdmin/ModalAddRoom'
import ModalEditRoom from '../../component/Modal/ModalAdmin/ModalEditRoom'
import ModalInfoRoom from '../../component/Modal/ModalAdmin/ModalInfoRoom'
import { useAppDispatch, useAppSelector } from '../../redux/example/hooks'
import { deleteRoomAdminApi, getRoomInfoAdminApi, setNumberPageRoomInfoAdmin } from '../../redux/reducer/adminRoomInfoManageReducer'

export default function RoomInfoManage() {
  const { arrRoomInfoAdmin, numberPageRoomInfoAdmin } = useAppSelector((state) => state.adminRoomInfoManageReducer)
  const dispatch = useAppDispatch()

  useEffect(() =>{
      dispatch(getRoomInfoAdminApi(numberPageRoomInfoAdmin))
      // eslint-disable-next-line
  },[numberPageRoomInfoAdmin]);
  
  const handelClickBtnPrevSetArrRoomInfoAdmin = () => {
      if(numberPageRoomInfoAdmin === 1){
          return null
      } else {
            dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin - 1))
      }
  }

  const handelClickBtnNextSetArrRoomInfoAdmin = () => {
      if(arrRoomInfoAdmin.length === 0){
          return null
      } else {
            dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin + 1))
      }
  }

  const renderRoomInfo = () => {
      return arrRoomInfoAdmin.map((item,index) =>{
          return <tr key={index}>
                      <td> {item.id} </td>
                      <td>{item.tenPhong}</td>
                      <td>{item.khach}</td>
                      <td>{item.phongNgu}</td>
                      <td>{item.giuong}</td>
                      <td>
                            <ModalInfoRoom item={item}/>
                            <ModalEditRoom item={item}/>
                            <button className='btn btn-danger'  onClick={(event :MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                let text = "Press a button!\nEither OK or Cancel.";
                                if (window.confirm(text) == true) {
                                  text = "You pressed OK!";
                                  dispatch(deleteRoomAdminApi(item.id))
                                } else {
                                  text = "You canceled!";
                                }
                            }}>x</button>
                      </td>
                  </tr>
          
      })
  }
return (
                <div className='border-start px-5' style={{height: 'calc(100vh - 50px)'}}>
                  <ModalAddRoom />
                  <form className='pb-3' style={{width:'100%'}}>
                      <input 
                      className='border-bottom' 
                      style={{border:'none', outline:'none', width:'400px'}} 
                      type="text" 
                      placeholder='Enter account or username' 
                      id="keywordRef" 
                      />
                      <button type="submit" className="btn btn-primary me-5 ms-2"> Find</button>
                  </form>
                  <table className="table">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Tên phòng</th>
                              <th>Khách</th>
                              <th>Phòng ngủ</th>
                              <th>Giường</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody className='w-100'>
                          {renderRoomInfo()}
                          
                      </tbody>
                  </table>
                  <div>
                      <div className='' style={{position:'fixed', zIndex:10, bottom:50, right:50}}>
                          <button className='btn btn-primary mx-2'  onClick={() => {
                              handelClickBtnPrevSetArrRoomInfoAdmin()
                          }}>
                              <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
                              prev
                          </button>
                          <button className='btn btn-primary mx-2'> {numberPageRoomInfoAdmin} </button>
                          <button className='btn btn-primary mx-2' onClick={() => {
                              handelClickBtnNextSetArrRoomInfoAdmin()
                          }}>
                              
                              next
                              <i className="fa-solid fa-arrow-right ms-2 bg-transparent" ></i>
                          </button>
                      </div>
                  </div>
                </div>
)
}