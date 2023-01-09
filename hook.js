module.exports = function() {
 this.nuxt.hook('build:extendRoutes', routes => {
   const blogPages = {
     path: '/pages/photo-gallary/:id',
     component: 'pages/photo-gallary/index.vue',
     name: 'blog-page-id'
   }
   routes.unshift(blogPages)
 })
}
