import Heading from "@components/shared/Heading"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <section className="projects py-12">
      <Heading title="اعمالنا و مشروعاتنا" subtitle="في شركة فورتكس، نحن نصنع الفرق من خلال تحويل الأفكار إلى إنجازات. نعمل على تقديم حلول مبتكرة ومشروعات متكاملة تلبي احتياجات عملائنا وتفوق توقعاتهم."/>
      <div className="container w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-12">
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <div key={project} className="project bg-[#222] rounded-2xl">
            <div className="image h-[140px] relative">
              <span className="w-full h-full bg-white absolute top-0 left-0 rounded-t-2xl"></span>
            </div>
            <div className="text p-3">
              <h4 className="text-[22px] text-white font-bold">موقع التجارة الالكترونية (TechnoBay)</h4>
              <p className="text-white text-sm">تيكنو باي هو متجر إلكتروني يقدم مجموعة واسعة من الإلكترونيات، الأدوات، والإكسسوارات.</p>
              <div className="uses flex items-center mt-2">
                <span className="font-semibold text-white ml-3">بأستخدام: </span>
                <div className="cards flex items-center gap-2">
                  <div className="card text-[13px] text-blue-400 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold">React</div>
                  <div className="card text-[13px] text-purple-600 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold">Ui Ux</div>
                  <div className="card text-[13px] text-neutral-200 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold">Express</div>
                  <div className="card text-[13px] text-green-400 px-3 py-1 bg-neutral-900 shadow w-fit rounded-full font-bold">MongoDB</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="primary-btn font-bold outline-none mx-auto">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        والمزيد في Github <FaGithub className="text-3xl"/>
      </button>
    </section>
  )
}

export default Projects