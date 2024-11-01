import IndexVue from './IndexPage.vue';

const routes =  [
    {
        path: '/pages', 
        name: 'main', 
        component:  IndexVue,
        children:[
            
            {
                path: '',
                name: 'main.pages.all',
                component:  ()=>import ('@/modules/pagesSection/PagesAll.vue'),
            },
            {
                path: 'add',
                name: 'main.pages.add',
                component:  ()=>import ('@/modules/pagesSection/PageAdd.vue'),
            },
            {
                path: 'edit/:id',
                name: 'main.pages.edit',
                component:  ()=>import ('@/modules/pagesSection/PageEdit.vue'),
            },
            {
                path: 'show/:id',
                name: 'main.pages.show',
                component:  ()=>import ('@/modules/pagesSection/PageShow.vue'),
            },
        ]
    },
    

]

export default routes;
