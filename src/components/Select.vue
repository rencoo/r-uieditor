<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import selectJSON from '../assets/select.json';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        selectData: null,
        optionList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ]
      };
    },
    created(){
    },
    methods: {
      onSelectChange(...args) {
        console.log('---onSelectChange---');
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
			json: selectJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>