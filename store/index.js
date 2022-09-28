// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
const store = createStore({
// #endif
	state: {
		id: 0,
		msgList: [
			{
				id: 1,
				name: 'mark1',
				msg: '项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。',
				time: 1664346809237,
				
			}
		],
		msgDetail: {
			1: [
				{
					time: 1664346809237,
					name: 'mark1',
					id: 1,
					msg: '项目'
				},{
					time: 1664346809237,
					name: 'preserve',
					id: 0,
					msg: '项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。'
				},{
					time: 1664346809237,
					name: 'mark1',
					id: 1,
					msg: '项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。项目  编译成功。前端运行日志，请另行在小程序开发工具的控制台查看。'
				},
			]
		}
	},
	mutations: {
	},
	getters: {
	},
	actions: {
		addComment(context, {id, obj}) {
			context.state.msgDetail[id].push(obj)
		}
	}
})

export default store
