class t_controller{
	constructor(view, model)
	{
		var events_list_view = new t_list_of_events();
		events_list_view.subscribe("start_clicked_uab", this.on_start.bind(this));
		events_list_view.subscribe("stop_clicked_uab", this.on_stop.bind(this));
		
		var events_list_model = new t_list_of_events();
		events_list_model.subscribe("prime_computed", this.on_prime_computed.bind(this));
		events_list_model.subscribe("angle_updated", this.on_angle_updated.bind(this));
		
		this.view = view;
		this.view.set_events(events_list_view);
		this.model = model;
		this.model.set_events(events_list_model);
	}
	
	on_start()
	{
		this.model.start();
	}
	
	on_stop()
	{
		this.model.stop();
	}
	
	on_prime_computed(number)
	{
		this.view.update_prime_number_para(number);
	}
	
	on_angle_updated(angle)
	{
		this.view.update_circle(angle);
	}
	
}

const app = new t_controller(new t_view(), new t_model());