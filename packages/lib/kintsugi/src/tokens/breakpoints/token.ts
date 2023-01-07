// https://testsigma.com/blog/css-breakpoints/
export const breakpointSize = {
  XS: 480, // Mobile devices
  S: 768, // iPads, Tablets
  M: 1024, // Small screens, laptops
  L: 1200, // Desktops, large screens
  XL: 1536, // Desktops, extra large screens
  XXL: 1920, // High-resolution laptop
};

export const breakpoint = {
  onlyXS: `(max-width: ${breakpointSize.XS}px)`,
  upXS: `(min-width: calc(${breakpointSize.XS}px + 1px))`,
  upS: `(min-width: calc(${breakpointSize.S}px + 1px))`,
  upM: `(min-width: calc(${breakpointSize.M}px + 1px))`,
  upL: `(min-width: calc(${breakpointSize.L}px + 1px))`,
  upXL: `(min-width: calc(${breakpointSize.XL}px + 1px))`,
  upXXL: `(min-width: calc(${breakpointSize.XXL}px + 1px))`,
};
