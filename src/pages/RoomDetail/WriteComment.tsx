import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import { postCommentApi } from "../../redux/reducer/roomDetailReducer";
import { getStoreJson } from "../../util/setting";

type Props = {};

export default function WriteComment({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const infoUser = getStoreJson("User_Info");
  console.log("info nguoi dung", infoUser);
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
    maNguoiBinhLuan: infoUser.id,
    ngayBinhLuan: today,
    noiDung: noidung,
    saoBinhLuan: 0,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postCommentApi(userComment));
  };

  // console.log(userComment);

  return (
    <div className="container d-flex">
      <img
        src="https://picsum.photos/200/300/?random&t="
        alt="user_avt"
        style={{ width: 50, height: 50, borderRadius: 100 }}
      />
      <div className="commentInfo  d-flex flex-column">
        <textarea
          className="form-control mx-3"
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
