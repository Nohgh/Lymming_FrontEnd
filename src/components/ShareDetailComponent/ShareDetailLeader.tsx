import { useLocation } from "react-router-dom";
import useModalStore from "../../store/useModalState";
import { useState } from "react";
import Header from "../header/Header";
import RootModal from "../Modal/RootModal/RootModal";
import nouserImage from "../../assets/img/noimage.jpg";
import useImgUpload2S3 from "../../hooks/useImgUpload2S3";
// import AWS from "aws-sdk";
import "./ShareDetailLeader.scss";

interface ShareDetailLeaderProps {
  userId: number;
  project_id: number;
  project_name: string;
  project_url: string;
  project_description: string;
  team_member: number[];
  team_member_name: string[];
  team_member_url: string[];
  team_member_position: string[];
  team_leader: string;
  is_completed: boolean;
}

const ShareDetailLeader = () => {
  const location = useLocation();
  const initialData: ShareDetailLeaderProps = location.state;
  const { isModalOpen, openModal } = useModalStore();
  const [modalName, setModalName] = useState("");
  const [formData, setFormData] = useState<ShareDetailLeaderProps>(initialData);
  const [projectLink, setProjectLink] = useState("");
  const { imageUrl, handleFileChange, handleUpload } = useImgUpload2S3();
  // const [image, setImage] = useState<string | null>(null); // 이미지 URL을 저장할 상태
  // const { setData } = useInfoStore();
  //------------------------------------------
  // const [selectedFile, setSelectedFile] = useState<File | null>(null); //FIXME: 추가됨
  // const [imageUrl, setImageUrl] = useState<string | null>(null);
  /** 입력 값 변경 핸들러 */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleProjectLink = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProjectLink(e.target.value);
  };
  const invalidateInstance = () => {
    setModalName("shareInviteModal");
    openModal();
    console.log(isModalOpen);
  };
  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];

  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file); // 선택한 파일의 URL 생성
  //     setImage(imageUrl); // 이미지 상태 업데이트
  //     setData({ userImg: imageUrl });
  //   }
  // };

  //------------------------------------------
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   if (file) {
  //     setSelectedFile(file);
  //     const objectUrl = URL.createObjectURL(file);
  //     setImageUrl(objectUrl);
  //     console.log("⭐미리보기:", imageUrl);
  //   }
  // };
  // const handleUpload = () => {
  //   if (!selectedFile) {
  //     alert("파일을 선택해주세요");
  //     return;
  //   }
  //   console.log(selectedFile);
  //   AWS.config.update({
  //     accessKeyId: import.meta.env.VITE_SECRET_KEY,
  //     secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
  //     region: "ap-northeast-2",
  //   });

  //   const s3 = new AWS.S3();
  //   console.log(selectedFile);
  //   const uploadParams = {
  //     Bucket: import.meta.env.VITE_IMG_S3,
  //     Key: `folder${selectedFile.name}`, // S3에 저장될 경로와 파일명
  //     Body: selectedFile,
  //   };
  //   s3.upload(
  //     uploadParams,
  //     (err: unknown, data: { ETag: unknown; Location: unknown }) => {
  //       if (err) {
  //         console.error("Error uploading file:", err);
  //       } else {
  //         console.log("File uploaded successfully. ETag:", data.ETag);
  //         const uploadedFileUrl = data.Location;
  //         console.log(uploadedFileUrl);
  //         //TODO: uploadedFileUrl은 s3에 저장된 이미지의 url로 백엔드에게 전달해주기
  //       }
  //     }
  //   );
  // };
  return (
    <>
      <Header />
      <div className="ShareDetailLeaderWrapper">
        <div className="ShareDetailLeader">
          <div className="ShareDetailLeader-InputBox_Bunddle">
            <div className="InputBox_NameBundle">
              {/* <div className="teamNameWrapper">
                <div className="nameText">팀 이름</div>
                <input
                  className="nameInput"
                  name="team_leader"
                  value={formData.team_leader}
                  onChange={handleInputChange}
                />  
              </div> */}
              <div className="projectNameWrapper">
                <div className="nameText">프로젝트 이름</div>
                <input
                  className="nameInput"
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="InputBox_linkBundle">
              <div>프로젝트 링크</div>
              <input
                className="InputBox_linkBundle-inputBox"
                name="project_url"
                value={projectLink}
                onChange={handleProjectLink}
              />
            </div>
            <div className="InputBox_descriptionBuncle">
              <div>프로젝트 설명</div>
              <textarea
                name="project_description"
                value={formData.project_description}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ShareDetailLeader-AddImage_Bundle">
            <div className="Addimage_title">프로젝트 사진</div>
            <img className="Addimage_box_1" src={imageUrl ?? nouserImage} />
            <input
              type="file"
              style={{ display: "none" }}
              id="image-upload"
              onChange={handleFileChange}
              className="Addimage_box_1"
            ></input>
            <div
              className="upload_btn"
              onClick={() => document.getElementById("image-upload")?.click()}
            >
              클릭
            </div>
            <div onClick={handleUpload}>업로드 하기</div>
            {/* TODO: 추후에 저장하기 에서 업로드하기로 변경 */}
          </div>
          <div className="ShareDetailLeader-Members_Bundle">
            <div>참여 인원</div>
            <div className="memberCard_Wrapper_Root">
              {formData.team_member?.map((id, idx) => (
                <div className="memberCard_Wrapper" key={id}>
                  <div className="memberCard_Wrapper-imgWrapper">
                    <img
                      src={formData.team_member_url[idx]}
                      alt="team member"
                    />
                  </div>
                  <div>
                    <div>{formData.team_member_name[idx]}</div>
                    <div>{formData.team_member_position[idx]}</div>
                  </div>
                </div>
              ))}
              <div className="AddMember" onClick={invalidateInstance}>
                초대하기
              </div>
            </div>
          </div>
          <div className="ShareDetailLeader-Footer_BtnWrapper">
            <div className="saveBtn">저장하기</div>
          </div>
        </div>
        {isModalOpen && modalName === "shareInviteModal" && (
          <RootModal modalName="shareInviteModal" />
        )}
      </div>
    </>
  );
};

export default ShareDetailLeader;
