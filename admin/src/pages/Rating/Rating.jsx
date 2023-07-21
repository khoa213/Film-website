import { Button, Row, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .custom-table .ant-table-wrapper {
    background-color: var(--body-content-light-background);
  }

  .custom-table .ant-table-thead > tr > th {
    background-color: var(--body-content-light-background);
    color: white;
  }

  .custom-table .ant-table-tbody > tr > td {
    background-color: var(--body-content-light-background);
    color: white;
    border-color: darkgray;
  }

  /* .custom-table .ant-table-tbody > tr {
    background-color: black;
    color: white;
  } */

  .custom-table .ant-table-tbody > tr:hover {
    background-color: darkslategray;
  }

  .custom-table .ant-table-tbody > tr:hover td {
    color: red;
    background-color: darkslategray;
  }
  .recent-film {
    display: flex;
    justify-content: space-between !important;
    width: 100%;
    align-items: center;
    color: white !important;
    .search-input {
      margin-left: auto;
    }
  }
  .btn-users {
    width: 70px;
    height: 40px;
    margin-right: 10px;
  }
  .custom-pagination.ant-pagination {
    .ant-pagination-item {
      background-color: #fff;
    }
    .ant-pagination-item-link {
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
    }

    .ant-pagination-item-active {
      background-color: #1890ff;
      border-color: #1890ff;
    }

    .ant-pagination-item-active a {
      color: #fff;
    }

    .ant-pagination-disabled {
      opacity: 0.5;
    }
    .ant-pagination-total-text {
      color: #fff;
    }
  }
`;

const dataTable = [
  {
    key: "1",
    name: "John Brown 1",
    rate: 3.1,
    category: "New York Park",
  },
  {
    key: "2",
    name: "John Brown 2",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "3",
    name: "John Brown 3",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "4",
    name: "John Brown 4",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "5",
    name: "John Brown 5",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "6",
    name: "John Brown 6",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "7",
    name: "John Brown 7",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "8",
    name: "John Brown 8",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "9",
    name: "John Brown 9",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "10",
    name: "John Brown 10",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "11",
    name: "John Brown 11",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "12",
    name: "John Brown 12",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "13",
    name: "John Brown 13",
    rate: 3.2,
    category: "New York Park",
  },
  {
    key: "14",
    name: "John Brown 14",
    rate: 3.2,
    category: "New York Park",
  },
];
const Rating = () => {
  const columns = [
    {
      title: "Movie",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Rating",
      width: 100,
      dataIndex: "rate",
      key: "rate",
      fixed: "left",
      sorter: (a, b) => a.rate - b.rate,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "1",
    },
    {
      title: "Download/View",
      dataIndex: "dov",
      key: "2",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "3",
    },

    {
      title: "Liked",
      dataIndex: "liked",
      key: "4",
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 200,
      render: (_, rate) => (
        <div>
          <Button
            className=" btn-delete btn-users"
            type="primary"
            danger
            id={rate.key}
            onClick={() => {
              handleDeleteUser(rate.key);
              console.log(rate.key);
            }}
          >
            Xóa
          </Button>
          <Button
            className="btn-users"
            // onClick={() => handleUpdateUser(user.id)}
            //   style={}
          >
            Sửa
          </Button>
        </div>
      ),
    },
  ];

  const pageSize = 10;
  const [tableData, setTableData] = useState(() => {
    const startIndex = 0;
    const endIndex = startIndex + pageSize;
    return dataTable.slice(startIndex, endIndex);
  });
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteUser = (key) => {
    const updatedData = tableData.filter((data) => data.key !== key);
    setTableData(updatedData);

    if (updatedData.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const startIndex = pageSize * (currentPage - 2);
      const endIndex = startIndex + pageSize;
      const prevPageData = dataTable.slice(startIndex, endIndex);
      setTableData(prevPageData);
    }
  };

  const onSearch = (value) => console.log(value);

  const handleChangePage = (page) => {
    setCurrentPage(page);
    const startIndex = pageSize * (page - 1);
    const endIndex = startIndex + pageSize;
    const slicedData = dataTable.slice(
      startIndex,
      endIndex > dataTable.length ? dataTable.length : endIndex
    );
    setTableData(slicedData);
  };

  return (
    <Wrapper>
      <Row>
        <div className="recent-film">
          <h1>Recently Viewed Film</h1>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{
            total: dataTable.length,
            pageSize,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            onChange: handleChangePage,
            className: "custom-pagination",
          }}
          rowKey="key"
          scroll={{
            x: 1000,
            y: 500,
          }}
          className="custom-table"
        />
      </Row>
    </Wrapper>
  );
};
export default Rating;
