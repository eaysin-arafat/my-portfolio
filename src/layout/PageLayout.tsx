const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-5 sm:mx-auto pt-16 pb-8">
      <div className={`max-w-5xl md:px-4 mx-auto space-y-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
