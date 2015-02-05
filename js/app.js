var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/');
	this.level = ko.computed(
		function() {
			if (this.clickCount() < 5)
				return "Newborn";
			else if (this.clickCount() < 10)
				return "Teen";
			else
				return "Sage Cat";
	
	}, this);

	

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
		/* essentially
		** var count = 0;
		** count++; */
	};

}

ko.applyBindings(new ViewModel());