import React from "react";
import type {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";
import {DownloadOutlined} from "@ant-design/icons";
export interface DataType {
  key: string;
  name: string;
  date: string;
  size: string;
  type: string;
  download: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Tên văn bản",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <Link to={`/recruitment/detail/${record.key}`}>{text}</Link>
    ),
    // onCell: (record, rowIndex) => {
    //   return {
    //     onClick: ev => {
    //       console.log(record);
    //     },
    //   };
    // },
  },
  {
    title: "Ngày tải lên",
    dataIndex: "date",
    key: "date",
    render: text => <div className="custom-text-light">{text}</div>,
  },
  {
    title: "Kích thước",
    dataIndex: "size",
    key: "size",
    render: text => <div className="custom-text-light">{text}</div>,
  },
  {
    title: "Loại văn bản",
    dataIndex: "type",
    key: "type",
    render: text => <div className="custom-text-light">{text}</div>,
  },
  {
    title: "Tải xuống",
    dataIndex: "download",
    key: "download",
    render: text => (
      <DownloadOutlined style={{color: "#c83b3c"}}></DownloadOutlined>
    ),
    align: "right",
  },
];

export const data: DataType[] = [
  {
    key: "1",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
  {
    key: "2",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
  {
    key: "3",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
  {
    key: "4",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
  {
    key: "5",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
  {
    key: "6",
    name: "Văn bản thông báo thay đổi nhân sự",
    date: "16:30 - 26/03/2023",
    size: "12.8 MB",
    type: "Văn bản thông báo",
    download: "",
  },
];
