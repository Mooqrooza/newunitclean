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
            17: '17px',
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
        },
        color: { 
            light_gray: '#9C9C9C',
            green: '#36873E',
            mobileTopTab: '#ADB8C4',
            mobileMovingTab: '#ADB8C4F5',
        }
    },
    colors: {
        white: 'white',
        whiteA: '#FCFCFC',
        black: '#1E1E1E',
        blackA: '#5E5E5E',
        gray: '#8D8D8D',
        grayA: '#ECECEC',
        grayB: '#DBDBDB',
        grayC: '#F8F8F8',
        grayD: '#F2F2F2',
        blue: '#164BA7',
        blueA: '#2F63BC',
        blueB: '#568BE7',
        blueC: '#A1C0F4',
        whiteGrayBlue: '#EFF0F2',
        whiteBlue: '#D2E3FF',
        whiteBlueA: '#EDF3F9',
        whiteBlueB: '#E3E9F3',
        whiteBlueC: '#F2F6F9',
        whiteBlueD: '#f6f9fb',
        whiteBlueE: '#DBE4EC',
        whiteBlueF: '#E3E9F3',
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
    backgrounds: {
        gradient: 'var(--Gradient-1, linear-gradient(90deg, #EFE3E3 0%, #F1F6F9 100%));',
        promotion: {
            discount: '#2196F3',
            title: '#BA172C'
        }
    },
    gradients: {
        softBlueGradient: 'var(--Gradient-1, linear-gradient(90deg, #EFE3E3 0%, #F1F6F9 100%));',
        softBlueGradientA: 'var(--Gradient-1, linear-gradient(90deg, #EFE3E3 0%, #F1F6F9 100%));',
        whiteGradient: 'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 50%);',
        whiteBlueGradient: 'linear-gradient(90deg, #F1F6F9 0%, #F1F1F1 100%);'
    },
    shadows: {
       shadow: '0px 9px 18px 7px rgba(0, 0, 0, 0.2)',
       shadowA: '0px 4px 18px 0px rgba(0, 0, 0, 0.16)',
       shadowB: '0px 4px 18px 4px rgba(0, 0, 0, 0.15)'
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
        contentPadding: '40px 60px 0 60px',
        contentPaddingMobile: '20px 30px 0 30px',
    },
    values: {
        contentMargin: 150,
        contentMobileMargin: 16
    }
}