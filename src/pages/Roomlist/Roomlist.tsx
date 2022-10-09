import { relative } from "path";
import React from "react";

type Props = {
  title?: string;
};

export default function roomListPages({ title }: Props) {
  return (
    <div className="main" style={{ display: "flex", boxSizing: "border-box" }}>
      <div
        className="container-roomlist"
        style={{
          paddingInlineStart: 24,
          paddingInlineEnd: 24,
          background: "#fffff",
        }}
      >
        <div
          className="container-filter"
          style={{
            display: "grid",
            alignItems: "center",
            marginTop: 24,
            marginBottom: 8,
          }}
        >
          <div className="column" style={{flexDirection:"column"}}>
            <span style={{ fontSize: 14 }}>916 nhà</span>
          </div>
        </div>
        <div className="room-filter" style={{position:"relative"}}>
          <button type="button" style={{cursor:"pointer",border:1,borderRadius:1,boxShadow:"unset",background:"#fffff",margin:0,paddingTop:7,paddingBottom:0}}>
            <span style={{fontSize:14}}>
              Bộ lọc
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
