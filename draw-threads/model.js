class t_model()
{
	angle;
	my_worker;
	_event;
	id_timer;
	//-------------------------------------------
	constructor(){
		this.angle = {value: 0};
		this.my_worker = null;
		this.id_timer = null;
	}
	//-------------------------------------------
	set_events(events)
	{
		this._events = events;
	}
	//-------------------------------------------
	start()
	{
		if (this.my_worker == null){
			this.my_worker = new Worker("calcul_prime.js");
			this.my_worker.onmessage = function(e){
				this._events.emit("prime_computed", e.data);
			}
		}
		else
			this.my_worker.postMessage("start");
	
		this.id_timer = setInterval(this.start_draw_circle.bind(this), 100);			
	}
	//-------------------------------------------
	start_draw_circle
	{
		this._events.emit("angle_updated", this.angle);
		this.angle.value++;
	}
	//-------------------------------------------
	stop()
	{
		clearInterval(this.id_timer);
		this.my_worker.postMessage("stop");
	}
	//-------------------------------------------
}