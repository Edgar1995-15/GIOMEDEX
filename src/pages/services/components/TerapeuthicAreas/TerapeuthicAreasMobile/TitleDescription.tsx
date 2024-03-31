import { useState } from 'react';
import Typography from '../../../../../components/Typography';

const TitleDescription = ({ title, titleColor, description }) => {
  const initialSlicedDescription = description.substring(0, description.indexOf('.') + 1);
  const [expanded, setExpanded] = useState(true);
  const [finalDescription, setFinalDescription] = useState(initialSlicedDescription);

  const readMore = () => {
    setExpanded(!expanded);
    setFinalDescription(description);
  };

  return (
    <div className="mt-6">
      <Typography
        content={title}
        size="text-2xl"
        variant="font-extrabold"
        color={`text-${titleColor}`}
      />
      <Typography
        content={finalDescription}
        color="text-white"
        className="mt-3 md:mt-4 md:text-justify"
      />
      {expanded && (
        <div
          onClick={readMore}
          className="text-right text-base font-normal text-[#00A676] underline underline-offset-2 hover:cursor-pointer"
        >
          Read more
        </div>
      )}
    </div>
  );
};

export default TitleDescription;
