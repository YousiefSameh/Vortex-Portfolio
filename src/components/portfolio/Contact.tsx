import { useState } from "react";
import { sendEmail } from "@services/email.services";
import Heading from "@components/shared/Heading";

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

const Contact = () => {
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

	return (
		<section className="contact py-12">
			<Heading
				title="تواصل معنا"
				subtitle="نحن في شركة فورتكس نؤمن بأهمية التواصل الفعّال والمباشر مع عملائنا. إذا كانت لديك أي استفسارات أو كنت بحاجة إلى دعم، فريقنا جاهز للاستماع إليك وتقديم أفضل الحلول."
			/>
			<form
				onSubmit={handleSubmit}
				className="container w-[90%] mx-auto mt-8 space-y-8"
			>
				<div className="fullname">
					<label
						htmlFor="fullname"
						className="text-xl font-bold text-white mb-4 block"
					>
						الأسم بالكامل
					</label>
					<input
						type="text"
						id="fullname"
						name="fullname"
						placeholder="أكتب الأسم الكامل هنا ..."
						autoComplete="off"
						className="w-full bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl placeholder:text-white text-white outline-none font-bold rounded-2xl focus:border-white"
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="email">
					<label
						htmlFor="email"
						className="text-xl font-bold text-white mb-4 block"
					>
						البريد الالكتروني
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="أكتب البريد الالكتروني هنا ..."
						autoComplete="off"
						className="w-full bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl placeholder:text-white text-white outline-none font-bold rounded-2xl focus:border-white"
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="phone flex flex-col md:flex-row items-center gap-6 w-full">
					<div className="whatsapp w-full">
						<label
							htmlFor="whatsapp"
							className="text-xl font-bold text-white mb-4 block"
						>
							رقم الواتساب
						</label>
						<input
							type="tel"
							id="whatsapp"
							name="whatsapp"
							placeholder="أكتب رقم الهاتف هنا ..."
							autoComplete="off"
							className="w-full bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl placeholder:text-white text-white outline-none font-bold rounded-2xl focus:border-white"
							disabled={isSubmitting}
						/>
					</div>
					<div className="telephone w-full">
						<label
							htmlFor="telephone"
							className="text-xl font-bold text-white mb-4 block"
						>
							رقم الهاتف
						</label>
						<input
							type="tel"
							id="telephone"
							name="telephone"
							placeholder="أكتب رقم الهاتف هنا ..."
							autoComplete="off"
							className="w-full bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl placeholder:text-white text-white outline-none font-bold rounded-2xl focus:border-white"
							disabled={isSubmitting}
						/>
					</div>
				</div>
				<div className="message">
					<label
						htmlFor="message"
						className="text-xl font-bold text-white mb-4 block"
					>
						رسالتك
					</label>
					<textarea
						id="message"
						name="message"
						rows={10}
						placeholder="أكتب رسالتك هنا ..."
						autoComplete="off"
						className="w-full bg-[#121212] border-[2px] border-white/20 px-8 py-4 text-xl placeholder:text-white text-white outline-none font-bold rounded-2xl focus:border-white"
						required
						disabled={isSubmitting}
					/>
				</div>
				<button
					type="submit"
					className="primary-btn w-full font-bold"
					disabled={isSubmitting}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{isSubmitting ? "جاري الإرسال..." : "أرسال"}
				</button>
				{isSubmitted && (
					<p className="text-green-500 text-center text-xl mt-4">
						تم إرسال الرسالة بنجاح!
					</p>
				)}
				{error && (
					<p className="text-red-500 text-center text-xl mt-4">{error}</p>
				)}
			</form>
		</section>
	);
};

export default Contact;
