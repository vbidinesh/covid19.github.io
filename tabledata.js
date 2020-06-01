const tableDataNested = [{"state": "Maharashtra", "confirmed": 67655, "recovered": 29329, "deaths": 2286, "active": 36040, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 23495, "recovered": 13170, "deaths": 187, "active": 10138, "active_new": 738, "confirmed_new": 1162, "recovered_new": 413, "deaths_new": 11}, {"state": "Delhi", "confirmed": 19844, "recovered": 8478, "deaths": 473, "active": 10893, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 16794, "recovered": 9919, "deaths": 1038, "active": 5837, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 8980, "recovered": 6043, "deaths": 198, "active": 2739, "active_new": 135, "confirmed_new": 149, "recovered_new": 11, "deaths_new": 3}, {"state": "Madhya Pradesh", "confirmed": 8089, "recovered": 4842, "deaths": 350, "active": 2897, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttar Pradesh", "confirmed": 8075, "recovered": 4843, "deaths": 217, "active": 3015, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 5772, "recovered": 2306, "deaths": 325, "active": 3141, "active_new": 114, "confirmed_new": 271, "recovered_new": 149, "deaths_new": 8}, {"state": "State Unassigned", "confirmed": 5630, "recovered": 0, "deaths": 0, "active": 5630, "active_new": 139, "confirmed_new": 139, "recovered_new": 0, "deaths_new": 0}, {"state": "Bihar", "confirmed": 3872, "recovered": 1741, "deaths": 23, "active": 2108, "active_new": -156, "confirmed_new": 65, "recovered_new": 221, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 3676, "recovered": 2374, "deaths": 64, "active": 1238, "active_new": 69, "confirmed_new": 105, "recovered_new": 34, "deaths_new": 2}, {"state": "Karnataka", "confirmed": 3408, "recovered": 1328, "deaths": 52, "active": 2026, "active_new": 76, "confirmed_new": 187, "recovered_new": 110, "deaths_new": 1}, {"state": "Telangana", "confirmed": 2698, "recovered": 1428, "deaths": 82, "active": 1188, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Punjab", "confirmed": 2263, "recovered": 1987, "deaths": 45, "active": 231, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 2601, "recovered": 946, "deaths": 31, "active": 1624, "active_new": 133, "confirmed_new": 155, "recovered_new": 19, "deaths_new": 3}, {"state": "Odisha", "confirmed": 2104, "recovered": 1245, "deaths": 9, "active": 850, "active_new": 37, "confirmed_new": 156, "recovered_new": 119, "deaths_new": 0}, {"state": "Haryana", "confirmed": 2356, "recovered": 1055, "deaths": 20, "active": 1281, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Kerala", "confirmed": 1327, "recovered": 608, "deaths": 11, "active": 708, "active_new": 38, "confirmed_new": 57, "recovered_new": 18, "deaths_new": 1}, {"state": "Assam", "confirmed": 1391, "recovered": 186, "deaths": 4, "active": 1198, "active_new": 51, "confirmed_new": 51, "recovered_new": 0, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 930, "recovered": 200, "deaths": 5, "active": 722, "active_new": -75, "confirmed_new": 23, "recovered_new": 98, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 635, "recovered": 256, "deaths": 5, "active": 374, "active_new": 25, "confirmed_new": 25, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 503, "recovered": 114, "deaths": 1, "active": 388, "active_new": 5, "confirmed_new": 5, "recovered_new": 0, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 338, "recovered": 116, "deaths": 6, "active": 213, "active_new": 1, "confirmed_new": 8, "recovered_new": 7, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 294, "recovered": 200, "deaths": 4, "active": 90, "active_new": 0, "confirmed_new": 1, "recovered_new": 1, "deaths_new": 0}, {"state": "Tripura", "confirmed": 321, "recovered": 173, "deaths": 0, "active": 148, "active_new": 4, "confirmed_new": 5, "recovered_new": 1, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 77, "recovered": 47, "deaths": 0, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 71, "recovered": 44, "deaths": 0, "active": 27, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 78, "recovered": 11, "deaths": 0, "active": 67, "active_new": 7, "confirmed_new": 7, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 70, "recovered": 25, "deaths": 0, "active": 45, "active_new": 11, "confirmed_new": 13, "recovered_new": 2, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 43, "recovered": 0, "deaths": 0, "active": 43, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 33, "recovered": 33, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 27, "recovered": 12, "deaths": 1, "active": 14, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 19, "recovered": 1, "deaths": 0, "active": 18, "active_new": 15, "confirmed_new": 15, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli and Daman and Diu", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];