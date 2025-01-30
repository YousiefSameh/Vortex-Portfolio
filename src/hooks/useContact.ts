import { useState } from "react";
import { sendEmail } from "@services/email.services";

interface FormElements extends HTMLFormControlsCollection {
  fullname: HTMLInputElement;
  email: HTMLInputElement;
  whatsapp: HTMLInputElement;
  telephone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements;
}

const useContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<ContactForm>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail(e.currentTarget);
      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isSubmitted, error, handleSubmit };
};

export default useContact;