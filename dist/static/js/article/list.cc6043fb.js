/*!
 * blog-ui 1.0.0
 * @author: Heanes
 * @time: 2019-03-25 21:55:20 周一
 * (c) 2014-2019 Heanes
 * Released under the MIT License.
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{56:function(t,e,a){"use strict";a.r(e);var i=a(1),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("he-layout",[a("div",{staticClass:"main",attrs:{slot:"main"},slot:"main"},[a("div",{staticClass:"page-breadcrumb main-width"},[a("he-breadcrumb",{attrs:{"breadcrumb-list":t.breadcrumbList}})],1),t._v(" "),a("div",{staticClass:"article-list-wrap main-width"},[a("he-article-list",{attrs:{"article-list":t.articleList.items}}),t._v(" "),a("div",{staticClass:"article-pager"},[a("he-pagination",t._b({on:{"change-page-number":t.changeArticlePage}},"he-pagination",t.articleList.page,!1))],1)],1)])])};r._withStripped=!0;var n=a(5),c=a(4),s=a(11),l=a(10),u=(a(23),a(9),a(6)),m={name:"ArticleList",components:{"he-layout":n.a,"he-breadcrumb":c.a,"he-article-list":l.a,"he-pagination":s.a},data:function(){return{pageTitle:"文章列表",articleQueryParam:{pageSize:10,pageNumber:1},breadcrumbList:[{name:"首页",link:"/"},{name:"文章列表",link:"/article/list.html"}],articleList:{items:[],page:{pageNumber:1,pageSize:20}}}},computed:{},methods:{getArticleList:function(t){var e=this;u.a.article.getList(t).then(function(t){e.articleList=t.data})},changeArticlePage:function(t,e){this.articleQueryParam.pageNumber=t},changeArticleQueryParam:function(t,e){this.getArticleList({params:this.articleQueryParam})}},created:function(){document.title=this.pageTitle},mounted:function(){},watch:{articleQueryParam:{handler:function(t,e){this.changeArticleQueryParam(t,e)},deep:!0,immediate:!0}}},o=a(0),p=Object(o.a)(m,r,[],!1,null,"e5db85c0",null);p.options.__file="src/pages/article/list/ArticleList.vue";var h=p.exports;i.a.config.productionTip=!1,new i.a({render:function(t){return t(h)}}).$mount("#app")}},[[56,2,1,0]]]);