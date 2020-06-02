const tableDataNested = [{"state": "Maharashtra", "confirmed": 70013, "recovered": 30108, "deaths": 2362, "active": 37543, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 23495, "recovered": 13170, "deaths": 187, "active": 10138, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Delhi", "confirmed": 20834, "recovered": 8746, "deaths": 523, "active": 11565, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 17217, "recovered": 10780, "deaths": 1063, "active": 5374, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 9271, "recovered": 6267, "deaths": 201, "active": 2803, "active_new": 115, "confirmed_new": 171, "recovered_new": 54, "deaths_new": 2}, {"state": "Madhya Pradesh", "confirmed": 8283, "recovered": 5003, "deaths": 358, "active": 2922, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 8361, "recovered": 5030, "deaths": 222, "active": 3109, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 5772, "recovered": 2306, "deaths": 325, "active": 3141, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "State Unassigned", "confirmed": 6414, "recovered": 0, "deaths": 0, "active": 6414, "active_new": 784, "confirmed_new": 784, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 4049, "recovered": 1803, "deaths": 23, "active": 2223, "active_new": 104, "confirmed_new": 104, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3791, "recovered": 2414, "deaths": 64, "active": 1313, "active_new": 75, "confirmed_new": 115, "recovered_new": 40, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 3408, "recovered": 1328, "deaths": 52, "active": 2026, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Telangana", "confirmed": 2792, "recovered": 1491, "deaths": 88, "active": 1213, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 2601, "recovered": 946, "deaths": 31, "active": 1624, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Haryana", "confirmed": 2356, "recovered": 1057, "deaths": 21, "active": 1278, "active_new": -2, "confirmed_new": 0, "recovered_new": 2, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2301, "recovered": 2000, "deaths": 44, "active": 257, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 2245, "recovered": 1245, "deaths": 9, "active": 991, "active_new": 141, "confirmed_new": 141, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 1514, "recovered": 325, "deaths": 4, "active": 1182, "active_new": 28, "confirmed_new": 28, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1327, "recovered": 608, "deaths": 11, "active": 708, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 999, "recovered": 243, "deaths": 7, "active": 746, "active_new": 17, "confirmed_new": 40, "recovered_new": 21, "deaths_new": 2}, {"state": "Jharkhand", "confirmed": 675, "recovered": 296, "deaths": 5, "active": 374, "active_new": 14, "confirmed_new": 14, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 548, "recovered": 121, "deaths": 1, "active": 426, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 340, "recovered": 122, "deaths": 6, "active": 209, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Tripura", "confirmed": 423, "recovered": 173, "deaths": 0, "active": 250, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 297, "recovered": 214, "deaths": 4, "active": 79, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 83, "recovered": 11, "deaths": 0, "active": 72, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 77, "recovered": 47, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 73, "recovered": 50, "deaths": 0, "active": 23, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 79, "recovered": 25, "deaths": 0, "active": 54, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 49, "recovered": 0, "deaths": 0, "active": 49, "active_new": 6, "confirmed_new": 6, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 28, "recovered": 12, "deaths": 1, "active": 15, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 27, "recovered": 1, "deaths": 0, "active": 26, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 3, "recovered": 1, "deaths": 0, "active": 2, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 13, "recovered": 1, "deaths": 0, "active": 12, "active_new": 12, "confirmed_new": 12, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];