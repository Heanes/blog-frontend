export default [
  /* ****************************** user 用户 ****************************** */
  {
    path: '/user/:userName.html',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user/PageUser.vue')
  }
];
