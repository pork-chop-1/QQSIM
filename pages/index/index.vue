<template>
	<view class="content">
		<view class="top">
			<view class="avatar-wrapper">
				<image src="@/static/pic/main-avatar.jpg"></image>
			</view>
			<text>preserve </text>
		</view>
		<scroll-view class="info-list">
			<view class="info-item" v-for="msg in msgList" :key="msg.id" @click="navInfoPlane(msg.id)">
				<view class="cover-wrapper">
					<image src="@/static/pic/default-cover.jpg"></image>
				</view>
				<view class="info-text">
					<text class="info-name">{{msg.name}}</text>
					<text class="info-msg">{{msg.msg}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(
			    ['id',
				'msgList']
			)
		},
		onLoad() {

		},
		methods: {
			navInfoPlane(id) {
				uni.navigateTo({
					url: '/pages/MsgPlane/index?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: left;
		align-items: center;
		background: linear-gradient(45deg, #528ad7, #74baeb);
		color: #fff;
		
		.avatar-wrapper {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			overflow: hidden;
			margin: 10px;
			image {
				width: 50px;
				height: 50px;
			}
		}
	}
	
	.info-list {
		.info-item {
			width: 100%;
			height: 70px;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #999;
			
			.cover-wrapper {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
				margin: 10px;
				
				image: {
					width: 50px;
					height: 50px;
				}
			}
			
			.info-text {
				position: relative;
				width: calc(100% - 70px);
				height: 100%;
				box-sizing: border-box;
				padding: 10px 0;
				
				.info-name {
					font-size: 20px;
					font-weight: 500;
					line-height: 30px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				
				.info-msg {
					font-size: 16px;
					font-weight: 300;
					line-height: 20px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>
