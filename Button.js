
class TeachingWeek extends HTMLElement {
	divOuter = document.createElement('div');
	divTop=document.createElement('div');
	divBot=document.createElement('div');
	shadowRoot = this.attachShadow({ mode: 'open' });
	constructor() {
		super();
	}
    static get observedAttributes() { 
		return ['firstDay']; 
	}
	calWeek(){
		var firstDay = this.getAttribute('firstDay')|| '2024-2-25';
		var now = new Date();    
		var oDate=new Date(firstDay+' 0:0:0');  		
		var iDays=Math.abs(now-oDate)/1000/60/60/24;	
		var weeks=Math.floor(iDays/7)+1;
		return weeks;
	}
	connectedCallback() {
		this.divOuter.setAttribute('class', 'outer');    				
		// 创建样式
		const style = document.createElement('style');
		// 为shadow Dom添加样式
		style.textContent = `
		  .outer {
			width: 105px;
			font-size: 16px;
			display: flex;
			margin: 13px 3px 13px 3px;
			border-radius: 10px;
			background-color: white;
			box-shadow: inset 0 2px 6px rgba(0,0,0, 0.3);
			flex-direction: column;
		  }
		`
		this.divTop.setAttribute('class', 'top');
		this.divTop.innerHTML='西南大学';
		// 创建样式
		const styleTop = document.createElement('style');
		// 为shadow Dom添加样式
		styleTop.textContent = `
		  .top {
			text-align: center;
			width: 65px;
			display: inline-block;
			padding: 6px 20px 6px 20px;
			border-radius: 10px 10px 0px 0px;
			background-color: red;
			color: #fff;
			box-shadow: inset 0 5px 10px rgba(0,0,0, .3);
		  }
		`
		this.divBot.setAttribute('class', 'bot');
		this.divBot.innerHTML='第'+this.calWeek()+'周'; //'第20周';
		// 创建样式
		const styleBot = document.createElement('style');
		// 为shadow Dom添加样式
		styleBot.textContent = `
		  .bot {
			text-align: center;
			display: inline-block;
			padding: 16px 20px;
		  }
		`
		
		this.divOuter.appendChild(styleTop);	
		this.divOuter.appendChild(this.divTop);
		
		this.divOuter.appendChild(styleBot);	
		this.divOuter.appendChild(this.divBot);
		
		
		this.shadowRoot.appendChild(style);	
		this.shadowRoot.appendChild(this.divOuter);
		
	}
}
customElements.define('teaching-week',TeachingWeek);
