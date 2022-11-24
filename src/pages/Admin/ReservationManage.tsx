import React, { ChangeEvent, MouseEvent, useEffect, useRef} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/example/hooks'
import { http } from '../../util/setting'
import { deleteRoomBookedAdminApi, getRoomBookedAdminApi, RoomBookedModel, setArrRoomBookedAdminApi } from '../../redux/reducer/adminReservatiionManageReducer'
import ModalBookRoom from '../../component/Modal/ModalAdmin/ModalBookRoom'
import ModalEditBookedRoom from '../../component/Modal/ModalAdmin/ModalEditBookedRoom'

export default function ReservationManage() {
  const { arrRoomBookedAdmin } = useAppSelector((state) => state.adminReservationManageReducer)
  const dispatch = useAppDispatch()
  let keywordRef = useRef("");
  let [searchParams, setSearchParams] = useSearchParams();
  let timeoutRef = useRef({});

  useEffect(() =>{
      dispatch(getRoomBookedAdminApi())
      getRoomByKeyword()
      // eslint-disable-next-line
  },[ keywordRef.current]);
  

  const getRoomByKeyword = async () => {
    if(searchParams){
        let keyword :string | null = searchParams.get("keyword");        
        try {
            if (keyword && keyword.trim() !== "") {
                let response = await http.get(`/dat-phong/${keyword}`);
                console.log(response.data.content);
                const arrNull: RoomBookedModel[] = []
                const resultSearch = [...arrNull,response.data.content]
                dispatch(setArrRoomBookedAdminApi(resultSearch))
                // clearTimeout(timeoutRef.current);
            } else {
                dispatch(getRoomBookedAdminApi())
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



  const renderRoomBooked = () => {
      return arrRoomBookedAdmin.map((item,index) =>{
          return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.maPhong}</td>
                      <td>{item.ngayDen}</td>
                      <td>{item.ngayDi}</td>
                      <td>{item.soLuongKhach}</td>
                      <td>{item.maNguoiDung}</td>
                      <td>
                            <ModalEditBookedRoom item={item}/>
                            <button className='btn btn-danger'  onClick={(event :MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault();
                                let text = "Press a button!\nEither OK or Cancel.";
                                if (window.confirm(text) == true) {
                                  text = "You pressed OK!";
                                  dispatch(deleteRoomBookedAdminApi(item.id))
                                } else {
                                  text = "You canceled!";
                                }
                            }}>x</button>
                      </td>
                  </tr>
          
      })
  }
  return (<div className='border-start px-5' style={{height: 'calc(100vh - 50px)'}}>
            <ModalBookRoom />
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
                        <th>Mã phòng</th>
                        <th>Ngày đến</th>
                        <th>Ngày đi</th>
                        <th>Số khách</th>
                        <th>Mã người dùng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='w-100'>
                    {renderRoomBooked()}
                    
                </tbody>
            </table>
          </div>
        )
}