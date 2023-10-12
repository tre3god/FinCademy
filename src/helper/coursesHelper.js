export function sortCourses(allCourses) {
	allCourses.sort((a, b) => {
		const ratingA = a.averageRating || 0;
		const ratingB = b.averageRating || 0;

		if (ratingA < ratingB) {
			return 1;
		}
		if (ratingA > ratingB) {
			return -1;
		}
		return 0;
	});
}

export function averageRating(allCourses) {
	allCourses.forEach((course) => {
		const sumOfRatings = course.reviews.reduce(
			(total, review) => total + review.rating,
			0,
		);
		course.averageRating = sumOfRatings / course.reviews.length;
	});

	return allCourses;
}
