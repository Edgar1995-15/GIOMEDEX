import Typography from '../../../../components/Typography';

const IconTitleInfoComponent = ({
  iconId,
  iconSrc,
  titleColor,
  title,
  descriptionFirst,
  descriptionSecond
}) => {
  return (
    <div className="mx-auto w-full px-2 md:px-0" key={title}>
      <div className="flex items-center gap-x-2">
        <img id={iconId} src={iconSrc} alt={iconId} />
        <Typography
          content={title}
          size="text-2xl"
          variant="font-extrabold"
          color={`text-${titleColor}`}
        />
      </div>
      <Typography content={descriptionFirst} className="mt-4 text-justify" />
      <Typography content={descriptionSecond} className="mt-4 text-justify" />
    </div>
  );
};

export default IconTitleInfoComponent;
