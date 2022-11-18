const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexJustify: "flex justify-between items-center",
  flexJustify2: "flex justify-between",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-end items-center gap-3 flex-1",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  mr0: "mr-0",
  mr10: "mr-10",
  mb4: "mb-4",
  // for large secreens until small 768px, Heihgt is 5rem, after 768px 15rem
  // bu onemli eger buyuk ekransa 768px e kadar, 5re, 768px den kucukse 15rem
  pytoggle: "sm:h-[5rem] h-[15rem]",
  mtop: "sm:mt-[1rem] mt-[-7rem]",

  // if the size is smaller than 768px, hide the navbar list items
  // if I write sm:hidden flex, it will hide them until 768px, but it will show them for screen taht smaller than 768px
  smallHidden: "sm:flex hidden",

  // small screen toggle
  toggle: "sm:hidden flex flex-1 justify-end items-center cursor-pointer",
  logoSize: "w-[124px] h-[32px]",
  toggleSize: "w-[28px] h-[28px] ",
  cursor: "cursor-pointer",

  menu: "p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar",

  ul: "list-none flex justify-end items-center flex-1 flex-col",
  ulli: "font-poppins font-normal text-[16px]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
