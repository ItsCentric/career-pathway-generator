<script>
	import '../app.css';
</script>

<div class="test">
	<a href='/login'>
		Register
	</a>
	<a href='/login'>Sign-in</a>
</div>
<slot></slot>

<style>
	.test{
	margin: 0px;
	padding-right: 20px;
	display: flex;
	width: 100%;
	justify-content: right;
	gap: 14px;
 }
</style>