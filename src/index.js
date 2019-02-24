/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	let trianglesIndexex = [],
		triangles = 0;

		function checkTriangle(index1, index2, index3) {
			if (trianglesIndexex.indexOf(index1) == -1 &&
				trianglesIndexex.indexOf(index2) == -1 &&
				trianglesIndexex.indexOf(index3) == -1 &&
				//index1 >= 0 &&
				//index2 >= 0 &&
				//index3 >= 0 &&
				index1 != preferences[index1] - 1) {

				if (preferences[preferences[preferences[index1] - 1] - 1] -1 == index1) {
					triangles++;
					trianglesIndexex.push(index1);
					trianglesIndexex.push(index2);
					trianglesIndexex.push(index3);

				};

			};
		};

	preferences.forEach(function(lover, index) {
			checkTriangle(index, lover - 1, preferences[lover - 1] - 1);
	});

	return triangles
};
