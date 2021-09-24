<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import dateJSON from '../assets/date.json';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        dateData: null
      };
    },
    created(){
    },
    methods: {
      onDateChange(...args) {
        console.log('---onDateChange---');
        console.log(args);
        console.log(this.dateData);
      },
      onDateClear(...args) {
        console.log('---onDateClear---');
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
			json: dateJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>