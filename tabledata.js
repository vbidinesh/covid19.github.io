const tableDataNested = [{"state": "Maharashtra", "confirmed": 70013, "recovered": 30108, "deaths": 2362, "active": 37543, "active_new": 1503, "confirmed_new": 2358, "recovered_new": 779, "deaths_new": 76}, {"state": "Tamil Nadu", "confirmed": 23495, "recovered": 13170, "deaths": 187, "active": 10138, "active_new": 738, "confirmed_new": 1162, "recovered_new": 413, "deaths_new": 11}, {"state": "Delhi", "confirmed": 20834, "recovered": 8746, "deaths": 523, "active": 11565, "active_new": 672, "confirmed_new": 990, "recovered_new": 268, "deaths_new": 50}, {"state": "Gujarat", "confirmed": 17217, "recovered": 10780, "deaths": 1063, "active": 5374, "active_new": -463, "confirmed_new": 423, "recovered_new": 861, "deaths_new": 25}, {"state": "Rajasthan", "confirmed": 9100, "recovered": 6213, "deaths": 199, "active": 2688, "active_new": 84, "confirmed_new": 269, "recovered_new": 181, "deaths_new": 4}, {"state": "Madhya Pradesh", "confirmed": 8283, "recovered": 5003, "deaths": 358, "active": 2922, "active_new": 25, "confirmed_new": 194, "recovered_new": 161, "deaths_new": 8}, {"state": "Uttar Pradesh", "confirmed": 8361, "recovered": 5030, "deaths": 222, "active": 3109, "active_new": 94, "confirmed_new": 286, "recovered_new": 187, "deaths_new": 5}, {"state": "West Bengal", "confirmed": 5772, "recovered": 2306, "deaths": 325, "active": 3141, "active_new": 114, "confirmed_new": 271, "recovered_new": 149, "deaths_new": 8}, {"state": "State Unassigned", "confirmed": 5630, "recovered": 0, "deaths": 0, "active": 5630, "active_new": 139, "confirmed_new": 139, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 3945, "recovered": 1741, "deaths": 23, "active": 2181, "active_new": -83, "confirmed_new": 138, "recovered_new": 221, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3676, "recovered": 2374, "deaths": 64, "active": 1238, "active_new": 69, "confirmed_new": 105, "recovered_new": 34, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 3408, "recovered": 1328, "deaths": 52, "active": 2026, "active_new": 76, "confirmed_new": 187, "recovered_new": 110, "deaths_new": 1}, {"state": "Telangana", "confirmed": 2792, "recovered": 1491, "deaths": 88, "active": 1213, "active_new": 25, "confirmed_new": 94, "recovered_new": 63, "deaths_new": 6}, {"state": "Jammu and Kashmir", "confirmed": 2601, "recovered": 946, "deaths": 31, "active": 1624, "active_new": 133, "confirmed_new": 155, "recovered_new": 19, "deaths_new": 3}, {"state": "Haryana", "confirmed": 2356, "recovered": 1055, "deaths": 21, "active": 1280, "active_new": 257, "confirmed_new": 265, "recovered_new": 7, "deaths_new": 1}, {"state": "Punjab", "confirmed": 2301, "recovered": 2000, "deaths": 44, "active": 257, "active_new": 26, "confirmed_new": 38, "recovered_new": 13, "deaths_new": -1}, {"state": "Odisha", "confirmed": 2104, "recovered": 1245, "deaths": 9, "active": 850, "active_new": 37, "confirmed_new": 156, "recovered_new": 119, "deaths_new": 0}, {"state": "Assam", "confirmed": 1464, "recovered": 285, "deaths": 4, "active": 1172, "active_new": 25, "confirmed_new": 124, "recovered_new": 99, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1327, "recovered": 608, "deaths": 11, "active": 708, "active_new": 38, "confirmed_new": 57, "recovered_new": 18, "deaths_new": 1}, {"state": "Uttarakhand", "confirmed": 959, "recovered": 222, "deaths": 5, "active": 729, "active_new": -68, "confirmed_new": 52, "recovered_new": 120, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 635, "recovered": 256, "deaths": 5, "active": 374, "active_new": 25, "confirmed_new": 25, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 548, "recovered": 121, "deaths": 1, "active": 426, "active_new": 43, "confirmed_new": 50, "recovered_new": 7, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 340, "recovered": 118, "deaths": 6, "active": 213, "active_new": 1, "confirmed_new": 10, "recovered_new": 9, "deaths_new": 0}, {"state": "Tripura", "confirmed": 418, "recovered": 173, "deaths": 0, "active": 245, "active_new": 101, "confirmed_new": 102, "recovered_new": 1, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 297, "recovered": 214, "deaths": 4, "active": 79, "active_new": -11, "confirmed_new": 4, "recovered_new": 15, "deaths_new": 0}, {"state": "Manipur", "confirmed": 83, "recovered": 11, "deaths": 0, "active": 72, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 77, "recovered": 47, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 73, "recovered": 50, "deaths": 0, "active": 23, "active_new": -4, "confirmed_new": 2, "recovered_new": 6, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 79, "recovered": 25, "deaths": 0, "active": 54, "active_new": 20, "confirmed_new": 22, "recovered_new": 2, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 43, "recovered": 0, "deaths": 0, "active": 43, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 28, "recovered": 12, "deaths": 1, "active": 15, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 20, "recovered": 1, "deaths": 0, "active": 19, "active_new": 16, "confirmed_new": 16, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 3, "recovered": 1, "deaths": 0, "active": 2, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];