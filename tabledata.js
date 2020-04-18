const tableDataNested = [{"state": "Maharashtra", "confirmed": 3648, "recovered": 365, "deaths": 211, "active": 3072, "active_new": 284, "confirmed_new": 328, "recovered_new": 34, "deaths_new": 10}, {"state": "Delhi", "confirmed": 1893, "recovered": 207, "deaths": 42, "active": 1644, "active_new": 51, "confirmed_new": 186, "recovered_new": 135, "deaths_new": 0}, {"state": "Tamil Nadu", "confirmed": 1372, "recovered": 365, "deaths": 15, "active": 992, "active_new": -33, "confirmed_new": 49, "recovered_new": 82, "deaths_new": 0}, {"state": "Rajasthan", "confirmed": 1351, "recovered": 200, "deaths": 21, "active": 1130, "active_new": 101, "confirmed_new": 122, "recovered_new": 17, "deaths_new": 4}, {"state": "Madhya Pradesh", "confirmed": 1402, "recovered": 127, "deaths": 69, "active": 1206, "active_new": 35, "confirmed_new": 92, "recovered_new": 57, "deaths_new": 0}, {"state": "Gujarat", "confirmed": 1376, "recovered": 93, "deaths": 53, "active": 1230, "active_new": 258, "confirmed_new": 277, "recovered_new": 7, "deaths_new": 12}, {"state": "Uttar Pradesh", "confirmed": 974, "recovered": 108, "deaths": 14, "active": 852, "active_new": 99, "confirmed_new": 125, "recovered_new": 26, "deaths_new": 0}, {"state": "Telangana", "confirmed": 809, "recovered": 186, "deaths": 18, "active": 605, "active_new": 44, "confirmed_new": 43, "recovered_new": -1, "deaths_new": 0}, {"state": "Andhra Pradesh", "confirmed": 603, "recovered": 42, "deaths": 16, "active": 545, "active_new": 22, "confirmed_new": 31, "recovered_new": 7, "deaths_new": 2}, {"state": "Kerala", "confirmed": 399, "recovered": 257, "deaths": 2, "active": 140, "active_new": 2, "confirmed_new": 4, "recovered_new": 2, "deaths_new": 0}, {"state": "Karnataka", "confirmed": 384, "recovered": 104, "deaths": 14, "active": 266, "active_new": 8, "confirmed_new": 25, "recovered_new": 16, "deaths_new": 1}, {"state": "Jammu and Kashmir", "confirmed": 341, "recovered": 51, "deaths": 5, "active": 285, "active_new": 4, "confirmed_new": 13, "recovered_new": 9, "deaths_new": 0}, {"state": "West Bengal", "confirmed": 287, "recovered": 55, "deaths": 12, "active": 220, "active_new": 26, "confirmed_new": 32, "recovered_new": 4, "deaths_new": 2}, {"state": "Haryana", "confirmed": 232, "recovered": 100, "deaths": 3, "active": 129, "active_new": -5, "confirmed_new": 9, "recovered_new": 14, "deaths_new": 0}, {"state": "Punjab", "confirmed": 234, "recovered": 31, "deaths": 16, "active": 187, "active_new": 20, "confirmed_new": 23, "recovered_new": 1, "deaths_new": 2}, {"state": "Bihar", "confirmed": 86, "recovered": 42, "deaths": 1, "active": 43, "active_new": -4, "confirmed_new": 1, "recovered_new": 5, "deaths_new": 0}, {"state": "Odisha", "confirmed": 61, "recovered": 24, "deaths": 1, "active": 36, "active_new": -2, "confirmed_new": 1, "recovered_new": 3, "deaths_new": 0}, {"state": "Uttarakhand", "confirmed": 42, "recovered": 9, "deaths": 0, "active": 33, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Chhattisgarh", "confirmed": 36, "recovered": 25, "deaths": 0, "active": 11, "active_new": -1, "confirmed_new": 0, "recovered_new": 1, "deaths_new": 0}, {"state": "Himachal Pradesh", "confirmed": 39, "recovered": 16, "deaths": 2, "active": 21, "active_new": 1, "confirmed_new": 1, "recovered_new": 0, "deaths_new": 0}, {"state": "Assam", "confirmed": 34, "recovered": 12, "deaths": 1, "active": 21, "active_new": -3, "confirmed_new": 0, "recovered_new": 3, "deaths_new": 0}, {"state": "Jharkhand", "confirmed": 32, "recovered": 0, "deaths": 2, "active": 30, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Chandigarh", "confirmed": 23, "recovered": 9, "deaths": 0, "active": 14, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Ladakh", "confirmed": 18, "recovered": 14, "deaths": 0, "active": 4, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Andaman and Nicobar Islands", "confirmed": 14, "recovered": 11, "deaths": 0, "active": 3, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Meghalaya", "confirmed": 11, "recovered": 0, "deaths": 1, "active": 10, "active_new": 2, "confirmed_new": 2, "recovered_new": 0, "deaths_new": 0}, {"state": "Goa", "confirmed": 7, "recovered": 6, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Puducherry", "confirmed": 7, "recovered": 1, "deaths": 0, "active": 6, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Manipur", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Tripura", "confirmed": 2, "recovered": 1, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Mizoram", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Arunachal Pradesh", "confirmed": 1, "recovered": 1, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Nagaland", "confirmed": 1, "recovered": 0, "deaths": 0, "active": 1, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Dadra and Nagar Haveli", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Daman and Diu", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Lakshadweep", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}, {"state": "Sikkim", "confirmed": 0, "recovered": 0, "deaths": 0, "active": 0, "active_new": 0, "confirmed_new": 0, "recovered_new": 0, "deaths_new": 0}];