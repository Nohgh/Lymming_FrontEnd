import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInfoStore, useLoginStore } from "../store/useLoginStore";
import axios from "axios";
import Loading from "../components/Loading/Loading";

const KakaoAuth = () => {
  const navigate = useNavigate();
  const { setIsOpen, setLogin } = useLoginStore();
  const { setData } = useInfoStore();

  useEffect(() => {
    postKakaoCode(code);
  }, []);

  const queryString = window.location.search; // URL 쿼리 스트링 가져오기
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code"); // 'code' 파라미터 값을 가져오기

  // 서버로 인가코드 전
  const postKakaoCode = async (code: any) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/api/kakao/login`,
        {
          code,
        }
      );

      // 리턴값으로 토큰 날라온다
      localStorage.setItem("token", result.data.refreshToken);

      // 있으면
      //홈으로 이동
      //userInfo 데이터를 불러온 데이터로 세팅한다
      // 로그인 상태를 true로 만든다
      if (result.data.nickname) {
        setData(result.data);

        setLogin();
        navigate("/");
      }

      // 회원가입 정보중 닉네임등의 정보가 추가되어 있지 않으면
      // 회원 가입 모달을 띄운다
      //로그인 페이지로 네비게이트 한다
      else {
        setIsOpen();
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="KakaoAuth">
      <Loading />
    </div>
  );
};

export default KakaoAuth;
