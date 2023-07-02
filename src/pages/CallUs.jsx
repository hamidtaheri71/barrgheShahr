export default function CallUs() {
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
  return (
    <div style={window.innerWidth > 600 ? desktopStyle : mobileStyle}>
      <h2> شماره های تماس ما:</h2>
      <p>این صفحه شماره های ماست.</p>
      <p>02133999884</p>
    </div>
  );
}
