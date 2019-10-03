class t_view{
	_events;
	constructor(){
		document.getElementById("id_button").addEventListener("click", this.on_solve_click.bind(this));
	}
	
	set_events(events)
	{
		this._events = events; 
	}
	
	on_solve_click()
	{
		this._events.emit("solve_clicked_uab");
	}
	
	get_a()
	{
		return document.getElementById("id_a").value;
	}

	get_b()
	{
		return document.getElementById("id_b").value;
	}
	
	get_c()
	{
		return document.getElementById("id_c").value;
	}
	
	set_solutions_para(solution)
	{
		document.getElementById("id_x1").innerHTML = "x1 = " + solution.x1.re + " + " + solution.x1.im + "i";
		document.getElementById("id_x2").innerHTML = "x2 = " + solution.x2.re + " + " + solution.x2.im + "i";
	}
}