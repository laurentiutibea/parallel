class t_view{
	_events;
	canvas;
	context;

	constructor(){
		document.getElementById("id_stop_button").disabled = true;
		document.getElementById("id_start_button").disabled = false;

		document.getElementById("id_start_button").addEventListener("click", this.start.bind(this));
		document.getElementById("id_stop_button").addEventListener("click", this.stop.bind(this));

		this.canvas = document.getElementById("id_canvas");
		this.context = this.canvas.getContext("2d");
	}

	start(){
		document.getElementById("id_start_button").disabled = true;
		document.getElementById("id_stop_button").disabled = false;
		this._events.emit("start_clicked_uab");
	}

	stop(){
		document.getElementById("id_start_button").disabled = false;
		document.getElementById("id_stop_button").disabled = true;
		this._events.emit("stop_clicked_uab");
	}

	set_events(events){
		this._events = events;
	}

	update_circle(angle){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.context.beginPath();
		this.context.arc(this.canvas.width / 2 + 100 * Math.cos(angle.value * Math.PI / 180), 
				this.canvas.height / 2 + 100 * Math.sin(angle.value * Math.PI / 180), 
				50, 0, 2 * Math.PI);
		this.context.stroke();
	}

	update_prime_number_para(number){
		document.getElementById("id_prime").innerHTML = number;
	}
}