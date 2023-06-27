import CustomCard from "../components/CustomCard";
export default function Home() {
  return (
    <>
      <h1>This Is Home</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: "20",
        }}
        id="test cardss"
      >
        <CustomCard
          title="سلام من حمیدم"
          description="من میخام راجع به حمید حرف بزنم"
          imageSrc={require("../images/contactor1.jpg")}
        />
        <CustomCard
          title="sssssssss"
          description="ddddd"
          imageSrc={require("../images/logo.jpg")}
        />
        <CustomCard
          title="sssssssss"
          description="ddddd"
          imageSrc={require("../images/contactor2.jpg")}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: "20",
        }}
        id="test cardss"
      >
        <CustomCard
          title="sssssssss"
          description="ddddd"
          imageSrc={require("../images/contactor1.jpg")}
        />
        <CustomCard
          title="sssssssss"
          description="ddddd"
          imageSrc={require("../images/logo.jpg")}
        />
        <CustomCard
          title="sssssssss"
          description="ddddd"
          imageSrc={require("../images/contactor2.jpg")}
        />
      </div>
      <h5>
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک
        برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
        صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده
        بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و
        اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما
        نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال
        کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات
        ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و
        صفحه‌بندی را به پایان برند.لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem
        ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیکز
      </h5>
    </>
  );
}
