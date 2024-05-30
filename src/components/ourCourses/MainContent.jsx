import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import { useSendCourseMutation } from "../../store/chatBoot/ChatBotApiSlice";
import { useTranslation } from "react-i18next";
import UniLoading from "../../components/loading/Loading";

function MainOurCoursesComponent({ setSucess, mainDescription }) {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [CourseType, setCourseType] = useState({
    value: "Private",
    label: "Private",
  });
  const [CourseLevel, setCourseLevel] = useState({
    value: "Beginner",
    label: "Beginner",
  });
  const [formData, setFormData] = useState({
    name: "",
    wPhone: "",
    phone: "",
    email: "",
    description: "",
  });
  const [sendCourse, { isSuccess, isLoading, error, isError }] =
    useSendCourseMutation();

  const optionsLevel = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate " },
    { value: "Expert", label: "Expert " },
  ];
  const options = [
    { value: "Private", label: "Private" },
    { value: "Group", label: "Group " },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      maxWidth: 358, // Set the width of the select
      minWidth: 358, // Set the width of the select
      height: 45, // Set the height of the select
      background: "transparent", // Set the height of the select
      boxShadow: "none",
      outlineColor: "white",
      borderColor: state.isFocused ? "white" : "white", // Change background color when focused
      "&:hover": {
        borderColor: state.isFocused ? "white" : "white", // Change background color on hover
      },
    }),
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      formData?.name !== "" &&
      formData?.wPhone !== "" &&
      formData?.email !== ""
    ) {
      await sendCourse({
        data: {
          messageObj: {
            courseName: "Programming",
            type: CourseType.value,
            currentLevel: CourseLevel.value,
            name: formData?.name,
            wPhone: formData?.wPhone,
            phone: formData?.phone,
            email: formData?.email,
            description: formData?.description,
          },
        },
      }).unwrap();
    } else {
      toast.error("name, whatsapp number, email fileds  is required");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        wPhone: "",
        phone: "",
        email: "",
        description: "",
      });
    }
    if (isError) {
      // @ts-ignore
      toast.error(error?.data?.error);
    }
    if (isSuccess) {
      setSucess(true);
    } else {
      setSucess(false);
    }
  }, [isSuccess, isError, isSuccess]);

  return (
    <>
      {isLoading ? (
        <UniLoading />
      ) : (
        <div>
          <div className="programming_center">
            <h4>
              {i18n.language === "en" && "Course Details"}
              {i18n.language === "ar" && "تفاصيل الدورة"}
            </h4>
            <p>
              {(i18n.language === "en" && mainDescription?.en) || ""}
              {(i18n.language === "ar" && mainDescription?.ar) || ""}
            </p>
          </div>
          <div className="programming_bottom">
            <h4>
              {i18n.language === "en" && "Fill Your personal Details"}
              {i18n.language === "ar" && "املأ بياناتك الشخصية"}
            </h4>

            <div className="main-group">
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "Your Name*"}
                  {i18n.language === "ar" && "اسمك*"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={
                    i18n.language === "en"
                      ? "Enter your full name"
                      : "اكتب اسمك"
                  }
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "Your WhatsApp Number*"}
                  {i18n.language === "ar" && "رقم الواتس اب الخاص بك*"}
                </label>
                <input
                  type="text"
                  name="wPhone"
                  value={formData.wPhone}
                  onChange={handleChange}
                  placeholder={
                    i18n.language === "en"
                      ? "Enter your WhatsApp number with country code"
                      : "أدخل رقم واتساب الخاص بك مع رمز البلد"
                  }
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "Your Phone Number"}
                  {i18n.language === "ar" && "رقم تليفونك"}
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={
                    i18n.language === "en"
                      ? "Enter your phone number with country code"
                      : "أدخل رقم هاتفك مع رمز البلد"
                  }
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "  Course Type*"}
                  {i18n.language === "ar" && "دورة كتابية*"}
                </label>
                <Select
                  styles={customStyles}
                  value={CourseType}
                  onChange={(e) => setCourseType(e)}
                  options={options}
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "Your Email*"}
                  {i18n.language === "ar" && "بريدك الالكتروني*"}
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    i18n.language === "en"
                      ? "Enter your email address"
                      : "عنوان البريد الإلكتروني"
                  }
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "write a description"}
                  {i18n.language === "ar" && "اكتب وصفا"}
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder={
                    i18n.language === "en"
                      ? "Provide a brief description"
                      : "قدم وصفا موجزا"
                  }
                />
              </div>
              <div className="groupp_1">
                <label htmlFor="">
                  {i18n.language === "en" && "Choose a level*"}
                  {i18n.language === "ar" && "اختر المستوى*"}
                </label>
                <Select
                  styles={customStyles}
                  value={CourseLevel}
                  onChange={(e) => setCourseLevel(e)}
                  options={optionsLevel}
                />
              </div>
              <div className="programming_bottom_right">
                <div className="">
                  <button
                    className="button_1"
                    onClick={() => navigate("/contact")}
                  >
                    {i18n.language === "en" && "Connect Us Directly"}
                    {i18n.language === "ar" && "تواصل معنا مباشرة"}
                  </button>
                </div>
                <button
                  style={{
                    cursor: isLoading ? "not-allowed" : "pointer",
                    opacity: isLoading ? 0.5 : 1,
                  }}
                  onClick={handleSubmit}
                  className="button_2"
                >
                  {i18n.language === "en" && "Get Your Course !"}
                  {i18n.language === "ar" &&
                    "احصل على الدورة التدريبية الخاصة بك!"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainOurCoursesComponent;
