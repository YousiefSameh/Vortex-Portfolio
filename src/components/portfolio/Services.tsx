import { Suspense, lazy } from "react";
import Heading from "@components/shared/Heading";

const DotLottieReact = lazy(() => import("@lottiefiles/dotlottie-react").then(module => ({ default: module.DotLottieReact })));

const Services = () => {
	return (
		<section className="services py-12">
			<div className="container mx-auto">
				<Heading
					title="خدماتنا"
					subtitle="من خلال حلول برمجية وتصميمات إبداعية، نقدم خدمات تطوير المواقع، تصميم المواقع، والدعم الفني، لمساعدتكم على النمو والتفوق في مجالاتكم."
				/>
				<div className="container w-[90%] mx-auto mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
					{[...Array(6)].map((_, index) => (
						<div key={index} className="card relative before:rounded-2xl bg-[#222] p-3 pt-0 rounded-2xl border-t-[6px] border-[var(--main-color)] hover:scale-105 transition-all cursor-pointer">
							<Suspense fallback={<div>Loading...</div>}>
								<DotLottieReact
									src="https://lottie.host/5fd36a78-2248-46c2-a9ba-3f6b58dad3b2/wQZsmfDJK0.lottie"
									className="w-[130px] h-[130px]"
									width={"130px"}
									height={"130px"}
									loop
									autoplay
								/>
							</Suspense>
							<h5 className="text-2xl font-bold text-white -mt-4">تصميم المواقع الإلكترونية</h5>
							<p className="text-white py-2">موقعك الإلكتروني يُعد الوسيلة المثلى لعرض أفكارك ومنتجاتك والتحدث عنك. لتحقيق ذلك، يجب أن يتميز تصميمه بالجاذبية والسهولة لتوفير تجربة مميزة</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
