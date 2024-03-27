const PageLayout = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-5 sm:mx-auto pt-32">
      <p className=" font-bold text-blue-900 pb-4 text-center  text-3xl">
        {title}
      </p>

      <h1 className="font-bold text-3xl text-center"></h1>
      <div className={`max-w-5xl md:px-4 pt-8 mx-auto space-y-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
