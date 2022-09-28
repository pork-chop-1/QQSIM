<template>
	<view :style="{height}" class="plane-wrapper">
		<view class="top">
			<view class="back">
			</view>
			<text>preserve </text>
		</view>
		<view class="msg-view">
			<view class="msg-item" :class="{'msg-self': item.id === selfId}" v-for="item in msgList" :key="item.time">
				<view class="avatar-wrapper">
					<image v-if=" item.id !== selfId" src="@/static/pic/default-cover.jpg"></image>
					<image v-else src="@/static/pic/main-avatar.jpg"></image>
				</view>
				<view class="r-wrapper">
					<view class="name-wrapper">
						<text>
							{{item.name}}
						</text>
					</view>
					<view class="msg-info">
						<text>
						{{item.msg}}
						</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="msg-box-wrapper">
			<textarea v-model:value="inputValue"></textarea>
			<view class="send" @click="addOne">
				>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				height: 0,
				inputValue: ''
			}
		},
		computed: {
			msgList () {
				return this.$store.state.msgDetail[this.id]
			},
			selfId() {
				return this.$store.state.id
			}
		},
		onLoad({id}) {
			this.id = id
			const that = this
			uni.getSystemInfo({
			    success: function (res) {
					// 获取视窗高度
					that.height = (res.windowHeight - res.statusBarHeight) + 'px'
					console.log(res.windowHeight, res.statusBarHeight)
			    }
			});
		},
		methods: {
			addOne () {
				if(this.inputValue.length > 0) {
					console.log(this.inputValue)
					this.$store.dispatch('addComment', {
						id: this.id,
						obj: {
							time: Date.now(),
							name: 'preserve',
							id: this.selfId,
							msg: this.inputValue
						}
					})
					this.inputValue = ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.plane-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	
	.top {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: left;
		align-items: center;
		background: linear-gradient(45deg, #528ad7, #74baeb);
		color: #fff;
		flex-shrink: 0;
	}
	
	.msg-view{
		width: 100%;
		height: calc(100% - 130px);
		overflow-y: auto;
		box-sizing: border-box;
		padding: 0 10px;
		flex-shrink: 1;
		
		.msg-item {
			width: 100%;
			display: flex;
			align-items: flex-start;
			justify-content: left;
			
			&.msg-self {
				flex-direction: row-reverse;
				justify-content: flex-start;
				
				.name-wrapper {
					display: flex;
					flex-direction: row-reverse;
				}
			}
			
			.avatar-wrapper {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
				margin: 10px;
				flex-shrink: 0;
				image {
					width: 50px;
					height: 50px;
				}
			}
			
			.r-wrapper {
				.name-wrapper {
					font-size: 16px;
					line-height: 30px;
				}
				
				.msg-info {
					background: #528ad7;
					color: #fff;
					border-radius: 5px;
					display: inline-block;
					margin: 5px;
					padding: 5px;
					line-height: 24px;
					width: auto;
					height: auto;
				}
			}
		}
	}
	
	.msg-box-wrapper {
		width: 100%;
		height: 60px;
		box-shadow: 0 0 4px grey;
		flex-shrink: 0;
		display: flex;
		padding: 5px;
		
		textarea {
			
			height: 50px;
			border-radius: 25px;
			background-color: #eee;
			line-height: 50px;
			font-size: 16px;
			box-sizing: border-box;
			padding: 0 20px;
		}
		
		.send {
			flex-shrink: 0;
			flex-grow: 0;
			width: 50px;
			height: 50px;
			border-radius: 25px;
			background-color: #528ad7;
			color: #fff;
			font-size: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 10px;
		}
	}
</style>
