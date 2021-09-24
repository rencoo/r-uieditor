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
      },
      {
        name: 'Switch',
        routePath: '/switch',
        demo: () => import('components/Switch.vue')
      },
      {
        name: 'Select',
        routePath: '/select',
        demo: () => import('components/Select.vue')
      },
      {
        name: 'Date',
        routePath: '/date',
        demo: () => import('components/Date.vue')
      },
      {
        name: 'Cascader',
        routePath: '/cascader',
        demo: () => import('components/Cascader.vue')
      },
      {
        name: 'Table',
        routePath: '/table',
        demo: () => import('components/Table.vue')
      },
      {
        name: 'Form',
        routePath: '/form',
        demo: () => import('components/form.vue')
      }
    ]
  }
];