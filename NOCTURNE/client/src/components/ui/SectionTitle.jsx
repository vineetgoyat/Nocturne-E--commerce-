const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[8px] text-[#C9A227] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl mt-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;