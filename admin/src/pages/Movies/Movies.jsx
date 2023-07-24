import React, { useCallback, useEffect, useState } from "react";
import { Button, Modal, Popconfirm, Row, Table, message } from "antd";
import styled from "styled-components";
import Excel from "components/Excel/Excel";
import TableData from "components/Table/Table.jsx";
import Loading from "components/LoadingError/Loading.jsx";
import { ReactComponent as EditIcon } from "../../assets/images/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/images/delete-icon.svg";
import { ReactComponent as VisibleIcon } from "../../assets/images/visible-status.svg";
import { useDispatch, useSelector } from "react-redux";

import Input from "components/Input";
import DropDown from "components/Dropdown/Dropdown";
import { deleteMovie, listMovie } from "Redux/Actions/MovieActions";
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
  .btn-movies {
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

  /* table MUI */
  .dataTable {
  }
  /* Container */
  .modal-container {
    display: flex;
    flex-direction: column;
  }

  /* Label */
  .modal-container label {
    margin-bottom: 8px;
  }

  /* Input */

  .input-field {
    display: flex;
    flex-direction: column;
  }
`;
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const Movies = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "movie", headerName: "MOVIE", width: 120, editable: true },
    { field: "genreName", headerName: "GENRE", width: 120, editable: true },
    {
      field: "releaseDate",
      headerName: "RELEASEDATE",
      width: 200,
      editable: true,
    },
    { field: "duration", headerName: "DURATION", width: 100, editable: true },
    {
      field: "desc",
      headerName: "DESCRIPTION",
      width: 200,
      editable: true,
    },

    {
      field: "status",
      headerName: "STATUS",
      // type: "number",
      width: 80,
      editable: true,
      renderCell: (params) => (
        <div className="action">{params.value === 1 ? "Show" : "Hide"}</div>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="action">
          {/* <Popconfirm
            title="Update status the task"
            description="Are you sure to update status for this user?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              // updateRow(params.row.id);
              setConfirmUpdate(false);
            }}
            onCancel={() => setConfirmUpdate(false)}
          > */}
          <Modal
            title="Edit Movie"
            visible={isModalVisible}
            // onOk={handleModalOk}
            onCancel={handleModalCancel}
            maskStyle={{ background: "rgba(0, 0, 0, 0.2)" }}
            okButtonProps={{ style: { display: "none" } }}
          >
            {selectedMovie && (
              <div className="modal-container">
                <div className="input-field">
                  <label>Username:</label>
                  <br />
                  <Input
                    boderColor={"#000"}
                    height={36}
                    borderRadius={10}
                    width={400}
                    type="text"
                    value={selectedMovie.username}
                    onChange={(e) =>
                      setselectedMovie({
                        ...selectedMovie,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label>Email:</label>
                  <br />
                  <Input
                    boderColor={"#000"}
                    height={36}
                    borderRadius={10}
                    width={400}
                    type="text"
                    value={selectedMovie.email}
                    onChange={(e) =>
                      setselectedMovie({
                        ...selectedMovie,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label>Phone:</label>
                  <br />
                  <Input
                    boderColor={"#000"}
                    height={36}
                    borderRadius={10}
                    width={400}
                    type="text"
                    // value={}
                    onChange={(e) =>
                      setselectedMovie({
                        ...selectedMovie,
                        // email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <br />
                  <DropDown
                    onClick={onClick}
                    items={[
                      {
                        label: "Nam",
                        key: "1",
                      },
                      {
                        label: "Nữ",
                        key: "0",
                      },
                    ]}
                    label={"Gender"}
                    // defaultValue={getGenderLabel(
                    //   selectedMovie && selectedMovie.gender
                    // )}
                    defaultValue={selectedMovie.gender ? "Nam" : "Nữ"}
                    onChange={(value) =>
                      setselectedMovie({
                        ...selectedMovie,
                        gender: value === "Nam" ? true : false,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <label>Birthday:</label>
                  <br />
                  <Input
                    boderColor={"#000"}
                    height={36}
                    borderRadius={10}
                    width={400}
                    type="text"
                    value={selectedMovie.birthday}
                    onChange={(e) =>
                      setselectedMovie({
                        ...selectedMovie,
                        birthday: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-field">
                  <br />
                  <DropDown
                    onClick={onClick}
                    items={[
                      {
                        label: "Show",
                        key: "1",
                      },
                      {
                        label: "Hide",
                        key: "0",
                      },
                    ]}
                    label={"Status:"}
                    // defaultValue={getStatusLabel(
                    //   selectedMovie && selectedMovie.status
                    // )}
                    defaultValue={selectedMovie.status === 1 ? "Show" : "Hide"}
                    onChange={(value) =>
                      setselectedMovie({
                        ...selectedMovie,
                        status: value === "Show" ? 1 : 0,
                      })
                    }
                  />
                </div>
                <Popconfirm
                  title="Are you sure to update this user?"
                  onConfirm={() => {
                    // updateRow(params.row.id);

                    handlePopconfirmOk();
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button style={{ marginTop: "20px" }} type="primary">
                    Update
                  </Button>
                </Popconfirm>
                {/* Các trường dữ liệu khác */}
              </div>
            )}
          </Modal>

          <button
            className="btn-edit"
            onClick={handleEditMovie.bind(null, params.row.id)}
          >
            <EditIcon />
          </button>

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this mo?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {
              deleteRow(params.row.id);
              setConfirmDelete(false);
            }}
            onCancel={() => setConfirmDelete(false)}
          >
            <button className="btn-delete">
              <DeleteIcon />
            </button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  const onSearch = (value) => console.log(value);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setselectedMovie] = useState(null);

  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { loading, error, movies } = movieList;

  const [data, setData] = useState([]);

  const handlePopconfirmOk = () => {
    if (selectedMovie) {
      const updatedMovie = {
        ...selectedMovie,
        // username: selectedMovie.username,
        // email: selectedMovie.email,
        // // phone: selectedMovie.phone,
        // gender: selectedMovie.gender,

        // birthday: selectedMovie.birthday,
        // status: selectedMovie.status,
      };
      console.log(updatedMovie);
      // console.log(updatedMovie);
      updateRow(updatedMovie);
      setIsModalVisible(false);
      setConfirmUpdate(false);
    }
  };
  // const handlePopconfirmCancel = () => {
  //   // Xử lý logic khi nhấp vào Cancel trong pop-up
  //   setConfirmUpdate(false);
  // };
  const handleModalCancel = () => {
    // Logic xử lý khi nhấp vào nút Cancel hoặc nút đóng modal
    setIsModalVisible(false);
  };
  const handleEditMovie = useCallback(
    (id) => {
      const movie = data.find((movie) => movie.id === id);
      setselectedMovie({ ...movie });
      setIsModalVisible(true);
    },
    [data]
  );

  const updateRow = (updatedMovie) => {
    // dispatch(updateUser(updatedMovie))
    //   .then(() => dispatch(listUser()))
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     // Handle error if necessary
    //   });
  };

  const deleteRow = (id) => {
    dispatch(deleteMovie(id))
      .then(() => dispatch(listMovie()))
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // Handle error if necessary
      });
  };

  useEffect(() => {
    dispatch(listMovie())
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        // Handle error if necessary
      });
  }, [dispatch]);
  useEffect(() => {
    if (movies && movies.data) {
      const formattedData = movies.data.map((movie) => {
        return {
          id: movie.id,
          movie: movie.title,
          desc: movie.desc,
          releaseDate: movie.releaseDate,
          duration: movie.duration,
          genreName: movie.genreName,
          // rating: review.rating,
          // status: review.status,
          // user: review.user.username,
        };
      });
      setData(formattedData);

      console.log(formattedData);
    }

    // if (reviews && reviews.data) {

    //   setData(formattedData);
    //   console.log(formattedData);
    // }
  }, [movies]);

  return (
    <Wrapper>
      <Row>
        <div className="recent-film">
          <h1>Movies List</h1>
        </div>
        <div style={{ display: "none" }} className="">
          {/* {error && toast.error(error)} */}
          {/* {error && <Toast />} */}
          {loading && <Loading />}
        </div>

        <TableData className="dataTable" rows={data} columns={columns} />
      </Row>
    </Wrapper>
  );
};
export default Movies;
