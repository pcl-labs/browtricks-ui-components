import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Customers from '@/views/CustomersView.vue';
import CustomersEdit from '@/views/CustomersEdit.vue';
import CustomersList from '@/views/CustomersList.vue';
import Login from '@/views/LoginView.vue';
import UserProfile from '@/views/UserProfileView.vue';
import Settings from '@/views/SettingsView.vue';
import CreateAccount from '@/components/CreateAccount.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';
import AddCustomer from '@/components/AddCustomer.vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';
import SidebarNavigation from '@/components/layout/SidebarNavigation.vue';
import PMU from '@/views/PmuView.vue';
import Media from '@/views/MediaView.vue';

const routes = [
  {
    path: '',
    name: '',
    component: Login,
    meta: { title: 'BrowTricks | Login' },
  },
  {
    path: '/signup',
    name: 'Create Account',
    component: CreateAccount,
    meta: { title: 'BrowTricks | Create Account' },
  },
  {
    path: '/top-navbar',
    name: 'Top Navbar',
    component: TopNavbar,
    meta: { title: 'BrowTricks | Top Navbar' },
  },
  {
    path: '/sidebar-navigation',
    name: 'Side Bar Navigation',
    component: SidebarNavigation,
    meta: { title: 'BrowTricks | Side Bar Navigation' },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'BrowTricks | Login' },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: { title: 'BrowTricks | Forgot Password' },
  },
  {
    path: '/add-customer',
    name: 'add-customer',
    component: AddCustomer,
    meta: { title: 'BrowTricks | Add Customer' },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'BrowTricks | Home' },
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
    meta: { title: 'BrowTricks | Customers' },
  },
  {
    path: '/customers-edit',
    name: 'CustomersEdit',
    component: CustomersEdit,
    meta: { title: 'BrowTricks | CustomersEdit' },
  },
  {
    path: '/customers-list',
    name: 'CustomersList',
    component: CustomersList,
    meta: { title: 'BrowTricks | CustomersList' },
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { title: 'BrowTricks | User' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { title: 'BrowTricks | Settings' },
  },
  {
    path: '/pmu',
    name: 'PMU',
    component: PMU,
    meta: { title: 'BrowTricks | PMU' },
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
    meta: { title: 'BrowTricks | Media' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
