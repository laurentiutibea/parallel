class t_controller{
	constructor(view, model){
		
		var events_list = new t_list_of_events();
		events_list.subscribe("solve_clicked_uab", this.on_solve.bind(this));
		
		this.view = view;
		this.view.set_events(events_list);
		this.model = model;
		
	}
	
	on_solve()
	{
		var a = this.view.get_a();
		var b = this.view.get_b();
		var c = this.view.get_c();
		
		this.model.set_coefficients(a, b, c);
		var solution = this.model.solve();
		this.view.set_solutions_para(solution);
	}
}

const controller = new t_controller(new t_view(), new t_model());