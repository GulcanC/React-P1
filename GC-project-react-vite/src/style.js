const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexJustify: "flex justify-between items-center",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-end items-center gap-3 flex-1",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  // if the size is smaller than 768px, hide the navbar list items
  // if I write sm:hidden flex, it will hide them until 768px, but it will show them for screen taht smaller than 768px
  smallHidden: "sm:flex hidden",

  // small screen toggle
  toggle: "sm:hidden flex flex-1 justify-end items-center cursor-pointer",
  logoSize: "w-[124px] h-[32px]",
  toggleSize: "w-[28px] h-[28px] ",
  cursor: "cursor-pointer",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
