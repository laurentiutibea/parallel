class t_model{
	a;
	b;
	c;
	
	constructor(){
		this.a = 0;
		this.b = 0;
		this.c = 0;
	}
	
	set_coefficients(a, b, c)
	{
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	solve()
	{
		var delta = this.b * this.b - 4 * this.a * this.c;
		var x1_re, x2_re, x1_im, x2_im;
			
		if (delta >= 0){
			x1_re = (-this.b + Math.sqrt(delta)) / (2 * this.a);
			x2_re = (-this.b - Math.sqrt(delta)) / (2 * this.a);
			x1_im = x2_im = 0;
		}
		else{
			x1_re = -this.b / (2 * this.a);
			x1_im = Math.sqrt(-delta) / (2 * this.a);
			x2_re = -this.b / (2 * this.a);
			x2_im = -Math.sqrt(-delta) / (2 * this.a);
		}
		
		var solution = {};
		solution.x1 = {re: x1_re, im: x1_im};
		solution.x2 = {re: x2_re, im: x2_im};		
		
		return solution;
		
	} // end of solve
}//end of class