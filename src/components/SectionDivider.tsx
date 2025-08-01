const SectionDivider = ({ imageUrl, reverse = false }: { imageUrl: string, reverse?: boolean }) => {
  return (
    <div className="relative h-32 overflow-hidden">
      <div 
        className={`absolute inset-0 opacity-30 ${reverse ? 'rotate-180' : ''}`}
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/50" />
    </div>
  );
};

export default SectionDivider;