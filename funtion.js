
function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ': is a even Number');
        }
        else{
            console.log(num * 2, ': is a odd Number');
        }
    }
}

nums = [25, 45, 23, 22, 15, 4, 91]
evenify_all(nums);
friend_age = [23, 25, 24, 22, 26, 24, 28, 19, 20]
console.log(friend_age, ': Friends age');
evenify_all(friend_age);