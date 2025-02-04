// type ImageType =
//   | {
//       url: string;
//       public_id?: string;
//     }
//   | File;

// export type IServices = {
//   _id?: string;
//   image?: ImageType;
//   title: {
//     ar: string;
//     en: string;
//   };
//   description: {
//     ar: string;
//     en: string;
//   };
//   icon?: JSX.Element;
// };

export type IServices = {
  id: number;
  icon: React.ReactNode;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
};
