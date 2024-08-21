import { Dimensions } from "react-native";
const { height , width } = Dimensions.get('window')

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const COLORS = {

    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
      },
      dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,

      },

    primary: "#0504aa",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",


    tintColorLight: '#0504aa', // Royal blue
    tintColorDark: '#fff',

  darkGray: '#333333',
  green: '#8BC34A',
    lightGray: "#F5F5F5",
    gray: "#83829A",
    gray2: "#C1C0C8",
    gray3: "#d3d3d3",

    offwhite: "#F3F4F8",
    white: "#FFFFFF",
    black: "#000000",
    blue: "#0504aa",
    red: "#E81E4D",
    orange: "FF5733",
    // green: "#00C135",
    lightWhite: "#FAFAFC",
    backgroundLight: "#F0F0F3",
    backgroundMedium: "#B9B9B9",
    backgroundDark: "#77777",
}



// const tintColorLight = '#0504aa'; // Royal blue
// const tintColorDark = '#fff';

// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
}

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5
    }
}

export { COLORS, SIZES, SHADOWS }