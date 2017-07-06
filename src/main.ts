import * as Vue from 'vue';
import VueRouter from 'vue-router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { TableComponent } from './components/table';
import { 
  DepartmentsComponent, 
  DepartmentEditComponent 
} from './components/departments';
import { 
  EmployeesComponent, 
  EmployeeEditComponent 
} from './components/employees';
import { 
  CustomersComponent, 
  CustomerEditComponent 
} from './components/customers';
import { NavSideComponent } from './components/navside';
import { ViewHeaderComponent } from './common/view-header';
import VueProgressBar from 'vue-progressbar';

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});

const Events = new Vue({});
// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/departments/:id', component: DepartmentEditComponent },
    { path: '/departments', component: DepartmentsComponent },
    { path: '/employees/:id', component: EmployeeEditComponent },
    { path: '/employees', component: EmployeesComponent },
    { path: '/customers/:id', component: CustomerEditComponent },
    { path: '/customers', component: CustomersComponent },
    { path: '/about', component: AboutComponent },
    { path: '/table', component: TableComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navside': NavSideComponent,
    'view-header': ViewHeaderComponent
  },
  data: {
    events: Events
  },
  // mounted() {
  //   Events.$on('updateViewHeader', (data) => {
  //     console.log('I heard an event.', data);
  //   });
  // },
});
