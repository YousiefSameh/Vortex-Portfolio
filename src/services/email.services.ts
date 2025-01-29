import emailjs from "@emailjs/browser";

export const sendEmail = async (formElement: HTMLFormElement) => {
  try {
    const response = await emailjs.sendForm(
      "service_4rg99kq",
      "template_l27m4fk",
      formElement,
      "Aqibf1VHxHC--MgHw"
    );
    return response;
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : JSON.stringify(error, null, 2);
    throw new Error(`فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى. (${errorMessage})`);
  }
};