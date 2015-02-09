var color = ['orange', 'green', 'blue', 'lightblue', 'dark', 'maroon', 'red', 'brown', 'purple'];


Template.main.rendered = function() {
	var chart = new Chartist.Pie('.ct-chart', {
  series: [{data: 70}, {data: 30}]
}, {
  donut: true,
  donutWidth: 20,
  startAngle: 270,
  total: 0,
  showLabel: false
});
}

Template.main.helpers({
	pullRequest: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Last Pull Request",
			description: "Added Comments",
			projectName: "for " + "Catch",
			author: "Denny Scott",
			avatar: "http://placehold.it/100x100"
		};
	},

	data: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Last Pull Request",
			description: "Added Comments",
			projectName: "for " + "Catch",
			author: "Denny Scott",
			avatar: "http://placehold.it/100x100"
		};
	},

		totalStoryPoints: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Work Completed",
			description: "1.3K Story Points"
		};
	},

	currentSprintsStoryPoints: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Current Sprints Remaining",
			chart: true,
			description: "42 Story Points"
		};
	},

		lastBugCompleted: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Last Bug Completed",
			description: "Fix Dennys Bugs",
			projectName: "for " + "Catch",
			author: "Jon Dart",
			avatar: "http://placehold.it/100x100"
		};
	},

		lastBugIssued: function() {
		return {
			color: color[Math.floor(Math.random() * (color.length))],
			title: "Last Bug Issued",
			description: "Fix Dennys Bugs",
			projectName: "for " + "Catch",
			author: "Craig Vogel",
			avatar: "http://placehold.it/100x100"
		};
	},



});
