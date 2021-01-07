const defaultColors = {
  blue05: "hsl(208,100%,98%)",
  blue10: "hsl(208,100%,92%)",
  blue20: "hsl(208,100%,82%)",
  blue30: "hsl(208,100%,71%)",
  blue40: "hsl(208,100%,61%)",
  blue50: "hsl(208,100%,50%)",
  blue60: "hsl(208,100%,40%)",
  blue70: "hsl(208,100%,35%)",
  blue80: "hsl(208,100%,30%)",
  blue90: "hsl(208,100%,25%)",
  blue95: "hsl(208,100%,14%)",
  gray05: "hsl(220,11%,98%)",
  gray10: "hsl(220,11%,92%)",
  gray20: "hsl(220,11%,84%)",
  gray30: "hsl(220,11%,75%)",
  gray40: "hsl(220,11%,67%)",
  gray50: "hsl(220,11%,58%)",
  gray60: "hsl(220,11%,50%)",
  gray70: "hsl(220,11%,41%)",
  gray80: "hsl(220,11%,33%)",
  gray90: "hsl(220,11%,25%)",
  gray95: "hsl(220,11%,18%)",
  green05: "hsl(123,41%,98%)",
  green10: "hsl(123,41%,92%)",
  green20: "hsl(123,41%,83%)",
  green30: "hsl(123,41%,73%)",
  green40: "hsl(123,41%,64%)",
  green50: "hsl(123,41%,54%)",
  green60: "hsl(123,41%,45%)",
  green70: "hsl(123,41%,38%)",
  green80: "hsl(123,41%,32%)",
  green90: "hsl(123,41%,25%)",
  green95: "hsl(123,41%,15%)",
  orange05: "hsl(28,100%,98%)",
  orange10: "hsl(28,100%,92%)",
  orange20: "hsl(28,100%,84%)",
  orange30: "hsl(28,100%,75%)",
  orange40: "hsl(28,100%,67%)",
  orange50: "hsl(28,100%,58%)",
  orange60: "hsl(28,100%,50%)",
  orange70: "hsl(28,100%,41%)",
  orange80: "hsl(28,100%,33%)",
  orange90: "hsl(28,100%,25%)",
  orange95: "hsl(28,100%,13%)",
  pink05: "hsl(324,100%,98%)",
  pink10: "hsl(324,100%,92%)",
  pink20: "hsl(324,100%,84%)",
  pink30: "hsl(324,100%,76%)",
  pink40: "hsl(324,100%,68%)",
  pink50: "hsl(324,100%,60%)",
  pink60: "hsl(324,100%,52%)",
  pink70: "hsl(324,100%,43%)",
  pink80: "hsl(324,100%,34%)",
  pink90: "hsl(324,100%,25%)",
  pink95: "hsl(324,100%,13%)",
  purple05: "hsl(266,61%,98%)",
  purple10: "hsl(266,61%,92%)",
  purple20: "hsl(266,61%,84%)",
  purple30: "hsl(266,61%,75%)",
  purple40: "hsl(266,61%,67%)",
  purple50: "hsl(266,61%,59%)",
  purple60: "hsl(266,61%,51%)",
  purple70: "hsl(266,61%,42%)",
  purple80: "hsl(266,61%,34%)",
  purple90: "hsl(266,61%,25%)",
  purple95: "hsl(266,61%,17%)",
  red05: "hsl(0,87%,98%)",
  red10: "hsl(0,87%,92%)",
  red20: "hsl(0,87%,82%)",
  red30: "hsl(0,87%,72%)",
  red40: "hsl(0,87%,61%)",
  red50: "hsl(0,87%,51%)",
  red60: "hsl(0,87%,41%)",
  red70: "hsl(0,87%,36%)",
  red80: "hsl(0,87%,30%)",
  red90: "hsl(0,87%,25%)",
  red95: "hsl(0,87%,14%)",
  yellow05: "hsl(49,100%,98%)",
  yellow10: "hsl(49,100%,92%)",
  yellow20: "hsl(49,100%,84%)",
  yellow30: "hsl(49,100%,76%)",
  yellow40: "hsl(49,100%,69%)",
  yellow50: "hsl(49,100%,61%)",
  yellow60: "hsl(49,100%,53%)",
  yellow70: "hsl(49,100%,44%)",
  yellow80: "hsl(49,100%,34%)",
  yellow90: "hsl(49,100%,25%)",
  yellow95: "hsl(49,100%,12%)",
};

module.exports = ({
  fontFamily = "sans-serif",
  colors = defaultColors,
} = {}) => ({
  variables: {
    ...colors,

    // length
    len1: "0.0625rem",
    len2: "0.125rem",
    len4: "0.25rem",
    len8: "0.5rem",
    len12: "0.75rem",
    len16: "1rem",
    len20: "1.25rem",
    len24: "1.5rem",
    len32: "2rem",
    len40: "2.5rem",
    len48: "3rem",
    len56: "3.5rem",
    len64: "4rem",
    len80: "5rem",
    len96: "6rem",
    len112: "7rem",
    len128: "8rem",
    len144: "9rem",
    len160: "10rem",
    len176: "11rem",
    len192: "12rem",
    len224: "14rem",
    len256: "16rem",
    len320: "20rem",
    len384: "24rem",
    len448: "28rem",
    len512: "32rem",

    // border thickness
    border1: "0.0625rem",
    border2: "0.125rem",
    border4: "0.25rem",
    border8: "0.5rem",

    // typography
    font: {
      h1: `400 3.2rem/4rem ${
        fontFamily.h1 || fontFamily.default || fontFamily
      }`,
      h2: `400 2.4rem/3rem ${
        fontFamily.h2 || fontFamily.default || fontFamily
      }`,
      h3: `400 2.0rem/2.5rem ${
        fontFamily.h3 || fontFamily.default || fontFamily
      }`,
      h4: `400 1.6rem/2rem ${
        fontFamily.h4 || fontFamily.default || fontFamily
      }`,
      h5: `700 1.2rem/1.5rem ${
        fontFamily.h5 || fontFamily.default || fontFamily
      }`,
      h6: `700 0.8rem/1rem ${
        fontFamily.h6 || fontFamily.default || fontFamily
      }`,
      body1: `400 1rem/1.5rem ${
        fontFamily.body1 || fontFamily.default || fontFamily
      }`,
      body2: `400 0.75rem/1.5rem ${
        fontFamily.body2 || fontFamily.default || fontFamily
      }`,
      caption: `400 0.625/1rem ${
        fontFamily.caption || fontFamily.default || fontFamily
      }`,
      button: `500 0.875rem/0.875rem ${
        fontFamily.button || fontFamily.default || fontFamily
      }`,
    },

    // corner radius
    "border-radius": {
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },

    // shadows
    "box-shadow": {
      sm: "0 0.125rem 0.125rem rgba(0,0,0,0.1)",
      md: "0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.08)",
      lg:
        "0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.08),0 0.75rem 0.75rem rgba(0,0,0,0.06),0 1rem 1rem rgba(0,0,0,0.04)",
      xl:
        "0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.09),0 0.75rem 0.75rem rgba(0,0,0,0.08),0 1rem 1rem rgba(0,0,0,0.07),0 1.25rem 1.25rem rgba(0,0,0,0.06),0 1.5rem 1.5rem rgba(0,0,0,0.05)",
      xxl:
        "0 0.25rem 0.25rem rgba(0,0,0,0.1),0 0.5rem 0.5rem rgba(0,0,0,0.09),0 0.75rem 0.75rem rgba(0,0,0,0.08),0 1rem 1rem rgba(0,0,0,0.07),0 1.25rem 1.25rem rgba(0,0,0,0.06),0 1.5rem 1.5rem rgba(0,0,0,0.05),0 1.75rem 1.75rem rgba(0,0,0,0.04),0 2rem 2rem rgba(0,0,0,0.03)",
      inner: "inset 0 0.125rem 0.25rem rgba(0,0,0,0.1)",

      // emulated outlines
      ...Object.entries(colors)
        .map(([key, value]) => [
          `outline-offset-${key}`,
          `0 0 0 0.125rem ${value}`,
        ])
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}),
      ...Object.entries(colors)
        .map(([key, value]) => [
          `outline-ring-${key}`,
          `0 0 0 0.25rem ${value}`,
        ])
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}),
    },

    // outlines
    outline: {
      none: "0.125rem solid transparent", // accessible alternative to "none"
    },
  },

  atScopes: {
    sm: "media screen and (max-width:37.49999em)",
    md: "media screen and (min-width:37.5em) and (max-width:62.49999em)",
    lg: "media screen and (min-width:62.5em)",
  },
});
