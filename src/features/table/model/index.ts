import { createStore } from 'effector-root';
import { createStart } from './../../../lib/page-routing';


interface CompanyProps {
    id: number,
    title: string,
    persent: string,
    match: string,
    from: string,
    to: string,
    card: boolean,
    time: boolean,
    perDay: boolean,
    cash: boolean,
    discount: boolean,
    link: string
}

export const pageLoaded = createStart();


export const $companyList = createStore<Array<CompanyProps>>([
    { id: 1, title: 'Egroshi', persent: '0.01%', match: '20 000', from: '1', to: '30', card: false, time: false, perDay: true, cash: true, discount: false, link: 'https://ad.admitad.com/g/c5a6d342ab6c4590d5743b7d435982' },
    { id: 2, title: 'Miloan', persent: '0.02%', match: '10 000', from: '5', to: '64', card: true, time: false, perDay: true, cash: false, discount: false, link: 'https://ad.admitad.com/g/c5a6d342ab6c4590d5743b7d435982' },
    { id: 3, title: 'Credit+', persent: '0.1%', match: '5 000', from: '1', to: '10', card: true, time: true, perDay: true, cash: false, discount: true, link: 'https://ad.admitad.com/g/c5a6d342ab6c4590d5743b7d435982' },
    { id: 4, title: 'MyCredit', persent: '0.3%', match: '3 000', from: '1', to: '15', card: false, time: false, perDay: true, cash: true, discount: false, link: 'https://ad.admitad.com/g/c5a6d342ab6c4590d5743b7d435982' },
    { id: 5, title: 'ShvidkoGroshi', persent: '0.01%', match: '25 000', from: '10', to: '70', card: true, time: false, perDay: true, cash: false, discount: false, link: 'https://ad.admitad.com/g/c5a6d342ab6c4590d5743b7d435982' },
]);
