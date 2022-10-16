import Image, { ImageProps } from "next/image";


const CustomImage = ({src}: {src:string}) => {
  return (
      <img width={720} height={220}  src={src}  alt="Resaltado" />
  );
};

export default CustomImage;
