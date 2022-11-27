
import { ClassAttributes, AnchorHTMLAttributes,HTMLAttributes } from "react";
import CustomImage from "./CustomImage";

export const MDXBlogComponets = {
  img: (props: any) => <CustomImage {...props} />,
  h3: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-3xl mt-6 font-bold " {...props} />
  ),
  h4: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-3xl mt-6 font-bold underline" {...props} />
  ),
  a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-emerald-500 font-bold hover:text-purple-700 transition-all duration-300"
      {...props}
    />
  ),
  li: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLLIElement> & HTMLAttributes<HTMLLIElement>) => (
    <li className="text-md md:text-xl mt-6" {...props} />),
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) => <p className="text-md md:text-xl mt-6" {...props} />,
};
