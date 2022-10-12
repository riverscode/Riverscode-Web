import Image, { ImageProps } from "next/image";


const CustomImage = (props: ImageProps) => {
  return (
    <div className=" flex justify-center p-8 custom-box-shadow bg-black mb-6">
      <Image width={20} height={20} {...props} className="rounded-lg" alt="Resaltado" />
    </div>
  );
};

export default CustomImage;
