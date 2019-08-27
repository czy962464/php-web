import Home from '../view/home';
import Detail from '../view/detail';

let router = [
    {
        path: '/',//首页默认加载的页面
        componentName: Home,
        exact: true //是否为严格模式
    },
    {
        path: '/detail',//后面是传递的参数id
        componentName: Detail
    }
];

export default router;