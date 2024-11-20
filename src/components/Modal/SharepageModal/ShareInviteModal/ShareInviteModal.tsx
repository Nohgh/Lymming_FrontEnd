import axios from "axios";
import useModalClose from "../../../../hooks/useModalClose";
import "./ShareInviteModal.scss";
import { useState } from "react";
import useModalStore from "../../../../store/useModalState";
import { useNavigate } from "react-router-dom";
const ShareInviteModal = () => {
  const [inviteNickName, setInviteNickName] = useState("");
  const { modalRef } = useModalClose();
  const { postSharePageId } = useModalStore();
  const navigate = useNavigate();


  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteNickName(e.target.value);
  };

  const inviteMember = async () => {
    try {
      console.log("inviteNickName", inviteNickName);
      const encodedName = encodeURIComponent(inviteNickName);
      const response = await axios.get(
        `https://lymming-back.link/share/find/${encodedName}/${postSharePageId}`
      );
      console.log("초대", response.data);

      navigate("/chat", {
        state: {
          id: response.data.nickname,
          invite: true,
          sharepage: response.data.sharePageId,
        },
      });

      console.log("닉네임", response.data.nickname);

      console.log("공유페이지id", response.data.sharePageId);

      return response.data;
    } catch (error) {
      alert("사용자가 없습니다!");
      console.error(error);
    }
  };

  return (
    <div ref={modalRef} className="ShareInviteModal">
      {/* <div className="ShareInviteModal-header"></div> */}
      <input
        className="ShareInviteModal-body"
        type="text"
        onChange={handleNickName}
        value={inviteNickName}
      />
      <div className="ShareInviteModal-footer" onClick={inviteMember}>
        초대하기
      </div>
    </div>
  );
};

export default ShareInviteModal;
