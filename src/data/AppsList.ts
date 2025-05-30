import SocMedInterface from '../Interface/SocMedInterface';

const socialMediaList: SocMedInterface[] =  [
    {
        'name': 'Instagram',
        'logoPath': () => import('../../assets/logo-instagram.png'),
        'url': 'https://www.instagram.com/'
    },
    {
        'name': 'GitHub',
        'logoPath': () => import('../../assets/logo-github.png'),
        'url': 'https://github.com'
    },
    {
        'name': 'Google News',
        'logoPath': () => import('../../assets/logo-google-news.png'),
        'url': 'https://news.google.com'
    },
    {
        'name': 'Medium',
        'logoPath': () => import('../../assets/logo-medium.png'),
        'url': 'https://https://medium.com/'
    },
    {
        'name': 'DEV.to',
        'logoPath': () => import('../../assets/logo-dev.to.png'),
        'url': 'https://dev.to'
    },
    {
        'name': 'Wikipedia',
        'logoPath': () => import('../../assets/logo-wikipedia.png'),
        'url': 'https://www.wikipedia.org/'
    },
    {
        'name': 'Facebook',
        'logoPath': () => import('../../assets/logo-facebook.png'),
        'url': 'https://facebook.com'
    },
    {
        'name': 'Kaggle',
        'logoPath': () => import('../../assets/logo-kaggle.png'),
        'url': 'https://kaggle.com'
    },
    {
        'name': 'Huggingface',
        'logoPath': () => import('../../assets/logo-huggingface.png'),
        'url': 'https://huggingface.co/'
    }
];

export default socialMediaList;