# 🧮 Two Sum

## 📜 Problem Statement
Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

⚠️ You may assume that:
- Each input would have exactly **one solution**.
- You may **not** use the same element twice.
- You can return the answer in **any order**.

---

## 📝 Examples

### 🔹 Example 1
📥 Input: nums = [2,7,11,15], target = 9

📤 Output: [0,1]

💡 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


### 🔹 Example 2
📥 Input: nums = [3,2,4], target = 6

📤 Output: [1,2]



### 🔹 Example 3
📥 Input: nums = [3,3], target = 6

📤 Output: [0,1]


---

## ⚙️ Constraints
```
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
```

---

## 💡 Follow-up
Can you come up with an algorithm that runs in **less than O(n²)** time complexity?