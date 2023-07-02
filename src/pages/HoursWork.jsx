export default function HoursWork() {
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
      <h2> ساعت های کاری ما</h2>
      <p>این صفحه ساعتهای کاری ماست.</p>
      <p>ما در صبح از ۹ الی ۱ در خدمت شما عزیزان هستیم</p>
      <p>ما در عصر از ۲ الی ۱۸ در خدمت شما عزیزان هستیم</p>
    </div>
  );
}
