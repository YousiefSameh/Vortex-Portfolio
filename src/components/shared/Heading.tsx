interface HeadingProps {
  title: string;
  subtitle: string
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="heading text-center mx-auto">
      <h2 className="md:text-[80px] text-[60px] leading-none font-extrabold text-white border-x-[6px] border-[var(--main-color)] w-fit px-12 mx-auto">{title}</h2>
      <p className="md:text-lg text-sm font-normal text-white md:w-[85%] w-[90%] mx-auto md:mt-2 mt-4">{subtitle}</p>
    </div>
  )
}

export default Heading