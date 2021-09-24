<template>
	<div>
		<vue-uieditor-render :options="options" :json="json" />
	</div>
</template>

<script>
import { UERender } from 'vue-uieditor';
import * as lodash from 'lodash';
import tableJSON from '../assets/table.json';
import expandRow from './TableExpand.vue';

// TODO: highlight-row 单选模式
const options = UERender.DefineOption({
  mixins:[{
    data(){
      const pageSizeOpts = [10, 20, 30, 40];
      return {
        // 分页器
        currentPage: 1,
        pageSizeOpts,
        currentPageSize: pageSizeOpts[0],
        // 分页器
        // 搜索
        search: '',
        // 搜索
        isTableLoading: true,
        multipleSelection: [],
        tableData: [],
        tableCols: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              /**
               * index, row
               */
              console.log(params);
              // 动态的
              // 渲染展开区域与自定义列模板方法类似，使用 render 函数。当内容较复杂时，可拆分为组件或使用 JSX。
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name',
            sortable: true,
            // slot-scope 的参数有 3 个：当前行数据 row，当前列数据 column，当前行序号 index。
            // slot-scope是子传给父的参数
            slot: 'name'
          },
          {
            title: 'Age',
            key: 'age',
            sortable: true,
            // TODO: 未生效
            sortType: 'descending',
            filters: [
              {
                label: 'Greater than 25',
                value: 1
              },
              {
                label: 'Less than 25',
                value: 2
              }
            ],
            // 是否选中多个条件, 大于5 && 小于10
            filterMultiple: false,
            filterMethod (value, row) {
              if (value === 1) {
                  return row.age > 25;
              } else if (value === 2) {
                  return row.age < 25;
              }
            }
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title: 'Date',
            key: 'date',
            sortable: true
          },
          {
            title: 'Eslint',
            key: 'eslint',
            sortable: true,
            sortMethod: (a, b, type) => {
              if (type === 'desc') {
                return a.errors < b.errors ? 1 : -1
              } else {
                return a.errors > b.errors ? 1 : -1
              }
            },
            // important, 使用渲染函数
            render: (h, params) => {
              return h('div', [
                h('strong', params.row.eslint.errors)
              ]);
            }
            // 如果使用远程排序，可以设置 sortable: 'custom'，然后在触发排序事件 @on-sort-change后，进行远程排序，并手动设置新的 data，详见 API
            // 方法绑定在table上, 每列sortable设置为 custom
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      /**
                       * column, row, index
                       */
                      this.show(params)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                    }
                  }
                }, 'Delete')
              ]);
            }
        }
        ]
      };
    },
    created(){
      setTimeout(() => {
        this.tableData = [
          {
            name: 'a',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
            // _highlight: true
            _checked: true,
            eslint: {
              errors: 15
            },
            // 展开数据
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor',
            _expanded: true // 默认展开
          },
          {
            name: 'b',
            age: 8,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01',
            _disabled: true,
            eslint: {
              errors: 9
            },
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'c',
            age: 28,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02',
            eslint: {
              errors: 0
            },
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'd',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
            eslint: {
              errors: 30
            },
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          }
        ];
        for (let i = 0; i < 100; i += 1) {
          this.tableData.push({
            name: 'd',
            age: i + 30,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04',
            eslint: {
              errors: i + 65
            },
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          });
        }
        this.isTableLoading = false;
      }, 2000);
    },
    computed: {
      // 分页器显示的总数量
      itemsCount() {
        // return this.tableData.length
        return this.filterTableData.length
      },
      filterTableData: function() {
        return this.tableData
          .filter(rowData => JSON.stringify(rowData).toLowerCase().includes(this.search.toLowerCase()))
      },
      // 前端分页需要自定义sort, 然后统一对tableData进行排序; 现在好像只会对当前页进行排序
      currentPageData: function() {
        return this.filterTableData.filter((rowData, index) =>
          (index >= this.currentPageSize * (this.currentPage - 1)) && (index < this.currentPageSize * this.currentPage))
      }
    },
    methods: {
      // TODO: 如何传入 status 参数, true 或者 false
      handleSelectAll() {
        this.$refs.testTable.selectAll(true);
      },
      handleCancelSelectAll() {
        this.$refs.testTable.selectAll(false);
      },
      handleExportData() {
        // TODO: 如何自定义导出对象的某几个属性
        this.$refs.testTable.exportCsv({
          filename: 'The original data'
        });
      },
      // array
      handleSelectChange(val) {
        this.multipleSelection = val
        console.log(this.multipleSelection);
      },
      // 分页
      // 参数, 页码
      handlePageChange(...args) {
        // 后端分页的场景, 去拉取新页的数据 页码 * 每页数量, 后端返回数据
        // 综合各查询条件去后端拉取数据; 搜索、过滤等
        // this.tableData1 = this.mockTableData1();
        this.currentPage = args[0]
        console.log(this.currentPageData);
        // 之前直接用sync, 来双向同步了 :current-page.sync="currentPage"
      },
      handlePageSizeChange(...args) {

      },
      show ({ column, row, index }) {
        console.log(row);
        console.log(column);
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.tableData[index].name}<br>Age：${this.tableData[index].age}<br>Address：${this.tableData[index].address}`
        })
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
			json: tableJSON
		}
	},
	components: {},
	mounted() {
	},
	methods: {
	}
}
</script>