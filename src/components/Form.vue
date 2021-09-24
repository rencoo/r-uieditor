<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import formJSON from '../assets/form.json';
const options = UERender.DefineOption({
  mixins:[{
    data() {
      const validateCheckbox = (rule, value, callback) => {
        console.log('---checkbox value---');
        console.log(value.length);
        if (!value.length) {
          callback(new Error('至少勾选一项'));
        } else {
          callback();
        }
      };
      const validateDate = (rule, value, callback) => {
        console.log('---date value---');
        if (!value) {
          callback(new Error('时间不能为空'));
        } else {
          callback();
        }
      };
      return {
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
        ],
        formData: {
          name: '',
          password: '',
          select: '',
          radio: 'male',
          checkbox: ["3"],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        rules: {
          name: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '必填', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          // trigger should be change
          select: [
            { required: true, message: '必填', trigger: 'change' }
          ],
          // custom
          // required 检测对象也会报错
          date: [
            { validator: validateDate, trigger: 'blur' }
          ],
          radio: [
            { required: true, message: '必填', trigger: 'blur' }
          ],
          // custom
          checkbox: [
            { validator: validateCheckbox, trigger: 'blur' }
          ],
          textarea: [
            { required: true, message: '必填', trigger: 'blur' }
          ]
        },
      };
    },
    created() {},
    methods: {
      onDateChange(...args) {
        console.log('---onDateChange---');
        console.log(args);
      },
      onRadioChange(...args) {
        console.log('---onRadioChange---');
        console.log(args);
      },
      // TODO: 如何从html里传入部分参数
      // TODO: 时间格式
      onSubmit(...args) {
        console.log('---onSubmit---');
        console.log(args);
        this.$refs['testForm'].validate((valid) => {
          console.log('---valid---');
          console.log(valid);
          if (valid) {
            console.log(JSON.parse(JSON.stringify(this.formData)));
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      onSelectChange(...args) {
        console.log('---onSelectChange---');
        console.log(args);
        console.log(typeof this.formData.select);
      },
      onSwitchChange(...args) {
        console.log('----onSwitchChange---');
        console.log(args);
        console.log(this.formData.switch);
      },
      onSliderChange(...args) {
        console.log('----onSliderChange---');
        console.log(args);
        console.log(this.formData.slider);
      },
      onTextAreaChange(...args) {
        console.log('----onTextAreaChange---');
        console.log(args);
        console.log(this.formData.textarea);
      }
    }
	}],
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
        <uieditor-div>
        </uieditor-div>
      </template>`,
    },
  ],
  async extraLib() {
    return `const text:string;`
  },
  global() {
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
  name: 'RForm',
	data() {
		return {
			options,
			json: formJSON
		}
	},
	components: {},
	mounted() {},
	methods: {}
}
</script>