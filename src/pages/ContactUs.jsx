export default function ContactUs() {
  const desktopStyle = {
    backgroundColor: "ButtonFace",
    paddingBlock: "20px",
    paddingInline: "130px",
  };

  const mobileStyle = {
    backgroundColor: "ButtonFace",
    paddingBlock: "20px",
    paddingInline: "30px",
  };

  const callStyle = {
    display: "block",
  };
  return (
    <div style={window.innerWidth > 600 ? desktopStyle : mobileStyle}>
      <h2>تماس با ما</h2>
      <p>شماه های تماس ما</p>
      <p3 style={callStyle}>۰۲۱-۳۳۱۱۱۱۱۱</p3>
      <p3 style={callStyle}>۰۲۱-۳۳۲۲۲۲۲۲</p3>
      <p3 style={callStyle}>۰۲۱-۳۳۳۳۳۳۳۳</p3>
      <p3 style={callStyle}>۰۹۱۲-۳۳۳۳۳۳۳</p3>
      <p3 style={callStyle}>۰۹۲۱-۳۳۳۳۳۳۳</p3>
    </div>
  );
}
