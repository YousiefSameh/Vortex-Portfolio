interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="heading text-center mx-auto">
      <h2 className="md:text-[65px] text-[35px] leading-none font-extrabold dark:text-white text-[var(--dark-color)] border-x-[6px] border-[var(--main-color)] w-fit md:px-12 px-6 mx-auto">
        {title}
      </h2>
      <p className="md:text-lg text-sm text-[var(--dark-color)] dark:font-normal font-bold dark:text-white w-[90%] mx-auto md:mt-4 mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
