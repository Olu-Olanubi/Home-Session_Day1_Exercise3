
//creates a class company with certain parameters.
//It is a simple class to demonstrate OOP implementation in Javascript.
'use strict'
function Company(name, location, business, employees){
		this.name = name;
		this.location = location;
		this.business = business;
		this.staff = employees;
		
		if (employees<=100){
			this.size = 'SME';
			}
		if (employees > 100 &&  employees <= 1000){
			this.size ='Big Company';
			 }
		if (employees > 1000){
			this.size = 'Multinational';
			}

		 var finance = ['Banking', 'Insurance', 'Stockbroking', 'Commodities', 'Forex']; 
		 var tech =  ['Software','Web Services', 'Internet', 'eCommerce', 'Electronics', 'Computers', 'Networking', 'Mobile'];
			for( var i = 0; i < finance.length; i++){
				if(business === finance[i]){
					this.industry = 'Finance';
					}
				else{
					for (var i = 0; i < tech.length; i++){
					if (business === tech[i]){
							this.industry = 'Technology';
						}
					}	
					
					}
				}			
	
//statement to output company profile
this.profile = "We are " + this.name + ", headquartered in " + this.location + ". We are into " + this.business 
		+ " and our staff strength is " + this.staff + ". We are a " + this.size;

}
module.exports = Company;
