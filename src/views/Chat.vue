<template>
	<div id="chat">
		<ul v-for="list in msgList">
			<li>{{ list }}</li>
		</ul>
		<form @submit.prevent="sendMsg">
			<input autocomplete="off" v-model="msg" />
			<button type="submit" @keyup.enter="sendMsg">发送</button>
		</form>
	</div>
</template>

<style lang="sass" scoped>
	form{
		width: 100%;
		position: fixed;
		bottom: 10px;
	}
	input{
		width: 90%;
		border: 1px solid #eee;
		line-height: 38px;
		font-size: 16px;
		text-indent: 1em;
	}
	button{
		background: green;
		height: 40px;
		line-height: 40px;
		width: 100px;
		font-size: 16px;
		color: #fff;
		text-align: center;
		vertical-align: middle;
		border: 0 none;
		cursor: pointer;
	}
</style>

<script>
    import Socket from 'static_js/libs/socket.io'
    export default{
    	data (){
    		return {
    			msg: '',
    			msgList: [],
    			io: Socket()
    		}
    	},
    	mounted (){
    		this.io.on('chat message', (msg) => {
    			this.msgList.push(msg)
    		})
    	},
    	methods: {
    		sendMsg (){
    			this.io.emit('chat message', this.msg)
    		}
    	}
    }
</script>
