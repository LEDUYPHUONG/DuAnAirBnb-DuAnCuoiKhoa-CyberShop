import React from "react";


const UserInforItem = () => {
  return (
    <div className='infor-container' style={{ width: "100%", marginTop: "80px" }}>
      <div className="justify-content-center mb-3" style={{ margin: "120px 420px 32px", padding: "0 16px" }}>
        <div className="justify-content-center mb-3">
          <div className="d-flex justify-content-center mb-3" style={{ width: "100%" }}>
            <div className="p-2" style={{ width: "33.33%" }}>
              <div className="square border border-1" style={{ margin: "0 auto", maxWidth: "308px", padding: "24px", borderRadius: "12px"}}>
                <div className="infor-updateimage" style={{width:"128px",margin:"auto auto 32px auto"}}>
                  <div className="infor-img">
                    <img src="https://kientruccb.vn/wp-content/uploads/2020/02/mau-thiet-ke-nha-dep-truyen-cam-hung8.jpg" alt="..."  style={{width:"128px",height:"128px",position:"relative",borderRadius:"100%"}}/>
                  </div>
                  <div className="infor-editimg"  style={{textAlign:"center"}}>
                    <a href="..." className="edit" style={{textDecoration:"underline"}}>Cập nhật ảnh</a>
                  </div>
                </div>
                <div className="infor-iconservice" style={{marginBottom:"16px"}}>
                  <img src="./img/home/shieldicon.png" alt="..." style={{height:"40px",widows:"40px",fill:"currentcolor"}} />
                </div>
                <div className="infor-check1" style={{marginBottom:"8px",fontSize:"18px"}}>Xác minh danh tính</div>
                <div className="infor-check2" style={{lineHeight:"20px",marginBottom:"16px",fontSize:"16px"}}>Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</div>
                <div className="infor-challange square border border-1" style={{padding:"13px 23px",width:"fit-content",textAlign:"center"}}>Nhận huy hiệu</div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="p-2" style={{ width: "66.67%" }}></div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default UserInforItem;
