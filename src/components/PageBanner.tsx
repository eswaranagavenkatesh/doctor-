interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

const PageBanner = ({ title, subtitle, imageSrc }: PageBannerProps) => {
  return (
    <div className="relative w-full bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          {imageSrc && (
            <div className="hidden lg:block flex-1">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
