import React, { ChangeEvent, MouseEvent, useEffect, useRef} from 'react'
import ModalAddRoom from '../../component/Modal/ModalAdmin/ModalAddRoom'
import ModalEditRoom from '../../component/Modal/ModalAdmin/ModalEditRoom'
import ModalInfoRoom from '../../component/Modal/ModalAdmin/ModalInfoRoom'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/example/hooks'
import { deleteRoomAdminApi, getRoomInfoAdminApi, RoomInfoModel, setArrRoomInfoAdminApi, setNumberPageRoomInfoAdmin } from '../../redux/reducer/adminRoomInfoManageReducer'
import { http } from '../../util/setting'
import ModalUpdateImageRoomAdmin from '../../component/Modal/ModalAdmin/ModalUpdateImageRoomAdmin'

export default function RoomInfoManage() {
  const { arrRoomInfoAdmin, numberPageRoomInfoAdmin } = useAppSelector((state) => state.adminRoomInfoManageReducer)
  const dispatch = useAppDispatch()
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() =>{
      dispatch(getRoomInfoAdminApi(numberPageRoomInfoAdmin))
      getRoomByKeyword()
      // eslint-disable-next-line
  },[numberPageRoomInfoAdmin, keywordRef.current]);
  

  const getRoomByKeyword = async () => {
    if(searchParams){
        let keyword :string | null = searchParams.get("keyword");        
        try {
            if (keyword && keyword.trim() !== "") {
                let response = await http.get(`/phong-thue/${keyword}`);
                console.log(response.data.content);
                const arrNull: RoomInfoModel[] = []
                const resultSearch = [...arrNull,response.data.content]
                dispatch(setArrRoomInfoAdminApi(resultSearch))
                // clearTimeout(timeoutRef.current);
            } else {
                dispatch(setNumberPageRoomInfoAdmin(numberPageRoomInfoAdmin))//set number page = 1, call 5 account firstly
            }
            } catch (err) {
                console.log(err);
            }
    }
    
    };
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        keywordRef.current = event.target.value;
        timeoutRef.current = setTimeout(() => {
        setSearchParams({ keyword: keywordRef.current });
        }, 1000);
    };

    const handleSubmit = (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // đưa dữ liệu keyword người dùng nhập lên url
        setSearchParams({ keyword: keywordRef.current });
    };






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
                      <td>
                      <img className='shadow-sm' style={{width:'50px', height:'50px'}} src={item.hinhAnh.trim() === '' ? '/img/image-null.png' : item.hinhAnh} alt="..." />
                        <ModalUpdateImageRoomAdmin id={item.id} />
                      </td>

                      <td>
                            <ModalInfoRoom item={item}/>
                            <ModalEditRoom item={item}/>
                            <button className='btn btn-danger'  onClick={(event :MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                let text = "Press a button!\nEither OK or Cancel.";
                                if (window.confirm(text) === true) {
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
                  <form className='pb-3' style={{width:'100%'}}  onSubmit={(event) =>{
                        handleSubmit(event)
                    }}>
                      <input 
                      className='border-bottom' 
                      style={{border:'none', outline:'none', width:'400px'}} 
                      type="text" 
                      placeholder='Enter ID room' 
                      id="keywordRef"
                      onChange={(event : ChangeEvent<HTMLInputElement>) =>{
                        handleChange(event)
                    }}
                      />
                      <button type="submit" className="btn btn-primary me-5 ms-2"> Find</button>
                  </form>
                  <table className="table">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Tên phòng</th>
                              <th>Hình ảnh</th>
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