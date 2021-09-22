<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import radioJSON from '../assets/radio.json';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        singleRadio: false,
        multiRadio: "a"
      };
    },
    created(){
    },
    methods: {
      onSingleRadioChange(...args) {
        console.log('---onSingleRadioChange---');
        console.log(args);
      },
      onMultiRadioChange(...args) {
        console.log('---onMultiRadioChange---');
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
  name: 'RRadio',
	data() {
		return {
			options,
			json: radioJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>