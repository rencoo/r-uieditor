<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
const options = UERender.DefineOption({
  mixins:[{
    data(){
      return {
        text:'hello'
      };
    },
    created(){

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
	data() {
		return {
			options,
			json: {
  "type": "uieditor-div",
  "children": [
    {
      "children": [
        {
          "type": "Col",
          "props": {
            "span": 20
          },
          "children": []
        }
      ],
      "type": "Row",
      "props": {
        ":gutter": 16
      }
    },
    {
      "children": [
        {
          "type": "Col",
          "props": {
            "span": 4
          },
          "children": [
            {
              "type": "Menu",
              "props": {
                "width": "240px"
              },
              "children": [
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879932175_236",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879962489_282",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879963979_288",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879964363_295",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879964511_302",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879964683_309",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879965064_316",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                },
                {
                  "type": "MenuItem",
                  "props": {
                    "name": "1631879965441_323",
                    "target": "_self"
                  },
                  "children": [
                    {
                      "type": "Icon",
                      "props": {
                        "class": "mr-sm",
                        "type": "md-heart-outline",
                        "ue-cant-move": true
                      }
                    },
                    {
                      "type": "uieditor-text",
                      "props": {
                        "text": "MenuItem",
                        "ue-cant-move": true
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "Col",
          "props": {
            "span": 20
          },
          "children": [
            {
              "type": "Card",
              "props": {
                "class": "mb-sm",
                "title": "Card 卡片"
              },
              "children": [
                {
                  "type": "iview-uieditor-table",
                  "props": {
                    ":data": "[\n  {\n    name:'name',\n    age:'age',\n    address:'address'\n  }\n]",
                    ":columns": "[\n  {\n    title: 'Name',\n    key: 'name',\n    slot: 'name'\n  },\n  {\n    title: 'Age',\n    key: 'age'\n  },\n  {\n    title: 'Address',\n    key: 'address'\n  }\n]",
                    ":show-header": "true"
                  },
                  "children": [
                    {
                      "type": "template",
                      "props": {
                        "slot": "name",
                        "slot-scope": "{ row, index }"
                      },
                      "children": [
                        {
                          "children": [
                            {
                              "type": "uieditor-text",
                              "props": {
                                ":text": "row.name"
                              }
                            }
                          ],
                          "type": "uieditor-a"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "Page",
                  "props": {
                    "class": "mt-md",
                    ":current": 1,
                    ":total": 50,
                    ":page-size": 10,
                    ":page-size-opts": "[10,20,30,40]",
                    ":show-total": "true",
                    ":show-sizer": "true",
                    ":disabled": "false"
                  }
                }
              ]
            }
          ]
        }
      ],
      "type": "Row",
      "props": {
        ":gutter": 16
      }
    }
  ]
}
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>

<style scoped>
@import url('~iview/dist/styles/iview.css');
</style>