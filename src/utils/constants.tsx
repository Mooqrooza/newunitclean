import React from "react";

export const CONTACT_MAP = (props: { height?: string; width?: string, embCode?: string }) => {
    const defEmbCode ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.6375263591535!2d37.58030441563861!3d55.78216699719469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a1f98b0b993%3A0x900e8d5adda26f8a!2zMy3RjyDQr9C80YHQutC-0LPQviDQn9C-0LvRjyDRg9C7LiwgMiDQutC-0YDQv9GD0YEgMjYsINCc0L7RgdC60LLQsCwgMTI1MDQw!5e0!3m2!1sru!2sru!4v1665586254245!5m2!1sru!2sru'
    return(
        <iframe
            src={props.embCode}
            height={props.height} width={props.width} style={{border:0}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}

export const getMapEmbed = (props: { height?: string; width?: string, embCode?: string }) => {
    return(
        <iframe
            src={props.embCode || ''}
            height={props.height} width={props.width} style={{border:0}} allowFullScreen={true} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}

export const URLs = {
    ROOT: '/',
    CATALOG: '/catalog',
    PROMOTION: '/promotion',
    PAYMENT: '/payment',
    REVIEWS: '/reviews',
    CONTACTS: '/contacts',
    LK: '/lk',
    CART: '/cart',
    PRODUCT: '/product/:id',
    COMPANY_LK: '/company',
    SEARCH: '/search',
    SEARCH_WITH_PARAM: '/search/:search',
    P404: '*'
}

export const INFO = {
    TITLE: 'Химические средства для клининга',
    PHONE_NUMBER: '+ 7 (495) 151 37 51',
    EMAIL: 'invest@pmk-team.ru',
    ADDRESS: 'ул. 3-я Ямского поля, д.2, корп. 26'
}

export const DELIVERY = {
    DEFAULT_ADDRESS: [
        {
            TITLE: 'г. Подольск, ул. Клемента Готвальда, д. 6в',
            ADDRESS: 'г. Подольск, ул. Клемента Готвальда, д. 6в',
            PHONE_NUMBER: '+ 7 (916) 880 52 81',
            EMAIL: 'invest@pmk-team.ru',
            EMB_CODE: ''
        }
    ],
    PICKUP_ADDRESS: [
        {
            TITLE: 'г. Люберцы, ул. 65 лет Победы, 1лит2Д', 
            ADDRESS: 'г. Люберцы, ул. 65 лет Победы, 1лит2Д',
            PHONE_NUMBER: '+ 7 (925) 613 81 67',
            EMAIL: 'invest@pmk-team.ru',
            EMB_CODE: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1124.573783232659!2d37.8844807391142!3d55.68642215528531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCb0Y7QsdC10YDRhtGLLCDRg9C7LiA2NSDQu9C10YIg0J_QvtCx0LXQtNGLLCAx0LvQuNGCMtCU!5e0!3m2!1sen!2sru!4v1693254503633!5m2!1sen!2sru'
        },
        {
            TITLE: 'г. Подольск, ул. Клемента Готвальда, д. 6в',
            ADDRESS: 'г. Подольск, ул. Клемента Готвальда, д. 6в',
            PHONE_NUMBER: '+ 7 (916) 880 52 81',
            EMAIL: 'invest@pmk-team.ru',
            EMB_CODE: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2264.2569306731275!2d37.526256413081796!3d55.42331247285123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa9814fc3c9a7%3A0xa96ecb5a4921d85f!2sCDEK!5e0!3m2!1sru!2sru!4v1692998815590!5m2!1sru!2sru'
        }
    ],
    DELIVERY_ADDRESS: [
        {
            TITLE: 'г.Подольск, ул. Клемента Готвальда, д.6в',
            ADDRESS: 'г.Подольск, ул. Клемента Готвальда, д.6в',
            PHONE_NUMBER: '+ 7 (916) 880 52 81',
            EMAIL: 'invest@pmk-team.ru',
            EMB_CODE: ''
        }
    ],
}


export const LINKS = {
    whatsapp: '',
    youtube: '',
    telegram: '',
    instagram: '',
    wildberries: 'https://www.wildberries.ru/catalog/0/search.aspx?sort=popular&search=unit+clean',
    ozon: 'https://www.ozon.ru/brand/unit-clean-87316275/',
    ya_market: 'https://market.yandex.ru/catalog--avto/54418/list?srnum=20&was_redir=1&rt=9&rs=eJwzEg1grGLh2HeIdRYjV2heZolCck5qYh4ASxcHDA,,&text=Unit clean&hid=90402&local-offers-first=0'
}

export const BASE_URL = 'http://141.8.193.185:5050';