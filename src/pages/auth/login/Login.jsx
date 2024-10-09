import { useEffect, useState } from "react";
import FormLogin from "./form/FormLogin";
import api from "../../../ApiUrl";
import { useNavigate } from "react-router-dom";

import LogoWide from "../../../images/customIcons/archiveIcon.svg";
import BGStart from "../../../images/bg-start.jpg";
import { ErrorAlert } from "../../../components/Alert";

import CryptoJS from "crypto-js";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    props.loading(true);
    const requestData = {
      username: email,
      password: password,
    };

    try {
      const response = await api.post("users/login/", requestData);

      console.log(response);
      props.loading(true);
      const data = response.data;
      const token = data.token;
      const role = data.role;

      const id = data.id;

      const secretKey = "s3cr3t$Key@123!";
      const encryptedRole = CryptoJS.AES.encrypt(role, secretKey).toString();
      const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();
      sessionStorage.setItem("role", encryptedRole);
      sessionStorage.setItem("token", encryptedToken);

      localStorage.setItem("id", id);
      props.loading(false);
      props.onLogIn();
    } catch (error) {
      setErrorMsg("An error occurred:", error);
      props.loading(false);
    }
  };

  useEffect(() => {
    const encryptedToken = sessionStorage.getItem("token");
    let decryptedToken = null;

    if (encryptedToken) {
      const secretKey = "s3cr3t$Key@123!";
      decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(
        CryptoJS.enc.Utf8
      );
    }

    if (decryptedToken) {
      navigate(`${import.meta.env.VITE_PUBLIC_URL}/`);
    }
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center
      lg:justify-between w-full mx-auto gap-x-10`}
    >
      {errorMsg && (
        <ErrorAlert
          title={"Error"}
          text={"Error in login details check email and password"}
          closeClick={() => setErrorMsg("")}
        />
      )}
      <div
        className="bg-gray-900 border-2 rounded-xl lg:border-none
        shadow-md w-96 md:w-1/2 xl:w-1/3 lg:shadow-none"
        dir="rtl"
      >
        {/* <img src={LogoWide} className="w-auto h-20 mx-auto mt-3"/> */}
        <div className="flex flex-col gap-2 p-3 justify-center items-center w-full text-white">
          <h1 className="font-medium text-base ">{errorMsg}</h1>
          <h1 className="font-semibold text-2xl">سجل دخول</h1>
          <p className="text-center font-medium text-base">
            الوصول إلى لوحة معلومات باستخدام بريدك الإلكتروني او اسم المستخدم
            وكلمة المرور
          </p>
        </div>
        <FormLogin
          buttonText="تسجيل الدخول"
          handlePasswordChange={handlePasswordChange}
          handleEmailInput={handleEmailInput}
          handleSubmitLogin={handleLogin}
        />
      </div>
      <div
        className="w-2/3 md:w-1/2 xl:w-2/3 min-h-screen hidden lg:block"
        style={{
          backgroundImage: `url(${BGStart})`,
          backgroundSize: "cover",
          borderRadius: "lg",
        }}
      >
        <div className="flex items-center w-full min-h-screen bg-black bg-opacity-50">
          <img src={LogoWide} alt="" className="mx-auto my-auto" />
        </div>
      </div>
    </div>
  );
}
