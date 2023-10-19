export const Main = {
    font: {
        size: {
            8: '8px',
            12: '12px',
            13: '13px',
            14: '14px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            28: '28px',
            30: '30px',
            32: '32px',
            35: '35px',
            36: '36px',
            40: '40px',
            48: '48px',
            50: '50px',
            80: '80px',
            100: '100px'
        },
        weight: {
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700,
            800: 800,
            900: 900,
        }
    },
    colors: {
        white: 'white',
        black: '#1E1E1E',
        gray: '#8D8D8D',
        grayA: '#DBDBDB',
        grayB: '#F8F8F8',
        grayC: '#F2F2F2',
        blue: '#164BA7',
        blueA: '#2F63BC',
        blueB: '#568BE7',
        blueC: 'A1C0F4',
        whiteBlue: '#D2E3FF',
        whiteBlueA: '#EDF3F9',
        whiteBlueB: '#E3E9F3',
        whiteBlueC: '#F2F6F9',
        whiteBlueD: '#f6f9fb',
        orange: '#E46E28',
        orangeA: '#F07E3B',
        whiteOrange: '#F9E5D9',
        red: '#CB4747',
        whiteRed: '#FDEBEE',
        whiteRedA: '#FFF5F7',
        orangeTransparent: (opacity: number) => `rgba(228,110,40,${opacity})`,
        whiteTransparent: (opacity: number) => `rgba(255,255,255,${opacity})`,
        redTransparent: (opacity: number) => `rgba(203,71,71,${opacity})`
    },
    backgrounds: {},
    gradients: {
        softBlueGradient: 'var(--Gradient-1, linear-gradient(90deg, #EFE3E3 0%, #F1F6F9 100%));',
        softBlueGradientA: 'var(--Gradient-1, linear-gradient(90deg, #EFE3E3 0%, #F1F6F9 100%));'
    },
    shadows: {
       shadow: '0px 9px 18px 7px rgba(0, 0, 0, 0.2)',
       shadowA: '0px 9px 18px 7px rgba(0, 0, 0, 0.2)',
       shadowB: '0px 9px 18px 7px rgba(0, 0, 0, 0.2)'
    },
    margins: {
        sectionMargin: '0 0 140px 0',
        sectionMarginMobile: '0 0 140px 0',
        lastSectionMargin: '0 0 200px 0',
        lastSectionMarginMobile: '0 0 200px 0',
        sectionLabelMargin: '0 0 60px 0',
        sectionLabelMarginMobile: '0 0 60px 0',
    },
    paddings: {
        contentPadding: '40px 100px 0 100px',
        contentPaddingMobile: '0 30px',
    },
    values: {
        contentMargin: 150,
        contentMobileMargin: 16
    }
}