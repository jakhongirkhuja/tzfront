import IndexVue from '../index.vue';
const routes =  [
    {
        path: '/pages', 
        name: 'main', 
        component:  IndexVue,
        children:[
            {
                path: '',
                name: 'main.pages.all',
                component:  ()=>import ('@/modules/pages/all.vue'),
            },
            {
                path: 'add',
                name: 'main.pages.add',
                component:  ()=>import ('@/modules/pages/add.vue'),
            },
            {
                path: 'edit/:id',
                name: 'main.pages.edit',
                component:  ()=>import ('@/modules/pagese/edit.vue'),
            },
            {
                path: 'show/:id',
                name: 'main.pages.show',
                component:  ()=>import ('@/modules/pages/show.vue'),
            },
        ]
    },
    

]

export default routes;
