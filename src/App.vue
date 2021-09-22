<template>
	<div id="app">
		<doc-header />
    <doc-main>
			<doc-nav></doc-nav>
			<doc-container>
				<router-view />
			</doc-container>
		</doc-main>
	</div>
</template>

<script>
import DocHeader from './components/feature/doc-header.vue'
import DocMain from './components/feature/doc-main.vue'
import DocNav from './components/feature/doc-nav.vue';
import DocContainer from './components/feature/doc-container.vue';

export default {
	data() {
		return {
		}
	},
	components: {
		DocHeader,
		DocMain,
		DocNav,
		DocContainer
	},
	mounted() {
	},
	methods: {
	}
}
</script>

<style scoped>
@import url('~iview/dist/styles/iview.css');
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>