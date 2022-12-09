const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    darkMode: [], // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", ...defaultTheme.fontFamily.sans], 
            },

        colors: {
              grey: { 
                100:'#FAF9F9',
                200:'#F7F6F6',
                300:'#E8DEDE',
                500:'#DDD3D3',
                700:'#AFA2A2',
                800:'#241717', // Black in Figma 
                900:'#4D4646',
              },
              peach: {
                DEFAULT: '#E9CFC4',
                '2': '#EDE9E7',
                '3': '#baa69d',
                '4': '#8c7c76'
              },
              red: {
                DEFAULT: '#D82C0D'
              }, 
              blue: {
                DEFAULT: '#1062BF', 
              }, 
        },
            spacing: {
                '15': '3.75rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '34': '8.5rem',
                '38': '9.5rem',
                '42': '10.5rem',
                '46': '11.5rem',
                '50': '12.5rem',
                '54': '13.5rem',
                '58': '14.5rem',
                '62': '15.5rem',
                '66': '16.5rem',
                '70': '17.5rem',
                '74': '18.5rem',
                '78': '19.5rem',
                '82': '20.5rem',
                '86': '21.5rem',
                '90': '22.5rem',
                '94': '23.5rem',
                '98': '24.5rem',
                '102': '25.5rem',
                '106': '26.5rem',
                '110': '27.5rem',
                'xs': '28rem',
                'sm': '32rem',
                'md': '36rem',
                'ml': '40rem',
                'mxg': '44rem',
                'mlg': '48rem',
                'lg': '52rem',
                'xl': '60rem',
                '2xl': '72rem',
                '3xl': '80rem',
                '4xl': '96rem',
            },

            width:{
                '3': '3px',
                '68': '274px',
                '119': '477px',
                '22': '89px',
            },

            minWidth: (theme) => ({
                ...theme('spacing'),
            }), 
            maxWidth: (theme) => ({
                ...theme('spacing'),
            }),
            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            maxHeight: (theme) => ({
                ...theme('spacing'),
            }),


            boxShadow: {
                '1': '0px 9px 44px rgba(0, 0, 0, 0.06)',
                '2': '0px 20px 41px rgba(0, 0, 0, 0.25)',
                '3': '0px 1px 6px rgba(0, 0, 0, 0.1)',
            },
            

              
            fontSize: {
                mi: '.65rem',
                md: '.9375rem',
                '2.5xl': '1.75rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem',
                '5.5xl': '3.5rem',
                '6.5xl': ['4rem', '1.10'],
                '7.5xl': '5rem',
                  '13'  : '13px',
                  '15'  : '15px',
                  '32'  : '32px',
            },


            borderWidth:{
              3:'3px',
              5:'5px',
              6:'6px',
            },
            ringWidth: {
              3:'3px',
              5:'5px',
              6:'6px',
            },


        },





        screens: {
            'mv': '360px',
            // => @media (min-width: 480px) { ... }

            'xs': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'ml': '992px', // Medium Large
            // => @media (min-width: 992px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'sl': '1199px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }    

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... }    

            'wrap': '1920px',
            // => @media (min-width: 1734px) { ... }  

        },
    },

    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, components, theme }) {
            addBase({})
        }),
       
        require('@tailwindcss/line-clamp'),
        
    ],
}