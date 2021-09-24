<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import cascaderJSON from '../assets/cascader.json';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        cascaderData: [
          {
            value: 'beijing',
            label: '北京',
            children: [
              {
                  value: 'gugong',
                  label: '故宫'
              },
              {
                  value: 'tiantan',
                  label: '天坛'
              },
              {
                  value: 'wangfujing',
                  label: '王府井'
              }
            ]
          },
          {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                      value: 'fuzimiao',
                      label: '夫子庙',
                  }
                ]
              },
              {
                value: 'suzhou',
                label: '苏州',
                children: [
                  {
                    value: 'zhuozhengyuan',
                    label: '拙政园',
                  },
                  {
                    value: 'shizilin',
                    label: '狮子林',
                  }
                ]
              }
            ]
          }
        ],
        cascaderValue: ['jiangsu', 'suzhou', 'zhuozhengyuan']
      }
    },
    created(){
    },
    methods: {
      onCascaderChange(...args) {
        console.log('---onCascaderChange---');
        console.log(args);
      }
    }
	}],
	// <uieditor-div>
	// </uieditor-div>
  templates: [
    {
      title: "JSON Object",
      group: "测试模板库/测试模板",
      json: {
        type: "uieditor-div"
      },
    },
    {
      title: "Tmpl",
      group: "测试模板库/测试模板",
      template: `<template>
      </template>`,
    },
  ],
  async extraLib(){
    return `const text:string;`
  },
  global(){
    return {
      _: lodash
    };
  },
  transfer: UERender.DefineTransfer({
    'uieditor-div': {
      "editor": {
        text: 'Div 块级标签',
        order: 0,
        groupOrder:0,
        group:'公用组件库/基础组件',
        icon: 'layui-icon layui-icon-template-1',
        container: true
      }
    }
  })
});
export default {
  name: 'RInput',
	data() {
		return {
			options,
			json: cascaderJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>