const tableDataNested = [{"state": "Maharashtra", "confirmed": 3320, "recovered": 331, "deaths": 201, "active": 2788, "active_new": 80, "confirmed_new": 118, "recovered_new": 31, "deaths_new": 7}, {"state": "Delhi", "confirmed": 1707, "recovered": 72, "deaths": 42, "active": 1593, "active_new": 43, "confirmed_new": 67, "recovered_new": 20, "deaths_new": 4}, {"state": "Tamil Nadu", "confirmed": 1323, "recovered": 283, "deaths": 15, "active": 1025, "active_new": -47, "confirmed_new": 56, "recovered_new": 103, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 1229, "recovered": 183, "deaths": 17, "active": 1029, "active_new": 73, "confirmed_new": 98, "recovered_new": 19, "deaths_new": 6}, {"state": "Madhya Pradesh", "confirmed": 1310, "recovered": 70, "deaths": 69, "active": 1171, "active_new": 132, "confirmed_new": 146, "recovered_new": 0, "deaths_new": 14}, {"state": "Gujarat", "confirmed": 1099, "recovered": 86, "deaths": 41, "active": 972, "active_new": 152, "confirmed_new": 170, "recovered_new": 13, "deaths_new": 5}, {"state": "Uttar Pradesh", "confirmed": 849, "recovered": 82, "deaths": 14, "active": 753, "active_new": 29, "confirmed_new": 44, "recovered_new": 14, "deaths_new": 1}, {"state": "Telangana", "confirmed": 766, "recovered": 187, "deaths": 18, "active": 561, "active_new": 66, "confirmed_new": 66, "recovered_new": 0, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 572, "recovered": 35, "deaths": 14, "active": 523, "active_new": 23, "confirmed_new": 38, "recovered_new": 15, "deaths_new": 0}, {"state": "Kerala", "confirmed": 395, "recovered": 255, "deaths": 2, "active": 138, "active_new": -9, "confirmed_new": 1, "recovered_new": 10, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 359, "recovered": 88, "deaths": 13, "active": 258, "active_new": 38, "confirmed_new": 44, "recovered_new": 6, "deaths_new": 0}, {"state": "Jammu and Kashmir", "confirmed": 328, "recovered": 42, "deaths": 5, "active": 281, "active_new": 9, "confirmed_new": 14, "recovered_new": 4, "deaths_new": 1}, {"state": "West Bengal", "confirmed": 255, "recovered": 51, "deaths": 10, "active": 194, "active_new": 15, "confirmed_new": 24, "recovered_new": 9, "deaths_new": 0}, {"state": "Haryana", "confirmed": 223, "recovered": 86, "deaths": 3, "active": 134, "active_new": -13, "confirmed_new": 8, "recovered_new": 21, "deaths_new": 0}, {"state": "Punjab", "confirmed": 211, "recovered": 30, "deaths": 14, "active": 167, "active_new": 13, "confirmed_new": 14, "recovered_new": 1, "deaths_new": 0}, {"state": "Bihar", "confirmed": 83, "recovered": 37, "deaths": 1, "active": 45, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Odisha", "confirmed": 60, "recovered": 21, "deaths": 1, "active": 38, "active_new": -2, "confirmed_new": 0, "recovered_new": 2, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 40, "recovered": 9, "deaths": 0, "active": 31, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 36, "recovered": 24, "deaths": 0, "active": 12, "active_new": 2, "confirmed_new": 3, "recovered_new": 1, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 36, "recovered": 16, "deaths": 2, "active": 18, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 34, "recovered": 9, "deaths": 1, "active": 24, "active_new": -4, "confirmed_new": 0, "recovered_new": 4, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 32, "recovered": 0, "deaths": 2, "active": 30, "active_new": 3, "confirmed_new": 3, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 21, "recovered": 9, "deaths": 0, "active": 12, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 18, "recovered": 14, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 12, "recovered": 11, "deaths": 0, "active": 1, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 9, "recovered": 0, "deaths": 1, "active": 8, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 6, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": -1, "confirmed_new": -1, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];