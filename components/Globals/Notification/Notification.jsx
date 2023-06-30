import Wrapper from "./notification.styled";

const Notification = (message) => {
  return (
    <Wrapper className="notificationCont">
      <div className="start">Before the video!</div>
      <div className="message">{message}</div>
    </Wrapper>
  );
};

export default Notification;
