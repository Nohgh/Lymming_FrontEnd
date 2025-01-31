import useModalClose from "../../../../hooks/useModalClose";
import useModalStore from "../../../../store/useModalState";
import "./ShareEndModal.scss";
const ShareEndModal = () => {
  const { modalRef } = useModalClose();
  const { closeModal } = useModalStore();
  const clickEndProject = () => {
    //TODO: 서버측으로 공유페이지 종료를 전달하는 로직 작성
    // const
    closeModal();
  };
  return (
    <div ref={modalRef} className="ShareEndModal">
      <div className="ShareEndModal-head">
        <svg
          className="warning_icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
      </div>
      <div className="ShareEndModal-body">
        <div className="info1">프로젝트를 종료하시겠습니까?</div>
        <div className="info2">종료한 이후에는 수정할 수 없습니다.</div>
        {/* 이후, 팀원 평가하기 모달 */}
      </div>
      <div className="ShareEndModal-foot">
        <div className="shareEndBtn btn1" onClick={closeModal}>
          이전
        </div>
        <div className="shareEndBtn btn2" onClick={clickEndProject}>
          종료하기
        </div>
      </div>
    </div>
  );
};

export default ShareEndModal;
