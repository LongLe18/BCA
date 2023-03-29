import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

import InputLabel from "components/common/InputFieldLabel/InputFieldLabel";

import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";

import {setPosition} from "redux/positionSlice";
import "./Login.scss";

const Login = props => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  //   const position = useSelector(state => state?.position);

  useEffect(() => {
    dispatch(setPosition("ĐĂNG NHẬP"));
  }, []);
  const [error, setError] = useState();
  const [checked, setChecked] = useState(
    localStorage.getItem("username") ? true : false
  );

  const initialValues = {
    username: localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "",
    password: localStorage.getItem("password")
      ? localStorage.getItem("password")
      : "",
  };

  // const handleSubmit = (values) => {
  //     const login = (res) => {
  //         console.log(values);

  //         if (res.status === 200) {
  //             localStorage.removeItem("accessToken");
  //             localStorage.setItem("accessToken", res.data.token);
  //             sessionStorage.setItem("userID", res.data.user.ID);
  //             sessionStorage.setItem("userName", res.data.user.taiKhoan);
  //             console.log(res.data.user);

  //             if (!props.location.state) {

  //                 return;
  //             } else if (
  //                 props.location.state.from.pathname === "/DichVu/DienThoai"
  //             ) {

  //             } else if (
  //                 props.location.state.from.pathname === "/DichVu/Email"
  //             ) {

  //             }

  //             return;
  //         } else if (res.response && res.response.status === 401) {
  //             setError("Thông tin đăng nhập không chính xác");
  //         }
  //     };

  //     handleApi(authApi.login, login, { ...values });
  // };

  const handleChangeChecked = values => {
    return e => {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      setChecked(e.target.checked);
      if (e.target.checked && values.username && values.password) {
        localStorage.setItem("username", values.username);
        localStorage.setItem("password", values.password);
      }
    };
  };

  return (
    <div className="Login">
      <Container className="main">
        <div className="form-header-login">
          <p>
            Vui lòng đăng nhập để sử dụng tất cả các chức năng của chúng tôi
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
