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
