const RootLayout = ({
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-5 sm:mx-auto">
      <div
        className={`max-w-5xl md:px-4 pt-8 mx-auto space-y-10  ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
