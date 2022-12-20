import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';




export default class DoToMarkdownPlugin extends Plugin {

	async onload() {
		super.onload();
		
		this.registerExtensions(["do"], "markdown");
	}

	onunload() {

	}
}
