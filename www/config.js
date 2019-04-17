var config = {
    root: '#app', 
    id: 'ge.atlast.DemoApp',
    name: 'DemoApp', 
    theme: 'auto', 
    route: [{
            path: '/',
            url: './app/main/views/main.page.html',
        },
        {
            path: '/result/',
            url: './app/result/views/result.page.html',
        },
        {
            path: '(.*)',
            url: './pages/404.html'
        }
    ]
}