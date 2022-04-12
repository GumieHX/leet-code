// LeetCode 380

// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.


class RandomizedSet {

    _nums : number[];
    _set : Map<number,number>;

    constructor() {
        this._nums = [];
        this._set = new Map<number,number>();
    }

    insert(val: number): boolean {
        if(this._set.has(val)) return false;

        const n = this._nums.length;
        this._nums.push(val);
        this._set.set(val,n);

        return true;
    }

    remove(val: number): boolean {
        if(!this._set.has(val)) return false;
        
        const index = this._set.get(val);
        this._nums[index] = this._nums[this._nums.length -1];
        this._set.set(this._nums[index],index);
        this._nums.pop();
        this._set.delete(val);

        return true;
    }

    getRandom(): number {
        const random = Math.floor(Math.random() * this._nums.length);
        return this._nums[random];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */