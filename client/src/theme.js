
export const tokensDark = {
grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f2f2f2",
    100: "#e0e0e0",
    150: "#dadada",
    200: "#c2c2c2",
    250: "#b5b5b5",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    750: "#313131",
    800: "#292929",
    850: "#181818",
    900: "#141414",
    1000: "#000000"
},
primary: {
    100: "#d0d1e8",
    150: "#c6c8e4",
    200: "#a0a4d2",
    250: "#8d91c9",
    300: "#7176bb",
    400: "#4149a5",
    500: "#121b8e",
    600: "#0e1672",
    700: "#0b1055",
    800: "#070b39",
    900: "#04051c"
},
secondary: {
    100: "#d9d1e6",
    150: "#c2b5d7",
    200: "#b3a3cd",
    250: "#a491c3",
    300: "#8d75b4",
    400: "#67479b",
    500: "#411982",
    600: "#341468",
    700: "#270f4e",
    750: "#2a1053",
    800: "#1a0a34",
    850: "#15082a",
    900: "#0d051a"
},
greenAccent: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922"
},
redAccent: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f"
},
indigoAccent: {
    100: "#e1e2fe",
    200: "#c3c6fd",
    300: "#a4a9fc",
    400: "#868dfb",
    500: "#6870fa",
    600: "#535ac8",
    700: "#3e4396",
    800: "#2a2d64",
    900: "#151632"
},
yellowAccent: {
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14"
},
purpleAccent: {
    100: "#ebd9fb",
    200: "#d8b3f8",
    300: "#c48ef4",
    400: "#b168f1",
    500: "#9d42ed",
    600: "#7e35be",
    700: "#5e288e",
    800: "#3f1a5f",
    900: "#1f0d2f"
},
orangeAccent: {
    100: "#f9e4d5",
    200: "#f4c9aa",
    300: "#eeae80",
    400: "#e99355",
    500: "#e3782b",
    600: "#b66022",
    700: "#88481a",
    800: "#5b3011",
    900: "#2d1809"
},
};

// A function that reverses the tokensDark color pallette to create a tokensLight color pallette

function reverseTokens(tokensDark) {
    let tokensLight = {};
    for (let key in tokensDark) {
        let obj = tokensDark[key];
        for (let prop in obj) {
            if (tokensLight[prop]) {
                tokensLight[prop][key] = obj[prop];
            } else {
                tokensLight[prop] = { [key]: obj[prop] };
            }
        }
    }
    return tokensLight;
}

export const tokensLight = reverseTokens(tokensDark);

// MUI theme settings
export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
