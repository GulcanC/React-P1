const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading4:
    "font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px]",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexJustify: "flex flex-row justify-between items-center",
  flexJustify2: "flex justify-between",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  justifyStart: "flex justify-start items-center flex-row",
  flexEnd: "flex justify-end items-center gap-3 flex-1",
  flexRowCol: "flex md:flex-row flex-col",
  flexrowcenter: "flex flex-row items-center",
  flexcol: "flex-1, flex-col",
  flex1: "flex-1",
  paddinglg: "xl:px-0",
  wfull: "w-full",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  py6: "py-[6px]",
  px4: "px-4",
  mb2: "mb-2",
  rounded10: "rounded-[10px]",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  mr0: "mr-0",
  mr10: "mr-10",
  mb4: "mb-4",
  m3: "m-3",
  icon1: "w-[32px] h-[32px]",
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

  // HERO COMPONENET
  menu: "p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar",
  ul: "list-none flex justify-end items-center flex-1 flex-col",
  ulli: "font-poppins font-normal text-[16px]",
  circle: "xs:flex hidden lg:mr-4 mr-0",
  bgclip:
    "bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-white",
  heroH1:
    "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white",
  heroH12:
    "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full",
  heroH1br: "sm:block hidden",
  heroH1p: "max-w-[470px] mt-5 text-white",
  heroImgRobot: "w-[100%] h-[100%] relative z-[5]",
  pinkGradient: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient",
  whiteGradient: "absolute z-[1] w-[80%] h-[80%] top-0 white__gradient",
  sshidden: "ss:hidden",

  // GETSTARTED
  getStarted:
    "w-[80px] h-[80px] rounded-full bg-gradient-to-r from-cyan-500 to-white p-[2px] cursor-pointer",
  getStartedDiv1: "flex-col bg-primary w-[100%] h-[100%] rounded-full",
  getStartedP: "font-poppins font-medium text-[12px] leading-[18px] mr-2",
  getStartedImg: "w-[13px] h-[13px] object-contain mt-[4px]",

  // STATS
  statSection: "flex-row flex-wrap sm:mb-20 mb-6",
  statSectionDiv: "flex-1 ",
  statP:
    "font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
