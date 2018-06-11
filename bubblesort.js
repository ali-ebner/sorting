function bubbleSort(arr){
	if (arr.length<=1){
		return arr;
	}
	else{
		let end = arr.length - 1;
		for( let i = 0; i <= arr.length-1; i++){
			let temp = arr[0];
			for(let j = 1; j <= end; j++){
				if (temp > arr[j]){
					let swapped = j-1;
					let newIndex = j;
					swap(arr, temp, swapped, arr[j], newIndex);
				}
				else {
					temp = arr[j];
				}
			}
			end--;
		}
	}
	return arr;
}

function swap(arr, temp, swapped, arrJ, newIndex){
	arr[swapped] = arrJ;
	arr[newIndex] = temp;
}
