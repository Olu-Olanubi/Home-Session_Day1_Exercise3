var Company = require('../src/company.js');
(function(){
  'use strict';
  describe("Company Class: Create a company, and assign its profile", function() {

    it("The company should be a type of `object`, and an instance of the `Company` class", function() {
      var company = new Company('Andela');
      expect(typeof company).toEqual(typeof {});
      expect(company instanceof Company).toBeTruthy();
    });
});

    describe("Company Class: Create a company, and assign its profile", function() {

    it("The company name and location should be a property of the company", function() {
      var company  = new Company('Andela', 'Lagos');
      expect(company.name).toBe('Andela');
      expect(company.location).toBe('Lagos');
  	});
    it("The company name and location should be a property of the company", function() {
      var company  = new Company('Apple', 'California');
      expect(company.name).toBe('Apple');
      expect(company.location).toBe('California');
    });
  });

    describe("Company Class: Create a company, and assign its profile", function() {

  	it("The company name and location and other parameters should be a property of the company", function() {
      var company  = new Company('Cisco', 'San-Francisco', 'Networking');
      expect(company.name).toBe('Cisco');
      expect(company.location).toBe('San-Francisco');
      expect(company.business).toBe('Networking');
      expect(company.industry).toBe('Technology');
  	});
  });
    describe("Company Class: Create a company, and assign its profile", function() {

  	it("The company name and location and other parameters should be a property of the company", function() {
      var company  = new Company('Google', 'California', 'Web Services', 15000);
      expect(company.name).toBe('Google');
      expect(company.location).toBe('California');
      expect(company.business).toBe('Web Services');
      expect(company.staff).toEqual(15000);
      expect(company.size).toBe('Multinational');
  	});

});
    describe("Company Class: Create a company, and assign its profile", function() {
    	it("The company name and location and other parameters should be a property of the company", function() {

    		var company = new Company('Andela', 'Lagos', 'Software', 100);
    		expect(company.size).toBe('SME');
    	});

      it("The company name and location and other parameters should be a property of the company", function() {

        var company = new Company('Microsoft', 'Washington', 'Software', 500);
        expect(company.size).toBe('Big Company');
      });

      it("The company name and location and other parameters should be a property of the company", function() {

        var company = new Company('Microsoft', 'Washington', 'Software', 500);
        expect(company.industry).toBe('Technology');
      });
      it("The company name and location and other parameters should be a property of the company", function() {
      var company = new Company('CitiBank', 'New York', 'Banking', 5000);

        expect(company.industry).toBe('Finance');
      });
    
    });

    describe("Company Class: Create a company, and assign its profile", function() {
    	it("The company name and location and other parameters should be a property of the company", function() {

    		var company = new Company('Andela', 'Lagos', 'Software', 120);
    		expect(company.profile).toBe('We are Andela, headquartered in Lagos. We are into Software and our staff strength is 120. We are a Big Company');
    	});

      it("The company name and location and other parameters should be a property of the company", function() {

        var company = new Company('JP Morgan', 'New York', 'Banking', 15000);
        expect(company.profile).toBe('We are JP Morgan, headquartered in New York. We are into Banking and our staff strength is 15000. We are a Multinational');
      });
    });
})();
