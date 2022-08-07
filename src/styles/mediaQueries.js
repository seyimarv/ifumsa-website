// @mixin respond($breakpoint) {
//     @if $breakpoint == phone {
//         @media only screen and (max-width: 37.5em) { @content };    //600px
//     }
//     @if $breakpoint == tab-port {
//         @media only screen and (max-width: 56.25em) { @content };     //900px
//     }
//     @if $breakpoint == tab-land {
//         @media only screen and (max-width: 75em) { @content };    //1200px
//     }
//     @if $breakpoint == big-desktop {
//         @media only screen and (min-width: 112.5em) { @content };    //1800
//     }
// }

const sizes = {
  smallPhone: "400px",
  phone: "37.5em",
  tabport: "56.25em",
  tabland: "75em",
  bigdesktop: "112.5em",
};

export const devices = {
  smallPhone: `(max-width: ${sizes.smallPhone})`,
  phone: `(max-width: ${sizes.phone})`,
  tabport: `(max-width: ${sizes.tabport})`,
  tabland: `(max-width: ${sizes.tabland})`,
  bigdesktop: `(max-width: ${sizes.bigdesktop})`,
};
