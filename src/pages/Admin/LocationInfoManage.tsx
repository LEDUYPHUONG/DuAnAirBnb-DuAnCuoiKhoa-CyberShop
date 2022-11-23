import React, { MouseEvent, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/example/hooks'
import ModalAddLocation from '../../component/Modal/ModalAdmin/ModalAddLocation'
import { getLocationAdminApi, setNumberPageAdmin } from '../../redux/reducer/adminLocationReducer'

export default function LocationInfoManage() {
  const { arrLocationAdmin, numberPageAdmin } = useAppSelector((state) => state.adminLocationReducer)
  const dispatch = useAppDispatch()

  useEffect(() =>{
      dispatch(getLocationAdminApi(numberPageAdmin))
      console.log(arrLocationAdmin);
      // eslint-disable-next-line
  },[numberPageAdmin]);
  
  const handelClickBtnPrevSetArrLocationAdmin = () => {
      if(numberPageAdmin === 1){
          return null
      } else {
          dispatch(setNumberPageAdmin(numberPageAdmin - 1))
      }
  }

  const handelClickBtnNextSetArrLocationAdmin = () => {
      if(arrLocationAdmin.length === 0){
          return null
      } else {
          dispatch(setNumberPageAdmin(numberPageAdmin + 1))
      }
  }

  const renderLocation = () => {
      return arrLocationAdmin.map((item,index) =>{
          return <tr key={index}>
                      <td> {item.id} </td>
                      <td>{item.tenViTri}</td>
                      <td>{item.tinhThanh}</td>
                      <td>{item.quocGia}</td>
                      <td>
                          <img style={{width:'50px', height:'50px'}} src={item.hinhAnh} alt="..." />
                      </td>
                      <td>
                          <button className='btn btn-warning mx-3 text-dark' onClick={(event :MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                          }}>Sửa</button>
                          <button className='btn btn-danger'  onClick={(event :MouseEvent<HTMLButtonElement>) => {
                              event.preventDefault();
                          }}>x</button>
                      </td>
                  </tr>
          
      })
  }
return <div className='border-start px-5' style={{height: 'calc(100vh - 50px)'}}>
                  <ModalAddLocation />
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
                              <th>Tên Vị trí</th>
                              <th>Tỉnh Thành</th>
                              <th>Quốc Gia</th>
                              <th>Hình ảnh</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody className='w-100'>
                          {renderLocation()}
                          
                      </tbody>
                  </table>
                  <div>
                      <div className='' style={{position:'fixed', zIndex:10, bottom:50, right:50}}>
                          <button className='btn btn-primary mx-2'  onClick={() => {
                              handelClickBtnPrevSetArrLocationAdmin()
                          }}>
                              <i className="fa-solid fa-arrow-left me-2 bg-transparent"></i>
                              prev
                          </button>
                          <button className='btn btn-primary mx-2'> {numberPageAdmin} </button>
                          <button className='btn btn-primary mx-2' onClick={() => {
                              handelClickBtnNextSetArrLocationAdmin()
                          }}>
                              
                              next
                              <i className="fa-solid fa-arrow-right ms-2 bg-transparent" ></i>
                          </button>
                      </div>
                  </div>
              </div>
}