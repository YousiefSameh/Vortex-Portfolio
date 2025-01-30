import Heading from "@components/shared/Heading";
import useContact from "@hooks/useContact";
import { motion } from "framer-motion";
import { memo } from "react";

const variants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.5,
		},
	},
};

const Contact = memo(() => {
	const { isSubmitting, isSubmitted, error, handleSubmit } = useContact();
	return (
		<section className="contact py-12 overflow-x-hidden">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				<Heading
					title="تواصل معنا"
					subtitle="نحن في شركة فورتكس نؤمن بأهمية التواصل الفعّال والمباشر مع عملائنا. إذا كانت لديك أي استفسارات أو كنت بحاجة إلى دعم، فريقنا جاهز للاستماع إليك وتقديم أفضل الحلول."
				/>
			</motion.div>
			<motion.form
				variants={variants}
				initial="initial"
				whileInView="animate"
				onSubmit={handleSubmit}
				className="container w-[90%] mx-auto mt-8 space-y-8 overflow-x-hidden"
			>
				<motion.div className="fullname" variants={variants}>
					<label
						htmlFor="fullname"
						className="text-xl font-bold dark:text-white mb-4 block"
					>
						الأسم بالكامل
					</label>
					<input
						type="text"
						id="fullname"
						name="fullname"
						placeholder="أكتب الأسم الكامل هنا ..."
						autoComplete="off"
						className="input"
						required
						disabled={isSubmitting}
					/>
				</motion.div>
				<motion.div className="email" variants={variants}>
					<label
						htmlFor="email"
						className="text-xl font-bold dark:text-white mb-4 block"
					>
						البريد الالكتروني
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="أكتب البريد الالكتروني هنا ..."
						autoComplete="off"
						className="input"
						required
						disabled={isSubmitting}
					/>
				</motion.div>
				<motion.div
					className="phone flex flex-col md:flex-row items-center gap-6 w-full"
					variants={variants}
				>
					<div className="whatsapp w-full">
						<label
							htmlFor="whatsapp"
							className="text-xl font-bold dark:text-white mb-4 block"
						>
							رقم الواتساب
						</label>
						<input
							type="tel"
							id="whatsapp"
							name="whatsapp"
							placeholder="أكتب رقم الهاتف هنا ..."
							autoComplete="off"
							className="input"
							disabled={isSubmitting}
						/>
					</div>
					<div className="telephone w-full">
						<label
							htmlFor="telephone"
							className="text-xl font-bold dark:text-white mb-4 block"
						>
							رقم الهاتف
						</label>
						<input
							type="tel"
							id="telephone"
							name="telephone"
							placeholder="أكتب رقم الهاتف هنا ..."
							autoComplete="off"
							className="input"
							disabled={isSubmitting}
						/>
					</div>
				</motion.div>
				<motion.div className="message" variants={variants}>
					<label
						htmlFor="message"
						className="text-xl font-bold dark:text-white mb-4 block"
					>
						رسالتك
					</label>
					<textarea
						id="message"
						name="message"
						rows={10}
						placeholder="أكتب رسالتك هنا ..."
						autoComplete="off"
						className="input"
						required
						disabled={isSubmitting}
					/>
				</motion.div>
				<motion.button
					variants={variants}
					type="submit"
					className="primary-btn w-full font-bold"
					disabled={isSubmitting}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{isSubmitting ? "جاري الإرسال..." : "أرسال"}
				</motion.button>
				{isSubmitted && (
					<p className="text-green-500 text-center text-xl mt-4">
						تم إرسال الرسالة بنجاح!
					</p>
				)}
				{error && (
					<p className="text-red-500 text-center text-xl mt-4">{error}</p>
				)}
			</motion.form>
		</section>
	);
});

export default Contact;
