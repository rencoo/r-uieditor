<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import inputJSON from '../assets/input.json';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        inputData: 'hello world'
      };
    },
    created(){
    },
    methods: {
      onInputClick(...args) {
        console.log('---onInputClick---');
        console.log(args);
      },
      onInputChange(...args) {
        console.log('---onInputChange---');
        console.log(args);
        console.log(this.inputData);
      },
      onInputFocus(...args) {
        console.log('---onInputFocus---');
        console.log(args);
      },
      onInputBlur(...args) {
        console.log('---onInputBlur---');
        console.log(args);
      },
      onInputKeyup(...args) {
        console.log('---onInputKeyup---');
        console.log(args);
      },
      onInputKeydown(...args) {
        console.log('---onInputKeydown---');
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
			json: inputJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>