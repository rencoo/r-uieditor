import navConfig from '../nav.config'

const registerRoutes = () => {
  const routes = [
    {
      name: 'index',
      path: '/',
      redirect: '/form',
    }
  ]
  navConfig.forEach(group => {
    group.list.forEach(nav => {
      routes.push({
        name: nav.name,
        path: nav.routePath,
        component: nav.demo
      })
    })
  })

  return routes
}

export default registerRoutes
