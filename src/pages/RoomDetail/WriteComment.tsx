import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/configStore";
import { postCommentApi } from "../../redux/reducer/roomDetailReducer";
import { getStore, USER_ID } from "../../util/setting";

function WriteComment() {
  const dispatch: AppDispatch = useDispatch();
  // const infoUser = getStoreJson("User_Info"); => cách này bị lỗi, tìm hiểu thêm lý do nhé!
  const maNguoiDung = Number(getStore(USER_ID));
  console.log("manguoidung", maNguoiDung);
  //Hàm Number() :convert string to number;
  //Lấy ngày hiện tại
  const takeDate = new Date();
  const today = `${takeDate.getDate()}/${
    takeDate.getMonth() + 1
  }/${takeDate.getFullYear()}`;
  // console.log(today);
  // lấy nội dung bình luận
  const [noidung, setNoidung] = useState("");
  const handleNoiDung = (e: any) => {
    setNoidung(e.target.value);
  };
  const userComment = {
    id: 0,
    maPhong: Number(useParams().id),
    maNguoiBinhLuan: maNguoiDung,
    ngayBinhLuan: today,
    noiDung: noidung,
    saoBinhLuan: 0,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postCommentApi(userComment));
  };

  return (
    <div className="inp_binhluan d-flex">
      <div className="">
        <img src="https://picsum.photos/200/300/?random&t=" alt="user_avt" />
      </div>
      <div className="commentInfo">
        <textarea
          className="form-control"
          rows={4}
          cols={100}
          id="binhluan"
          placeholder="Viết bình luận..."
          onChange={handleNoiDung}
        />
        <button
          className="btn btn-primary mt-2 mx-3"
          style={{ width: 140 }}
          onClick={handleSubmit}
        >
          Gửi bình luận
        </button>
      </div>
    </div>
  );
}
export default memo(WriteComment);
