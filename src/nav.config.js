export default [
  {
    groupName: '基本组件',
    list: [
      {
        name: 'Button',
        routePath: '/button',
        demo: () => import('components/Button.vue')
      },
      {
        name: 'Input',
        routePath: '/input',
        demo: () => import('components/Input.vue')
      },
      {
        name: 'Radio',
        routePath: '/radio',
        demo: () => import('components/Radio.vue')
      },
      {
        name: 'Checkbox',
        routePath: '/checkbox',
        demo: () => import('components/Checkbox.vue')
      }
    ]
  }
];