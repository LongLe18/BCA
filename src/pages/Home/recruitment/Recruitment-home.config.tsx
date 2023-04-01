import React from "react";
import type {ColumnsType} from "antd/es/table";
import {Link} from "react-router-dom";
import { Tag } from "antd";

export interface DataType {
  key: string;
  job: string;
  rank: string;
  major: string;
  address: string;
  deadline: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Công việc",
    dataIndex: "job",
    key: "job",
    render: (text, record) => (
      <Link className="job" to={`/recruitment/detail/${record.key}`}>{text}
        <Tag color="#f32425">
          Hot
        </Tag>
      </Link>
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
    title: "Cấp bậc",
    dataIndex: "rank",
    key: "rank",
    render: text => <div className="custom-text-light">{text}</div>,
    sorter: (a: any, b: any) => a.rank - b.rank,
  },
  {
    title: "Ngành nghề",
    dataIndex: "major",
    key: "major",
    render: text => <div className="custom-text-light">{text}</div>,
    sorter: (a: any, b: any) => a.major - b.major,
  },
  {
    title: "Địa điểm",
    dataIndex: "address",
    key: "address",
    render: text => <div className="custom-text-light">{text}</div>,
    sorter: (a: any, b: any) => a.address - b.address,
  },
  {
    title: "Hạn nộp hồ sơ",
    dataIndex: "deadline",
    key: "deadline",
    render: text => <div className="custom-text-light">{text}</div>,
  },
];

export const data: DataType[] = [
  {
    key: "1",
    job: "Công việc 1",
    rank: "Nhân viên",
    address: "Hà Nội",
    major: "Pháp chế",
    deadline: "27 tháng 3, 2021",
  },
  {
    key: "2",
    job: "Công việc 1",
    rank: "Nhân viên",
    address: "Hà Nội",
    major: "Pháp chế",
    deadline: "27 tháng 3, 2021",
  },
  {
    key: "3",
    job: "Công việc 1",
    rank: "Nhân viên",
    address: "Hà Nội",
    major: "Pháp chế",
    deadline: "27 tháng 3, 2021",
  },
];
