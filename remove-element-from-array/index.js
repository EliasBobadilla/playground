const removeElement = (nums, val) => {
	let result = 0

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			const current = nums.splice(i, 1)
			nums.unshift(current[0])
			result += 1
			continue
		}
		nums[i] = '_'
	}

	console.log(nums)
	return result
}


const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.log(`=> ${result}`)
