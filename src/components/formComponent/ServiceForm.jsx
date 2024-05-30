import { useEffect, useState } from "react";
import { useCreateServiceMutation } from "../../store/chatBoot/ChatBotApiSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ServiceForm({ submitService, setSubmitService, type, setLoading }) {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    wPhone: "",
    phone: "",
    email: "",
    description: "",
  });
  const [createService, { isSuccess, isLoading, error, isError }] =
    useCreateServiceMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await createService({
      data: {
        messageObj: {
          services: type,
          name: formData?.name,
          wPhone: formData?.wPhone,
          phone: formData?.phone,
          email: formData?.email,
          description: formData?.description,
        },
      },
    }).unwrap();
  };

  useEffect(() => {
    if (submitService) {
      if (
        formData?.name !== "" &&
        formData?.wPhone !== "" &&
        formData?.email !== ""
      ) {
        handleSubmit();
        setSubmitService(false);
      } else {
        toast.error("name, whatsapp number, email fileds  is required");
        setSubmitService(false);
      }
    }
  }, [submitService]);

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: "",
        wPhone: "",
        phone: "",
        email: "",
        description: "",
      });
      toast.success(`Service created successfully`);
    }
    if (isError) {
      // @ts-ignore
      toast.error(error?.data?.error);
    }
    if (isLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputt_1">
        <label htmlFor="name">
          {i18n.language === "en" && "Your Name"}
          {i18n.language === "ar" && "اسمك"}
        </label>
        <input
          required
          className="input"
          type="text"
          placeholder={
            i18n.language === "en" ? "Enter your full name" : "اكتب اسمك"
          }
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="inputt_1">
        <label style={{ whiteSpace: "nowrap" }} htmlFor="wPhone">
          {i18n.language === "en" && "Your WhatsApp Number"}
          {i18n.language === "ar" && "رقم الواتساب الخاص بك"}
        </label>
        <input
          required
          // placeholder="Enter your WhatsApp number with country code"
          placeholder={
            i18n.language === "en"
              ? "Enter your WhatsApp number with country code"
              : "أدخل رقم واتساب الخاص بك مع رمز البلد"
          }
          className="input"
          type="text"
          id="wPhone"
          name="wPhone"
          value={formData.wPhone}
          onChange={handleChange}
        />
      </div>
      {/* <div className="inputt_1">
            <label style={{whiteSpace:"nowrap"}} htmlFor="phone">
              {i18n.language === "en" && "Your Phone Number"}
                    {i18n.language === "ar" && "رقم تليفونك"}
              </label>
            <input
              placeholder="0123 456 789"
              className="input"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div> */}

      <div className="inputt_1">
        <label htmlFor="email">
          {i18n.language === "en" && "Your Email"}
          {i18n.language === "ar" && "بريدك الالكتروني"}
        </label>
        <input
          required
          placeholder={
            i18n.language === "en"
              ? "Enter your email address "
              : "عنوان البريد الإلكتروني"
          }
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="inputt_1" style={{ marginTop: "25px" }}>
        <label htmlFor="description">
          {i18n.language === "en" &&
            "Write a short Description about Your request"}
          {i18n.language === "ar" && "اكتب وصفًا قصيرًا عن طلبك"}
        </label>
        <textarea
          placeholder={
            i18n.language === "en"
              ? "Provide a brief description"
              : "اكتب وصف قصير"
          }
          className="textarea"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
    </form>
  );
}

export default ServiceForm;
