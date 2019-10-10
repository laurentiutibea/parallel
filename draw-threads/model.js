class t_model{
	angle;
	my_worker;
	_events;
	id_timer;

	constructor(){
		this.angle = {value:0};
		this.my_worker = null;
		this.id_timer = null;
	}

	set_events(events){
		this._events = events;
	}

	start(){
		if (this.my_worker == null){
			this.my_worker = new Worker("calcul_prime.js");
			const _events_bk = this._events;
			this.my_worker.onmessage = function(e){
				_events_bk.emit("prime_computed", e.data);
			}
		}
		else this.my_worker.postMessage("start");
	
		this.id_timer = setInterval(this.start_draw_circle.bind(this), 10);
	}

	start_draw_circle(){
		this._events.emit("angle_updated", this.angle);
		this.angle.value++;
	}

	stop(){
		clearInterval(this.id_timer);
		this.my_worker.postMessage("stop");
	}
}