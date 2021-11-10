import bookApp from './books/pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookDetails from './books/pages/book-details.cmp.js';
import mailApp from './mail/pages/mail-app.cmp.js';
import keepApp from './keep/pages/keep-app.cmp.js';


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
];

export const router = new VueRouter({ routes });
